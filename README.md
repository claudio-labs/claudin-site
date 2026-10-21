# <img src="site/img/icon.png" alt="" width="38" valign="middle" /> Claudin Site

Source of the [Claudin](https://github.com/claudio-labs/claudin) website and docs, published at [claudiolabs.ai](https://claudiolabs.ai).

The site is plain static HTML, CSS and JS in `site/` — no framework, no bundler. The CLI itself lives in the [claudin](https://github.com/claudio-labs/claudin) repo.

> Independent project. Not affiliated with, endorsed by, or sponsored by Anthropic.

---

## Layout

```
site/                 # everything that gets deployed
├── index.html        # landing page
├── install.html      # install guide (+ install.sh)
├── providers.html    # provider presets
├── changelog.html    # renders changelog-data.json client-side
├── docs/             # feature docs, one HTML page each
├── css/              # tokens, reset, layout, style
├── js/main.js
├── _headers          # Cloudflare Pages headers
└── _redirects        # Cloudflare Pages redirects
scripts/              # build steps run before deploy
CHANGELOG.md          # source for the changelog page
```

---

## Build

Requires Node.js 20+.

```bash
npm ci
npm run build
```

`npm run build` runs two scripts:

| Script | Reads | Writes |
|---|---|---|
| `scripts/build-changelog.js` | `CHANGELOG.md` | `site/changelog-data.json` |
| `scripts/build-llms.js` | the docs sidebar and page HTML | `site/llms.txt` and a Markdown mirror (`<page>.md`) of every docs page |

The generated files are git-ignored; they are rebuilt on every deploy.

---

## Preview locally

After building, serve `site/` with any static server:

```bash
python3 -m http.server 8000 --directory site
```

`_headers` and `_redirects` are Cloudflare Pages features and are not applied by a plain static server.

---

## Editing the docs

- Docs pages in `site/docs/*.html` are hand-written. Their source of truth is `docs/features/*.md` in the claudin repo — check there before changing behavior described on a page.
- There is no templating: every docs page repeats the same `<aside class="docs-sidebar">` block. When adding a page, add its link to the sidebar on **every** page, then add it to `site/sitemap.xml` and to the card grid in `site/docs/index.html`.
- Changelog entries come from `CHANGELOG.md`; edit that file, not the generated JSON.

---

## Deploy

Pushes to `main` that touch `site/`, `scripts/`, `CHANGELOG.md` or the package files trigger `.github/workflows/deploy.yml`, which builds and publishes `site/` to Cloudflare Pages.

---

## License

See [LICENSE](LICENSE).
