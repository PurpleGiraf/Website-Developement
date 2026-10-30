// Template 06 (BLANK Digital): motion and interactions.
// Every page is readable without this script. It adds the boot screen, typed headline, particle field,
// custom cursor, reveals, the live dashboard, the three-step quote form, FAQ, filters and the step tracker.

const root = document.documentElement;
const still = root.classList.contains('bd-still');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T & Element>(s) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll(s)) as T[];
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// ---------- Text scramble (eyebrow labels) ----------
const scramble = (el: HTMLElement) => {
  if (still || el.dataset.scrambling) return;
  const node = Array.from(el.childNodes).find((n) => n.nodeType === 3 && n.nodeValue?.trim());
  if (!node) return;
  el.dataset.scrambling = '1';
  const final = node.nodeValue || '';
  const chars = '!<>-_/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const total = 24;
  let f = 0;
  const run = () => {
    f++;
    node.nodeValue = final
      .split('')
      .map((c, i) => (c === ' ' || i / final.length < f / total ? c : chars[(Math.random() * chars.length) | 0]))
      .join('');
    if (f < total) requestAnimationFrame(run);
    else {
      node.nodeValue = final;
      delete el.dataset.scrambling;
    }
  };
  run();
};

// ---------- Boot screen (home, once per session) ----------
const boot = $('[data-boot]');
const booting = !!boot && root.classList.contains('bd-intro');
const introMs = booting ? 1500 : 0;
if (boot && booting) {
  const bar = $('[data-boot-bar]', boot);
  const pct = $('[data-boot-pct]', boot);
  const t0 = performance.now();
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    boot.classList.add('is-done');
    try {
      sessionStorage.setItem('bd-booted', '1');
    } catch {
      /* private mode: the intro simply shows again next time */
    }
    setTimeout(() => root.classList.remove('bd-intro'), 1100);
  };
  const step = () => {
    const p = Math.min(100, Math.round((performance.now() - t0) / 12));
    if (bar) bar.style.width = `${p}%`;
    if (pct) pct.textContent = String(p).padStart(3, '0');
    if (p < 100) setTimeout(step, 30);
    else finish();
  };
  step();
  setTimeout(finish, 2600);
}

// ---------- Typed headline (home) ----------
const typed = $('[data-type]');
let heroBase = 0;
if (typed && !still) {
  const l1 = $('[data-type-1]', typed)!;
  const l2 = $('[data-type-2]', typed)!;
  const c1 = $('[data-cur1]', typed)!;
  const c2 = $('[data-cur2]', typed)!;
  const L1 = l1.textContent || '';
  const L2 = l2.textContent || '';
  l1.textContent = '';
  l2.textContent = '';
  c1.hidden = false;
  c2.hidden = true;
  let n = 0;
  const total = L1.length + L2.length;
  const tick = () => {
    n++;
    l1.textContent = L1.slice(0, Math.min(n, L1.length));
    l2.textContent = L2.slice(0, Math.max(0, n - L1.length));
    c1.hidden = n > L1.length;
    c2.hidden = n <= L1.length;
    if (n < total) setTimeout(tick, n === L1.length ? 420 : 40 + Math.random() * 75);
  };
  setTimeout(tick, introMs + 300);
  heroBase = introMs + 1700;
}

// ---------- Reveals ----------
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      show(e.target as HTMLElement);
      io.unobserve(e.target);
    }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
