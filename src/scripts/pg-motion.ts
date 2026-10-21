// Purple Giraffe motion kit: smooth scrolling, split headlines, reveals, parallax, counters,
// magnetic buttons, a custom cursor and a scroll progress line. See src/styles/pg-motion.css
// for the attribute reference. Nothing runs for visitors who prefer reduced motion.
import Lenis from 'lenis';

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Shared smooth scroller; page scripts can listen with window.addEventListener('pg:scroll'). */
export let lenis: Lenis | null = null;

function splitLines(el: HTMLElement) {
  // Wrap words, group them by rendered line, then wrap each line in a mask.
  if (el.dataset.splitDone) return;
  const text = el.textContent || '';
  const html = el.innerHTML;
  const words: HTMLSpanElement[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  // Remember whether each word had whitespace before it in the source, so punctuation in its
  // own span (e.g. a coloured full stop) stays attached to the word before it.
  let pendingSpace = false;
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    (node.textContent || '').split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        pendingSpace = true;
        return frag.append(part);
      }
      const w = document.createElement('span');
      w.className = 'pg-w';
      w.style.display = 'inline-block';
      w.textContent = part;
      if (pendingSpace) w.dataset.sp = '1';
      pendingSpace = false;
      words.push(w);
      frag.append(w);
    });
    node.replaceWith(frag);
  });
  // Group by offsetTop.
  const lines: HTMLSpanElement[][] = [];
  let lastTop = -Infinity;
  words.forEach((w) => {
    const top = w.offsetTop;
    if (Math.abs(top - lastTop) > 4) {
      lines.push([]);
      lastTop = top;
    }
    lines[lines.length - 1].push(w);
  });
  if (lines.length === 0) return;
  // Rebuild: each line keeps its words' original wrapping elements (em, span colour) by cloning ancestors.
  const out = document.createDocumentFragment();
  lines.forEach((lineWords, li) => {
    const mask = document.createElement('span');
    mask.className = 'pg-l';
    const inner = document.createElement('span');
    inner.style.setProperty('--l', String(li));
    mask.append(inner);
    lineWords.forEach((w, wi) => {
      // Re-create the chain of inline wrappers between the heading and the word.
      // Block-level wrappers (e.g. one span per designed line) become inline so they don't
      // force a break inside the rebuilt line.
      let node: Node = w.cloneNode(true);
      let p = w.parentElement;
      while (p && p !== el) {
        const shell = p.cloneNode(false) as HTMLElement;
        if (getComputedStyle(p).display !== 'inline') {
          shell.style.display = 'inline';
          shell.style.overflow = '';
          shell.style.padding = '';
          shell.style.margin = '';
          shell.style.transform = '';
        }
        shell.append(node);
        node = shell;
        p = p.parentElement;
      }
      if (wi > 0 && w.dataset.sp) inner.append(' ');
      inner.append(node);
    });
    out.append(mask);
  });
  if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', text.replace(/\s+/g, ' ').trim());
  el.dataset.splitHtml = html;
  el.replaceChildren(out);
  el.querySelectorAll('.pg-l').forEach((l) => l.setAttribute('aria-hidden', 'true'));
  el.dataset.splitDone = '1';
}

function observeIn(selector: string, rootMargin = '0px 0px -10% 0px') {
  const els = document.querySelectorAll<HTMLElement>(selector);
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
    { rootMargin, threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
}

function counters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const io = new IntersectionObserver((entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      io.unobserve(el);
      const end = parseFloat(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const t0 = performance.now();
      const dur = 1600;
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const v = Math.round(end * (1 - Math.pow(1 - p, 4)));
        el.textContent = `${prefix}${v.toLocaleString('en-AU')}${suffix}`;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }),
  );
  els.forEach((el) => io.observe(el));
}

function scrollEffects() {
  const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  const zooms = Array.from(document.querySelectorAll<HTMLElement>('[data-zoom]'));
  const vh = () => innerHeight;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - innerHeight;
    root.style.setProperty('--pg-progress', String(max > 0 ? scrollY / max : 0));
    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh() + 200) return;
      const speed = parseFloat(el.dataset.parallax || '0.12');
      const mid = r.top + r.height / 2 - vh() / 2;
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`;
    });
    zooms.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh()) return;
      const p = Math.max(0, Math.min(1, (vh() - r.top) / (vh() + r.height)));
      el.style.setProperty('--pg-zoom', String(1.15 - 0.15 * Math.min(1, p * 1.6)));
    });
  };
  update();
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
}

function magnetic() {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

function cursor() {
  if (!finePointer) return;
  const c = document.createElement('div');
  c.className = 'pg-cursor';
  c.setAttribute('aria-hidden', 'true');
  document.body.append(c);
  let x = innerWidth / 2;
  let y = innerHeight / 2;
  let cx = x;
  let cy = y;
  addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    c.classList.add('is-on');
    const t = e.target as HTMLElement | null;
    const labelled = t?.closest<HTMLElement>('[data-cursor]');
    const link = t?.closest('a, button, summary, [role="button"], input, select, textarea, label');
    c.classList.toggle('is-label', !!labelled);
    c.classList.toggle('is-link', !labelled && !!link);
    c.textContent = labelled?.dataset.cursor || '';
    const dark = t?.closest('[data-dark]');
    c.classList.toggle('is-dark', !!dark && !labelled);
  });
  document.addEventListener('pointerleave', () => c.classList.remove('is-on'));
  const loop = () => {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
}

function smoothScroll() {
  // Lenis drives native scrolling, so normal 'scroll' listeners keep working.
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 }, autoRaf: true });
}

function intro() {
  const el = document.querySelector<HTMLElement>('.pg-intro');
  if (!el) return;
  let seen = false;
  try {
    seen = sessionStorage.getItem('pg-intro') === '1';
    sessionStorage.setItem('pg-intro', '1');
  } catch {
    /* storage blocked: just play it */
  }
  if (seen) return el.remove();
  el.dataset.play = '';
  el.addEventListener('animationend', (e) => {
    if (e.animationName === 'pg-intro-lift') el.remove();
  });
}

function init() {
  root.dataset.pgMotion = '1';
  if (reduced) {
    document.querySelector('.pg-intro')?.remove();
    return;
  }
  intro();
  document.querySelectorAll<HTMLElement>('[data-split]').forEach(splitLines);
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((g) =>
    Array.from(g.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(Math.min(i, 10)))),
  );
  requestAnimationFrame(() => {
    observeIn('[data-split]', '0px');
    observeIn('[data-reveal], [data-stagger]');
  });
  counters();
  scrollEffects();
  magnetic();
  cursor();
  smoothScroll();
}

// Fonts change line breaks, so split headlines once they have loaded (with a short cap).
Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 600))]).then(init);
