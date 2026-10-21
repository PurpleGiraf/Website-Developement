// Scroll-driven effects for the Purple Giraffe homepage, ported from the design file:
// hero photo opening to full bleed, statement words filling in, pinned horizontal work
// scroll, velocity-reactive client marquee, and section reveals.

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s);

const hero = $('[data-hero]');
const heroText = $('[data-hero-text]');
const photo = $('[data-hero-photo]');
const img = $('[data-hero-img]');
const caption = $('[data-hero-caption]');
const fill = $('[data-fill]');
const words = fill ? Array.from(fill.querySelectorAll<HTMLElement>('[data-w]')) : [];
const hz = $('[data-hz]');
const track = $('[data-hz-track]');
const marquee = $('[data-marquee]');

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (p: number) => 1 - Math.pow(1 - p, 3);

let hzDist = 0;
let vel = 0;
let lastY = scrollY;
let mx = 0;

function measure() {
  if (track && hz) {
    hzDist = Math.max(0, track.scrollWidth - innerWidth);
    hz.style.height = `${innerHeight + hzDist}px`;
  }
}

function update() {
  const vh = innerHeight;
  const vw = innerWidth;

  if (hero && photo && heroText) {
    const r = hero.getBoundingClientRect();
    const p = clamp(-r.top / (r.height - vh));
    const e = ease(clamp(p / 0.8));
    const top0 = Math.min(heroText.offsetTop + heroText.offsetHeight + 56, vh * 0.74);
    const side0 = Math.max(20, vw * 0.04);
    const bot0 = Math.max(20, vh * 0.03);
    const k = 1 - e;
    photo.style.clipPath = `inset(${top0 * k}px ${side0 * k}px ${bot0 * k}px ${side0 * k}px round ${20 * k}px)`;
    const shift = Math.max(0, (top0 + vh - bot0) / 2 - vh * 0.36) * k;
    if (img) img.style.transform = `translateY(${shift}px) scale(${1.12 - 0.12 * e})`;
    heroText.style.transform = `translateY(${-e * 120}px)`;
    heroText.style.opacity = String(clamp(1 - e * 1.6));
    if (caption) {
      const c = clamp((p - 0.7) / 0.22);
      caption.style.opacity = String(c);
      caption.style.transform = `translateY(${(1 - c) * 30}px)`;
    }
  }

  if (fill && words.length) {
    const r = fill.getBoundingClientRect();
    const p = clamp((vh * 0.8 - r.top) / (r.height * 0.75));
    words.forEach((w, i) => {
      w.style.color = i / words.length < p ? '#2b1745' : '#d3c8df';
    });
  }

  if (hz && track) {
    const r = hz.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - vh));
    track.style.transform = `translateX(${-p * hzDist}px)`;
  }

  const y = scrollY;
  vel += y - lastY;
  lastY = y;
}

let raf = 0;
const onScroll = () => {
  if (!raf) raf = requestAnimationFrame(() => {
    raf = 0;
    update();
  });
};

function tick() {
  if (!marquee) return;
  vel *= 0.9;
  mx -= 0.7 + Math.min(Math.abs(vel), 80) * 0.12;
  const w = marquee.scrollWidth / 2;
  if (w > 0 && -mx > w) mx += w;
  marquee.style.transform = `translate3d(${mx}px,0,0)`;
  requestAnimationFrame(tick);
}

function setupReveal() {
  if (reduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          io.unobserve(el);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(48px)';
    el.style.transition = `${el.style.transition ? `${el.style.transition},` : ''}opacity 1.1s cubic-bezier(.19,1,.22,1), transform 1.1s cubic-bezier(.19,1,.22,1)`;
    io.observe(el);
  });
}

// Film lightbox: only load the Vimeo player when someone asks for it.
const film = $<HTMLDialogElement>('dialog[data-film]');
const frame = $<HTMLIFrameElement>('[data-film-frame]');
$('[data-film-open]')?.addEventListener('click', () => {
  if (!film || !frame) return;
  frame.src = frame.dataset.src || '';
  film.showModal();
});
film?.addEventListener('close', () => {
  if (frame) frame.src = 'about:blank';
});
film?.addEventListener('click', (e) => {
  if (e.target === film) film.close();
});

measure();
update();
setupReveal();
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => {
  measure();
  update();
});
document.fonts?.ready.then(() => {
  measure();
  update();
});
if (!reduced) requestAnimationFrame(tick);