const pending = new Set<HTMLElement>();
const show = (el: HTMLElement) => {
  if (!pending.has(el)) return;
  pending.delete(el);
  el.classList.add('is-in');
  if (el.hasAttribute('data-scramble')) scramble(el);
  if (el.hasAttribute('data-reveal')) setTimeout(() => el.classList.add('is-settled'), 1500);
};
if (!still) {
  $$('[data-reveal]').forEach((el) => {
    const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.setProperty('--d', `${Math.min(sib, 6) * 70}ms`);
    pending.add(el);
    io.observe(el);
  });
  $$('[data-grow]').forEach((el) => {
    pending.add(el);
    io.observe(el);
  });
  $$('[data-hero]').forEach((el, i) => {
    const d = (heroBase || 120) + i * (heroBase ? 160 : 140);
    el.style.setProperty('--d', `${d}ms`);
    pending.add(el);
    requestAnimationFrame(() => requestAnimationFrame(() => show(el)));
    if (el.hasAttribute('data-scramble')) setTimeout(() => scramble(el), d);
  });
}

// ---------- Nav: clear the demo bar, mobile menu ----------
const demobar = $('.bd-demobar');
const placeNav = () => {
  if (!demobar) return;
  const bottom = demobar.getBoundingClientRect().bottom;
  root.style.setProperty('--bd-nav-top', `${Math.max(16, bottom + 12)}px`);
};
const menuBtn = $<HTMLButtonElement>('[data-menu-btn]');
const menu = $('[data-menu]');
const setMenu = (open: boolean) => {
  if (!menuBtn || !menu) return;
  menu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? 'Close' : 'Menu';
};
menuBtn?.addEventListener('click', () => setMenu(!!menu?.hidden));
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu && !menu.hidden) {
    setMenu(false);
    menuBtn?.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 880) setMenu(false);
});

$('[data-to-top]')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: still ? 'auto' : 'smooth' });
  $<HTMLElement>('#main')?.focus({ preventScroll: true });
});

// ---------- Scroll-linked pieces ----------
const floatBtn = $('[data-float]');
const quoteSec = $('#quote');
const words = $$('[data-word]');
const wordsBox = $('[data-words]');
const line = $('[data-line]');
const proc = $('[data-process]');
const parallax = $$('[data-parallax]');
const progress = $('[data-fx-progress]');
const hud = $('[data-fx-hud]');
let tiltP = 0;

const onScroll = () => {
  const y = window.scrollY;
  const vh = window.innerHeight || 800;
  const max = document.documentElement.scrollHeight - vh;
  const pct = max > 0 ? y / max : 0;
  placeNav();
  if (progress) progress.style.transform = `scaleX(${pct})`;
  if (hud) hud.textContent = `SCROLL ${String(Math.round(pct * 100)).padStart(3, '0')}%`;
  tiltP = clamp(y / (vh * 0.7));

  if (floatBtn) {
    const qTop = quoteSec ? quoteSec.getBoundingClientRect().top : Infinity;
    const on = y > vh * 0.9 && (quoteSec ? qTop > vh * 0.7 : max - y > 900);
    floatBtn.classList.toggle('is-on', on);
    floatBtn.setAttribute('aria-hidden', String(!on));
    floatBtn.tabIndex = on ? 0 : -1;
  }
  if (still) return;
  if (words.length && wordsBox) {
    const box = wordsBox.getBoundingClientRect();
    const lit = clamp((vh * 0.85 - box.top) / (box.height * 0.9)) * words.length * 1.15;
    words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
  }
  if (line && proc) {
    const b = proc.getBoundingClientRect();
    line.style.transform = `scaleX(${clamp((vh * 0.75 - b.top) / (b.height * 0.6))})`;
  }
  parallax.forEach((el) => {
    el.style.transform = `translate3d(0,${y * parseFloat(el.dataset.parallax || '0')}px,0)`;
  });
  // Safety net for reveals the observer missed (fast scrolls, anchor jumps).
  pending.forEach((el) => {
    if (!el.hasAttribute('data-hero') && el.getBoundingClientRect().top < vh * 0.95) show(el);
  });
};
let scrollRaf = 0;
window.addEventListener(
  'scroll',
  () => {
    if (!scrollRaf) scrollRaf = requestAnimationFrame(() => ((scrollRaf = 0), onScroll()));
  },
  { passive: true },
);
window.addEventListener('resize', onScroll);
onScroll();
document.fonts?.ready.then(onScroll);

