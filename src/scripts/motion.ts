// Shared motion layer: tags page content for reveal/hover effects at runtime so the
// templates' markup stays untouched. Styles live in src/styles/motion.css.

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function isGrid(el: Element) {
  const d = getComputedStyle(el).display;
  return (d === 'grid' || d === 'flex') && el.children.length > 1;
}

function isMedia(el: Element) {
  const s = el.getAttribute('style') || '';
  return /aspect-ratio/.test(s) && /gradient|background/.test(s);
}

function tagReveals() {
  const targets: HTMLElement[] = [];
  const add = (el: Element, i = 0) => {
    if (!(el instanceof HTMLElement) || el.dataset.reveal !== undefined) return;
    el.dataset.reveal = '';
    el.style.setProperty('--i', String(Math.min(i, 8)));
    if (isMedia(el)) el.dataset.media = '';
    targets.push(el);
  };

  document.querySelectorAll('main section').forEach((section) => {
    if (section.querySelector('section')) return; // only leaf sections
    // Sections are usually wrapper > content; descend through single wrappers.
    let scope: Element = section;
    while (scope.children.length === 1 && scope.firstElementChild && !isMedia(scope.firstElementChild)) {
      scope = scope.firstElementChild;
    }
    Array.from(scope.children).forEach((child, i) => {
      if (isGrid(child) && child.children.length <= 12 && !child.matches('form, nav')) {
        Array.from(child.children).forEach((c, j) => add(c, j));
      } else {
        add(child, i);
      }
    });
  });
  return targets;
}

function splitHeadline() {
  const h1 = document.querySelector('main h1');
  if (!h1) return;
  let w = 0;
  const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    const parts = (node.textContent || '').split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.append(part);
      } else {
        const span = document.createElement('span');
        span.className = 'm-w';
        span.style.setProperty('--w', String(w++));
        span.textContent = part;
        frag.append(span);
      }
    });
    node.replaceWith(frag);
  });
  // The headline animates by words, not as a block; the observer still triggers it.
  h1.classList.add('m-split');
}

function tagInteractive() {
  document.querySelectorAll<HTMLElement>('a, button').forEach((el) => {
    const cs = getComputedStyle(el);
    const filled = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';
    const padded = parseFloat(cs.paddingTop) >= 8 && parseFloat(cs.paddingLeft) >= 12;
    if (filled && padded && !el.closest('[data-chips], [data-faq-root] nav')) el.classList.add('m-btn');

    if (el.querySelector('[style*="aspect-ratio"]')) el.classList.add('m-card');

    // Wrap a trailing arrow so it can nudge on hover.
    const last = el.lastChild;
    if (last && last.nodeType === Node.TEXT_NODE && /→\s*$/.test(last.textContent || '')) {
      const text = last.textContent || '';
      const idx = text.lastIndexOf('→');
      const arrow = document.createElement('span');
      arrow.className = 'm-arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      last.textContent = text.slice(0, idx);
      el.append(arrow, text.slice(idx + 1));
    }
  });
}

function watchHeader() {
  const header = document.querySelector<HTMLElement>('body > header, header');
  if (!header) return;
  header.classList.add('m-header');
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

if (!reduced) {
  const targets = tagReveals();
  splitHeadline();
  const h1 = document.querySelector<HTMLElement>('main h1.m-split');
  if (h1 && !targets.includes(h1)) {
    h1.dataset.reveal = '';
    targets.push(h1);
  }
  tagInteractive();
  watchHeader();

  const heroMedia = document.querySelector<HTMLElement>('main section [data-media]');
  if (heroMedia && heroMedia.getBoundingClientRect().top < window.innerHeight) heroMedia.dataset.mediaHero = '';

  // Snap to the hidden state without animating, then re-enable transitions.
  root.classList.add('m-on', 'm-prep');
  root.classList.remove('m-init');
  void root.offsetHeight;
  root.classList.remove('m-prep');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  // Wait a frame so the hidden state paints before the first reveal.
  requestAnimationFrame(() => requestAnimationFrame(() => targets.forEach((t) => io.observe(t))));
} else {
  root.classList.remove('m-init');
}
