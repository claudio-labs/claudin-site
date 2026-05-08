/* ── Install tabs ────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.install-widget').forEach(widget => {
    const tabs   = widget.querySelectorAll('.install-tab');
    const panels = widget.querySelectorAll('.install-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        widget.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
      });
    });
  });
}

/* ── Copy to clipboard ───────────────────────────────────────── */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback for older browsers
        const el = document.createElement('textarea');
        el.value = text;
        el.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }

      const original = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = original;
      }, 2000);
    });
  });
}

/* ── Mobile hamburger ────────────────────────────────────────── */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Docs sidebar active link ────────────────────────────────── */
function initDocsNav() {
  const navLinks = document.querySelectorAll('.docs-nav-link[href^="#"]');
  if (!navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  document.querySelectorAll('h2[id], h3[id]').forEach(el => observer.observe(el));
}

/* ── Terminal animation ──────────────────────────────────────── */
const TERMINAL_SCRIPT = [
  { type: 'header' },
  { type: 'blank' },
  { type: 'cursor-idle', delay: 800 },
  { type: 'prompt', text: 'refactor auth.ts to use async/await', delay: 45 },
  { type: 'pause', delay: 500 },
  { type: 'output', text: '⠋ Reading auth.ts...', cls: 'terminal-text--muted', delay: 20 },
  { type: 'pause', delay: 700 },
  { type: 'output', text: '⠋ Applying edits...', cls: 'terminal-text--muted', delay: 20 },
  { type: 'pause', delay: 800 },
  { type: 'output', text: '✓ src/auth.ts — 3 functions updated', cls: 'terminal-text--green', delay: 22 },
  { type: 'blank' },
  { type: 'cursor-idle', delay: 600 },
  { type: 'prompt', text: '/provider switch gemini', delay: 55 },
  { type: 'pause', delay: 400 },
  { type: 'output', text: '✓ Switched to gemini (gemini-2.5-pro)', cls: 'terminal-text--green', delay: 20 },
  { type: 'blank' },
  { type: 'cursor' },
];

function initTerminal() {
  const container = document.getElementById('terminal-body');
  if (!container) return;

  let visible = true;
  let scriptRunning = false;

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function typeText(el, text, charDelay) {
    for (const ch of text) {
      if (!visible) return;
      el.textContent += ch;
      await sleep(charDelay + (Math.random() * 20 - 10));
    }
  }

  function addHeader() {
    const wrap = document.createElement('div');
    wrap.className = 'terminal-header-block';
    wrap.innerHTML = `
      <img src="img/mascot.png" class="terminal-mascot-img" alt="Claudio mascot" width="48" height="56" />
      <div class="terminal-meta">
        <span class="terminal-meta__name">Claudio <span class="terminal-text--muted">v0.1.6</span></span>
        <span class="terminal-text--muted">Anthropic · claude-sonnet-4-6</span>
        <span class="terminal-text--muted">~/projects/claudio</span>
      </div>`;
    container.appendChild(wrap);
  }

  async function runScript() {
    if (scriptRunning) return;
    scriptRunning = true;
    container.innerHTML = '';

    for (const step of TERMINAL_SCRIPT) {
      if (!visible) { scriptRunning = false; return; }

      if (step.type === 'header') {
        addHeader();

      } else if (step.type === 'pause') {
        await sleep(step.delay);

      } else if (step.type === 'blank') {
        container.appendChild(document.createElement('br'));

      } else if (step.type === 'cursor-idle') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = '❯ ';
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        line.appendChild(prompt);
        line.appendChild(cursor);
        container.appendChild(line);
        await sleep(step.delay);
        line.remove();

      } else if (step.type === 'cursor') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = '❯ ';
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        line.appendChild(prompt);
        line.appendChild(cursor);
        container.appendChild(line);
        await sleep(3000);

      } else if (step.type === 'prompt') {
        const line = document.createElement('div');
        line.className = 'terminal-line';

        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = '❯ ';

        const textEl = document.createElement('span');
        textEl.className = 'terminal-text';

        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        cursor.style.animation = 'none';
        cursor.style.opacity = '1';

        line.appendChild(prompt);
        line.appendChild(textEl);
        line.appendChild(cursor);
        container.appendChild(line);

        await typeText(textEl, step.text, step.delay);
        cursor.remove();
        await sleep(200);

      } else if (step.type === 'output') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        const textEl = document.createElement('span');
        textEl.className = step.cls || 'terminal-text';
        line.appendChild(textEl);
        container.appendChild(line);
        await typeText(textEl, step.text, step.delay);
        await sleep(80);
      }

      container.scrollTop = container.scrollHeight;
    }

    await sleep(2500);
    scriptRunning = false;
    if (visible) runScript();
  }

  runScript();

  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) runScript();
  });
  observer.observe(container);
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initCopyButtons();
  initHamburger();
  initDocsNav();
  initTerminal();
});