// ---------- Pointer: custom cursor, glow, magnetic buttons, card spotlight ----------
let mx = innerWidth / 2;
let my = innerHeight / 3;
let cx = mx;
let cy = my;
let rs = 1;
let hasMouse = false;
let hot = false;
let spot: HTMLElement | null = null;
let mag: HTMLElement | null = null;
if (finePointer && !still) {
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    hasMouse = true;
    const t = e.target as HTMLElement | null;
    if (!t?.closest) return;
    const c = t.closest<HTMLElement>('[data-spot]');
    if (c !== spot) {
      if (spot) spot.style.transform = '';
      spot = c;
    }
    if (c) {
      const r = c.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      c.style.setProperty('--x', `${px * r.width}px`);
      c.style.setProperty('--y', `${py * r.height}px`);
      c.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg)`;
    }
    const m = t.closest<HTMLElement>('[data-magnetic]');
    if (m !== mag) {
      if (mag) mag.style.transform = '';
      mag = m;
    }
    if (m) {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    }
    hot = !!t.closest('a,button,input,textarea,label');
  });
  document.addEventListener('mouseleave', () => (hasMouse = false));
}

// ---------- Ambient loop: particle field, cursor, aurora, dashboard tilt ----------
const cv = $<HTMLCanvasElement>('[data-fx-canvas]');
const ctx = cv?.getContext('2d') ?? null;
const dot = $('[data-fx-dot]');
const ring = $('[data-fx-ring]');
const aurora = $('[data-fx-aurora]');
const tilt = $('[data-tilt]');
type P = { x: number; y: number; vx: number; vy: number; r: number; z: number };
let W = 0;
let H = 0;
let pts: P[] = [];
const size = () => {
  if (!cv || !ctx) return;
  const dpr = Math.min(2, devicePixelRatio || 1);
  W = innerWidth;
  H = innerHeight;
  cv.width = W * dpr;
  cv.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.min(130, Math.round((W * H) / 13000));
  pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.3 + 0.4, z: Math.random() * 0.6 + 0.4 }));
};
const draw = (dy: number) => {
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);
  for (const p of pts) {
    p.x += p.vx;
    p.y += p.vy - dy * 0.25 * p.z;
    if (p.x < 0) p.x += W;
    if (p.x > W) p.x -= W;
    if (p.y < 0) p.y += H;
    if (p.y > H) p.y -= H;
  }
  ctx.lineWidth = 1;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    for (let j = i + 1; j < pts.length; j++) {
      const b = pts[j];
      const ex = a.x - b.x;
      const ey = a.y - b.y;
      const d2 = ex * ex + ey * ey;
      if (d2 < 16900) {
        ctx.strokeStyle = `rgba(80,115,255,${(1 - Math.sqrt(d2) / 130) * 0.2})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    if (hasMouse) {
      const md = Math.hypot(a.x - cx, a.y - cy);
      if (md < 200) {
        ctx.strokeStyle = `rgba(120,150,255,${(1 - md / 200) * 0.55})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(cx, cy);
        ctx.stroke();
      }
    }
    ctx.fillStyle = `rgba(200,212,255,${0.35 + a.z * 0.4})`;
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.r, 0, 6.283);
    ctx.fill();
  }
};
if (ctx) {
  size();
  window.addEventListener('resize', size);
}
if (still) {
  // One static frame of the field, no motion.
  draw(0);
} else {
  let lastY = scrollY;
  const loop = () => {
    requestAnimationFrame(loop);
    cx += (mx - cx) * 0.14;
    cy += (my - cy) * 0.14;
    rs += ((hot ? 1.9 : 1) - rs) * 0.18;
    if (dot && ring) {
      const o = hasMouse ? '1' : '0';
      dot.style.opacity = o;
      ring.style.opacity = o;
      dot.style.transform = `translate(${mx}px,${my}px)`;
      ring.style.transform = `translate(${cx}px,${cy}px) scale(${rs})`;
    }
    if (aurora && finePointer) aurora.style.transform = `translate(${cx - 450}px,${cy - 450}px)`;
    if (tilt) {
      const k = 1 - tiltP;
      const vw = innerWidth || 1;
      const vh = innerHeight || 1;
      const ry = finePointer ? (cx / vw - 0.5) * 7 * k : 0;
      const rx = 22 * k - (finePointer ? (cy / vh - 0.5) * 5 * k : 0);
      tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${0.92 + 0.08 * tiltP})`;
    }
    const dy = scrollY - lastY;
    lastY = scrollY;
    draw(dy);
  };
  loop();
}

