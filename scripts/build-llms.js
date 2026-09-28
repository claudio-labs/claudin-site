#!/usr/bin/env node
// Writes site/llms.txt and a Markdown mirror (<page>.md) of every page linked
// from the docs sidebar. Agents — Claudin's own claudin-guide first — read
// these verbatim instead of an HTML page squeezed through a summarizer.

import { copyFileSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');
const site = resolve(root, 'site');

const ORIGIN = 'https://claudiolabs.ai';
// The sidebar is the same on every docs page; index.html is the reference copy.
const SIDEBAR_PAGE = '/docs/index.html';
// changelog.html renders changelog-data.json client-side, so its <main> is
// empty — the mirror is CHANGELOG.md itself.
const CHANGELOG_PAGE = '/changelog.html';

const SIDEBAR_RE = /<aside class="docs-sidebar"[^>]*>([\s\S]*?)<\/aside>/;
const SIDEBAR_ITEM_RE = /<div class="docs-nav-section-title">([^<]*)<\/div>|<a href="([^"]*)"/g;
const MAIN_RE = /<main[^>]*>([\s\S]*?)<\/main>/;
const H1_RE = /<h1[^>]*>([\s\S]*?)<\/h1>/;
const DESCRIPTION_RE = /<meta name="description" content="([^"]*)"/;
const ATTR_URL_RE = /\b(href|src)="([^"]*)"/g;
const TAG_RE = /<[^>]+>/g;
const SPACE_RE = /\s+/g;
const HTML_EXT_RE = /\.html$/;
const PROMPT_RE = /^\$ /;
// Whitespace left behind by removed elements (the widget's copy buttons).
const BLANKISH_LINE_RE = /^[ \t]+$/gm;
const EXTRA_BLANK_LINES_RE = /\n{3,}/g;
const ENTITY_RE = /&(amp|lt|gt|quot|#39|nearr);/g;
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nearr: '↗' };

const decode = s => s.replace(ENTITY_RE, (_, e) => ENTITIES[e]);
const text = html => decode(html.replace(TAG_RE, '')).replace(SPACE_RE, ' ').trim();
const read = path => readFileSync(resolve(site, `.${path}`), 'utf8');
const mirrorPath = path => path.replace(HTML_EXT_RE, '.md');

function match(re, html, path, what) {
  const m = html.match(re);
  if (!m) throw new Error(`${path}: no ${what} found`);
  return m[1];
}

// Sidebar sections in order, each page once (configuration.html is linked
// three times, by anchor). Off-site links (GitHub) are skipped.
function readSidebar() {
  const sidebar = match(SIDEBAR_RE, read(SIDEBAR_PAGE), SIDEBAR_PAGE, 'sidebar');
  const sections = [];
  const seen = new Set();
  for (const [, title, href] of sidebar.matchAll(SIDEBAR_ITEM_RE)) {
    if (title !== undefined) {
      sections.push({ title: decode(title), pages: [] });
      continue;
    }
    const url = new URL(href, ORIGIN + SIDEBAR_PAGE);
    if (url.origin !== ORIGIN || seen.has(url.pathname)) continue;
    seen.add(url.pathname);
    sections.at(-1).pages.push(url.pathname);
  }
  // A docs page nobody linked still gets a mirror and an entry.
  const orphans = readdirSync(resolve(site, 'docs'))
    .filter(f => f.endsWith('.html'))
    .map(f => `/docs/${f}`)
    .filter(p => !seen.has(p));
  if (orphans.length) sections.push({ title: 'More', pages: orphans });
  return { sections: sections.filter(s => s.pages.length), mirrored: new Set([...seen, ...orphans]) };
}

// Links inside a mirror are absolute, and point at the mirror of a page that
// has one, so an agent can follow them without leaving Markdown.
function absolutize(html, path, mirrored) {
  return html.replace(ATTR_URL_RE, (_, attr, ref) => {
    const url = new URL(decode(ref), ORIGIN + path);
    if (url.origin === ORIGIN && mirrored.has(url.pathname)) url.pathname = mirrorPath(url.pathname);
    return `${attr}="${url.href}"`;
  });
}

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.use(gfm);
turndown.remove(['script', 'style', 'svg', 'button']);
// install.html's tabbed widget: one shell command per <span class="install-cmd">.
turndown.addRule('installCmd', {
  filter: node => node.nodeName === 'SPAN' && node.classList.contains('install-cmd'),
  replacement: (_, node) => `\n\n\`\`\`sh\n${node.textContent.replace(SPACE_RE, ' ').trim().replace(PROMPT_RE, '')}\n\`\`\`\n\n`,
});
// docs/index.html's feature cards: a block link holding a stat, a title and a
// description. As one list item they read as a link, not a paragraph soup.
turndown.addRule('docCard', {
  filter: node => node.nodeName === 'A' && node.classList.contains('doc-card'),
  replacement: (_, node) => {
    const part = cls => node.querySelector(`.${cls}`)?.textContent.replace(SPACE_RE, ' ').trim();
    const stat = part('doc-card-stat');
    return `\n- [${part('doc-card-title')}](${node.getAttribute('href')}): ${part('doc-card-desc')}${stat ? ` (${stat})` : ''}\n`;
  },
});

function buildPage(path, mirrored) {
  const html = read(path);
  const description = decode(match(DESCRIPTION_RE, html, path, 'meta description'));
  if (path === CHANGELOG_PAGE) {
    copyFileSync(resolve(root, 'CHANGELOG.md'), resolve(site, `.${mirrorPath(path)}`));
    return { path, title: 'Changelog', description };
  }
  const main = match(MAIN_RE, html, path, '<main>');
  const title = text(match(H1_RE, main, path, '<h1>'));
  const markdown = turndown
    .turndown(absolutize(main, path, mirrored))
    .replace(BLANKISH_LINE_RE, '')
    .replace(EXTRA_BLANK_LINES_RE, '\n\n')
    .trim();
  writeFileSync(resolve(site, `.${mirrorPath(path)}`), `${markdown}\n`);
  return { path, title, description };
}

const { sections, mirrored } = readSidebar();
const home = decode(match(DESCRIPTION_RE, read('/index.html'), '/index.html', 'meta description'));

const lines = [
  '# Claudin',
  '',
  `> ${home}`,
  '',
  'Every link below is the Markdown mirror of a page on claudiolabs.ai; the page itself is the same URL without `.md`.',
];
let count = 0;
for (const section of sections) {
  lines.push('', `## ${section.title}`, '');
  for (const path of section.pages) {
    const page = buildPage(path, mirrored);
    lines.push(`- [${page.title}](${ORIGIN}${mirrorPath(page.path)}): ${page.description}`);
    count++;
  }
}
writeFileSync(resolve(site, 'llms.txt'), `${lines.join('\n')}\n`);

console.log(`Wrote site/llms.txt with ${count} pages in ${sections.length} sections`);