// ---------- Live dashboard (home) ----------
// Sample numbers that move on screen to show what the client dashboard looks like.
const bars = $$('[data-bars] > div');
const feedBox = $('[data-feed]');
const poolEl = $('[data-feed-pool]');
const leads = $('[data-kpi="leads"]');
const cpl = $('[data-kpi="cpl"]');
if (bars.length && feedBox && poolEl && !still) {
  const pool = JSON.parse(poolEl.textContent || '[]') as [string, string][];
  let t = 0;
  setInterval(() => {
    t++;
    bars.forEach((b, i) => {
      const v = 0.25 + 0.55 * Math.abs(Math.sin((i + t * 0.7) * 0.45)) + (i / 24) * 0.2;
      b.style.height = `${Math.round(Math.min(1, v) * 100)}%`;
    });
    if (leads) leads.textContent = String(128 + t * 3);
    if (cpl) cpl.textContent = `$${(14.2 - (t % 6) * 0.11).toFixed(2)}`;
    const rows = $$('.bd-dash-item', feedBox);
    rows.forEach((row, k) => {
      const [text, color] = pool[(t + 9 - k) % pool.length];
      $('.bd-dash-text', row)!.textContent = text;
      $('.bd-dash-sq', row)!.style.background = color;
      if (k > 0) return;
      // Only the newest entry slides in.
      row.classList.remove('is-new');
      void row.offsetWidth;
      row.classList.add('is-new');
    });
  }, 2200);
}

// ---------- FAQ accordion ----------
$$('[data-faq]').forEach((faq) => {
  const items = $$('.bd-faq-item', faq);
  items.forEach((item) => {
    const btn = $<HTMLButtonElement>('.bd-faq-q', item)!;
    btn.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      items.forEach((o) => {
        o.classList.remove('is-open');
        $('.bd-faq-q', o)!.setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
});

// ---------- Quote form (home): three steps, then a confirmation ----------
// TODO before launch: set the form's `action` to the client's endpoint (Formspree, CRM webhook, etc.).
// Until then, submitting only shows the confirmation.
const form = $<HTMLFormElement>('[data-quote]');
if (form) {
  const stepsEls = $$<HTMLFieldSetElement>('.bd-step', form);
  const dots = $$('.bd-quote-dots span', form);
  const back = $<HTMLButtonElement>('[data-quote-back]', form)!;
  const next = $<HTMLButtonElement>('[data-quote-next]', form)!;
  const status = $('[data-quote-status]', form);
  const done = $('[data-quote-done]');
  let step = 0;
  const val = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ?? '';
  const valid = () => {
    if (step === 0) return $$<HTMLInputElement>('input[name=services]:checked', form).length > 0;
    if (step === 1) return !!$('input[name=budget]:checked', form) && !!$('input[name=timing]:checked', form);
    return !!val('name') && /\S+@\S+\.\S+/.test(val('email'));
  };
  const render = () => {
    stepsEls.forEach((s, i) => s.classList.toggle('is-active', i === step));
    dots.forEach((d, i) => d.classList.toggle('is-on', i <= step));
    back.hidden = step === 0;
    next.textContent = step === 2 ? 'Get my quote →' : 'Continue →';
    next.classList.toggle('is-blocked', !valid());
    if (status) status.textContent = `Step ${step + 1} of 3`;
  };
  form.addEventListener('input', () => {
    next.classList.toggle('is-blocked', !valid());
    $$('[aria-invalid]', form).forEach((el) => el.removeAttribute('aria-invalid'));
  });
  back.addEventListener('click', () => {
    step = Math.max(0, step - 1);
    render();
    $('input', stepsEls[step])?.focus();
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!valid()) {
      if (step === 2) {
        const name = form.elements.namedItem('name') as HTMLInputElement;
        const email = form.elements.namedItem('email') as HTMLInputElement;
        if (!val('name')) name.setAttribute('aria-invalid', 'true');
        if (!/\S+@\S+\.\S+/.test(val('email'))) email.setAttribute('aria-invalid', 'true');
        (val('name') ? email : name).focus();
      }
      if (status) status.textContent = step === 2 ? 'Please add your name and a valid email.' : 'Choose at least one option to continue.';
      return;
    }
    if (step < 2) {
      step++;
      render();
      $('input', stepsEls[step])?.focus();
      return;
    }
    const action = form.getAttribute('action');
    if (action) {
      try {
        await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      } catch {
        /* network error: still confirm on screen; a real project should surface this */
      }
    }
    const first = val('name').split(' ')[0] || 'there';
    const f = $('[data-quote-first]');
    const em = $('[data-quote-email]');
    if (f) f.textContent = first;
    if (em) em.textContent = val('email');
    form.hidden = true;
    if (done) {
      done.hidden = false;
      done.focus();
    }
  });
  render();
}

// ---------- Insights filter ----------
const postGrid = $('[data-post-grid]');
if (postGrid) {
  const btns = $$<HTMLButtonElement>('[data-post-filter]');
  const cards = $$('[data-post-cat]', postGrid);
  const count = $('[data-post-count]');
  btns.forEach((btn) =>
    btn.addEventListener('click', () => {
      const cat = btn.dataset.postFilter;
      btns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let first = true;
      let n = 0;
      cards.forEach((c) => {
        const on = cat === 'All' || c.dataset.postCat === cat;
        c.hidden = !on;
        c.classList.toggle('is-featured', on && first);
        if (on) {
          first = false;
          n++;
          c.classList.add('is-in');
        }
      });
      if (count) count.textContent = `${n} article${n === 1 ? '' : 's'}`;
    }),
  );
}

// ---------- Process step tracker ----------
const psteps = $$('[data-pstep]');
if (psteps.length) {
  const num = $('[data-steps-num]');
  const sbars = $$('[data-steps-bar]');
  let active = -1;
  const track = () => {
    const vh = innerHeight || 800;
    let a = 0;
    psteps.forEach((el, i) => {
      if (el.getBoundingClientRect().top < vh * 0.55) a = i;
    });
    if (a === active) return;
    active = a;
    psteps.forEach((el, i) => el.classList.toggle('is-active', i === a));
    sbars.forEach((b, i) => {
      b.classList.toggle('is-on', i <= a);
      b.classList.toggle('is-active', i === a);
    });
    if (num) num.textContent = String(a + 1).padStart(2, '0');
  };
  window.addEventListener('scroll', track, { passive: true });
  track();
}

export {};

// ---------- Home nav: highlight the section in view (same rule as the design) ----------
const spyLinks = $$<HTMLAnchorElement>('[data-spy]');
if (spyLinks.length) {
  const ids = ['services', 'process', 'work', 'about', 'faq'];
  const spy = () => {
    let section = '';
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < innerHeight * 0.4) section = id;
    });
    spyLinks.forEach((a) => a.classList.toggle('is-spy', a.dataset.spy === section));
  };
  addEventListener('scroll', spy, { passive: true });
  spy();
}
