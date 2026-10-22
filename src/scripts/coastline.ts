// Coastline template behaviour: header states, scroll reveals and parallax, mobile menu, home tabs,
// listing filters, the map explorer, gallery lightbox and the booking request flow.
// Every page works without JS; this layers on interaction.

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const params = new URLSearchParams(location.search);

// Header: over-hero pages switch to a fixed, solid header once past the hero; hides on scroll down.
const header = $('[data-header]');
if (header) {
  const over = header.dataset.over === '1';
  let last = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (over) header.classList.toggle('is-fixed', y > 140);
    header.classList.toggle('is-hidden', y > 480 && y > last + 4);
    if (y < last - 4 || y < 480) header.classList.remove('is-hidden');
    last = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile menu
const menu = $<HTMLDialogElement>('[data-menu]');
$$('[data-open-menu]').forEach((b) => b.addEventListener('click', () => menu?.showModal()));
$$('[data-close-menu]').forEach((b) => b.addEventListener('click', () => menu?.close()));
menu?.addEventListener('click', (e) => {
  if (e.target === menu) menu.close();
});

// Scroll reveals
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      }
    }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);
$$('[data-reveal]').forEach((el) => io.observe(el));

// Parallax: [data-parallax="0.2"] moves at a fraction of scroll relative to its section.
const px = reduced ? [] : $$('[data-parallax]');
if (px.length) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    px.forEach((el) => {
      const host = el.parentElement!;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const speed = parseFloat(el.dataset.parallax || '0.2');
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

// Tabs (home "Find your kind"): roving tabindex, arrow keys.
$$('[data-tabs]').forEach((root) => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', root);
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (!panel) return;
      panel.hidden = !on;
      if (on) {
        panel.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
        if (!reduced) {
          panel.classList.remove('is-entering');
          void panel.offsetWidth;
          panel.classList.add('is-entering');
        }
      }
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = e.key;
      if (k !== 'ArrowRight' && k !== 'ArrowLeft' && k !== 'Home' && k !== 'End') return;
      e.preventDefault();
      const n = k === 'Home' ? 0 : k === 'End' ? tabs.length - 1 : (i + (k === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(tabs[n], true);
    });
  });
});

// Listing filters: [data-filter-root] holds chip groups [data-filter="dest"] with buttons [data-value],
// toggles [data-toggle="family"] and cards with matching data-* attributes. URL params preset them.
$$('[data-filter-root]').forEach((root) => {
  const cards = $$('[data-kind]', root);
  const count = $('[data-filter-count]', root);
  const empty = $('[data-filter-empty]', root);
  const state: Record<string, string> = {};
  const toggles: Record<string, boolean> = {};

  const apply = () => {
    let shown = 0;
    cards.forEach((c) => {
      const ok =
        Object.entries(state).every(([k, v]) => !v || c.dataset[k] === v) &&
        Object.entries(toggles).every(([k, on]) => !on || c.dataset[k] === '1');
      c.hidden = !ok;
      if (ok) {
        shown++;
        c.classList.add('is-in');
      }
    });
    const [one, many] = (count?.dataset.noun || 'escape|escapes').split('|');
    if (count) count.textContent = `${shown} ${shown === 1 ? one : many}`;
    if (empty) empty.hidden = shown > 0;
    root.dispatchEvent(new CustomEvent('filtered'));
  };

  $$('[data-filter]', root).forEach((group) => {
    const key = group.dataset.filter!;
    const buttons = $$<HTMLButtonElement>('[data-value]', group);
    const set = (v: string) => {
      state[key] = v;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === v)));
    };
    buttons.forEach((b) => b.addEventListener('click', () => { set(b.dataset.value!); apply(); }));
    const preset = params.get(key);
    if (preset && buttons.some((b) => b.dataset.value === preset)) set(preset);
  });
  $$<HTMLButtonElement>('[data-toggle]', root).forEach((b) => {
    const key = b.dataset.toggle!;
    const set = (on: boolean) => { toggles[key] = on; b.setAttribute('aria-pressed', String(on)); };
    b.addEventListener('click', () => { set(!toggles[key]); apply(); });
    if (params.get(key) === '1') set(true);
  });
  $$<HTMLSelectElement>('[data-sort]', root).forEach((s) =>
    s.addEventListener('change', () => {
      const list = cards[0]?.parentElement;
      if (!list) return;
      const sorted = [...cards].sort((a, b) => {
        if (s.value === 'low') return +a.dataset.price! - +b.dataset.price!;
        if (s.value === 'high') return +b.dataset.price! - +a.dataset.price!;
        return +a.dataset.order! - +b.dataset.order!;
      });
      sorted.forEach((c) => list.append(c));
    }),
  );
  apply();
});

// Map explorer: clicking a result shows it on the embedded map.
const mapFrame = $<HTMLIFrameElement>('[data-map-frame]');
if (mapFrame) {
  const label = $('[data-map-label]');
  const items = $$<HTMLButtonElement>('[data-map-item]');
  const show = (btn: HTMLButtonElement) => {
    items.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(btn.dataset.mapItem!)}&z=${btn.dataset.zoom || 9}&output=embed`;
    if (label) label.textContent = btn.dataset.name || '';
  };
  items.forEach((b) => b.addEventListener('click', () => show(b)));
  // When filters change, show the first visible result.
  $('[data-filter-root]')?.addEventListener('filtered', () => {
    const first = items.find((b) => !b.closest<HTMLElement>('[data-kind]')?.hidden);
    if (first && first.getAttribute('aria-pressed') !== 'true') show(first);
  });
  const when = params.get('when');
  const whenOut = $('[data-when]');
  if (when && whenOut) {
    const names: Record<string, string> = { weekend: 'this weekend', month: 'next month', holidays: 'the school holidays' };
    whenOut.textContent = `Travelling ${names[when] ?? 'soon'}? Availability is confirmed when you send a booking request.`;
    whenOut.hidden = false;
  }
}

// Gallery lightbox
const lb = $<HTMLDialogElement>('[data-lightbox]');
if (lb) {
  const thumbs = $$<HTMLButtonElement>('[data-shot]');
  const img = $<HTMLImageElement>('img', lb)!;
  const cap = $('[data-lightbox-cap]', lb)!;
  let idx = 0;
  const visible = () => thumbs.filter((t) => !t.closest<HTMLElement>('[data-kind]')?.hidden);
  const open = (t: HTMLButtonElement) => {
    const v = visible();
    idx = Math.max(0, v.indexOf(t));
    const src = t.querySelector('img');
    // Use the largest WebP candidate rather than the thumbnail-sized one the browser picked.
    const set = t.querySelector('source[type="image/webp"]')?.getAttribute('srcset')?.split(',').pop()?.trim().split(' ')[0];
    img.src = set || src?.currentSrc || src?.src || '';
    img.alt = src?.alt || '';
    cap.textContent = t.dataset.caption || '';
    if (!lb.open) lb.showModal();
  };
  const step = (d: number) => {
    const v = visible();
    if (!v.length) return;
    open(v[(idx + d + v.length) % v.length]);
  };
  thumbs.forEach((t) => t.addEventListener('click', () => open(t)));
  $('[data-lb-prev]', lb)?.addEventListener('click', () => step(-1));
  $('[data-lb-next]', lb)?.addEventListener('click', () => step(1));
  $('[data-lb-close]', lb)?.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
}

// Detail page gallery: thumbnails swap the main photo.
$$('[data-detail-gallery]').forEach((g) => {
  const slides = $$('[data-slide]', g);
  const btns = $$<HTMLButtonElement>('[data-thumb]', g);
  btns.forEach((b, i) =>
    b.addEventListener('click', () => {
      slides.forEach((s, j) => s.classList.toggle('is-on', i === j));
      btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    }),
  );
});

// ---------- Booking ----------
type BookItem = { slug: string; name: string; kind: string; price: number; unit: string; capacity?: number; times?: string[]; region: string };
const bookData = $('#el-book-data');
const items: BookItem[] = bookData ? JSON.parse(bookData.textContent || '[]') : [];
const fmtMoney = (n: number) => `$${n.toLocaleString('en-AU')}`;
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const nightsBetween = (a: string, b: string) => Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
const nice = (s: string) => new Date(`${s}T00:00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

// Quote for a stay or a per-person experience.
function quote(item: BookItem, f: { in?: string; out?: string; guests: number }) {
  if (item.kind === 'stay') {
    const n = f.in && f.out ? nightsBetween(f.in, f.out) : 0;
    return { nights: n, total: n > 0 ? n * item.price : 0, label: n > 0 ? `${n} night${n === 1 ? '' : 's'} × ${fmtMoney(item.price)}` : 'Choose your dates' };
  }
  const total = item.price * f.guests;
  return { nights: 0, total, label: item.price ? `${f.guests} × ${fmtMoney(item.price)}` : 'Free entry' };
}

// Detail page sidebar: live estimate, then hands off to the booking page with the choices in the URL.
$$<HTMLFormElement>('[data-book-widget]').forEach((form) => {
  const item = items.find((i) => i.slug === form.dataset.item);
  if (!item) return;
  const inEl = $<HTMLInputElement>('[name="in"]', form);
  const outEl = $<HTMLInputElement>('[name="out"]', form);
  const dateEl = $<HTMLInputElement>('[name="date"]', form);
  const gEl = $<HTMLSelectElement>('[name="guests"]', form)!;
  const est = $('[data-estimate]', form)!;
  const today = new Date();
  const min = iso(today);
  [inEl, outEl, dateEl].forEach((el) => el && (el.min = min));
  const upd = () => {
    if (inEl && outEl) {
      if (inEl.value) {
        const next = new Date(`${inEl.value}T00:00:00`);
        next.setDate(next.getDate() + 1);
        outEl.min = iso(next);
        if (outEl.value && outEl.value <= inEl.value) outEl.value = iso(next);
      }
    }
    const q = quote(item, { in: inEl?.value, out: outEl?.value, guests: +gEl.value });
    est.textContent = q.total ? `${q.label} = ${fmtMoney(q.total)}` : q.label;
  };
  form.addEventListener('input', upd);
  upd();
});

// Booking page: three steps (trip, details, confirmation).
const book = $('[data-book]');
if (book) {
  const sel = $<HTMLSelectElement>('[name="item"]', book)!;
  const stayFields = $('[data-stay-fields]', book)!;
  const expFields = $('[data-exp-fields]', book)!;
  const inEl = $<HTMLInputElement>('[name="in"]', book)!;
  const outEl = $<HTMLInputElement>('[name="out"]', book)!;
  const dateEl = $<HTMLInputElement>('[name="date"]', book)!;
  const timeEl = $<HTMLSelectElement>('[name="time"]', book)!;
  const gEl = $<HTMLSelectElement>('[name="guests"]', book)!;
  const err = $('[data-book-error]', book)!;
  const summaryEls = $$('[data-book-summary]', book);
  const steps = $$('[data-step]', book);
  const stepLabels = $$('[data-step-label]', book);
  const min = iso(new Date());
  [inEl, outEl, dateEl].forEach((el) => (el.min = min));

  const preset = params.get('item');
  if (preset && items.some((i) => i.slug === preset)) sel.value = preset;
  if (params.get('in')) inEl.value = params.get('in')!;
  if (params.get('out')) outEl.value = params.get('out')!;
  if (params.get('date')) dateEl.value = params.get('date')!;

  const current = () => items.find((i) => i.slug === sel.value);

  const fillGuests = (item: BookItem) => {
    const max = Math.min(item.capacity ?? 10, 10);
    const keep = +(params.get('guests') || gEl.value || 2);
    gEl.innerHTML = Array.from({ length: max }, (_, i) => `<option value="${i + 1}">${i + 1} ${i ? 'guests' : 'guest'}</option>`).join('');
    gEl.value = String(Math.min(keep, max));
  };
  const fillTimes = (item: BookItem) => {
    const t = item.times?.length ? item.times : ['Any time'];
    timeEl.innerHTML = t.map((x) => `<option>${x}</option>`).join('');
  };

  const render = () => {
    const item = current();
    if (!item) return;
    const isStay = item.kind === 'stay';
    stayFields.hidden = !isStay;
    expFields.hidden = isStay;
    const q = quote(item, { in: inEl.value, out: outEl.value, guests: +gEl.value });
    const when = isStay
      ? inEl.value && outEl.value ? `${nice(inEl.value)} to ${nice(outEl.value)}` : 'Dates to choose'
      : dateEl.value ? `${nice(dateEl.value)}, ${timeEl.value}` : 'Date to choose';
    const html = `<div class="el-sum-row"><span>${item.name}</span><span>${item.region}</span></div>
      <div class="el-sum-row"><span>When</span><span>${when}</span></div>
      <div class="el-sum-row"><span>Guests</span><span>${gEl.value}</span></div>
      <div class="el-sum-row"><span>${q.label}</span><strong>${q.total ? fmtMoney(q.total) : item.price ? '' : 'Free'}</strong></div>`;
    summaryEls.forEach((s) => (s.innerHTML = html));
  };

  const go = (n: number) => {
    steps.forEach((s) => (s.hidden = s.dataset.step !== String(n)));
    stepLabels.forEach((l) => l.classList.toggle('is-on', +l.dataset.stepLabel! <= n));
    book.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  sel.addEventListener('change', () => {
    const item = current();
    if (item) { fillGuests(item); fillTimes(item); }
    render();
  });
  inEl.addEventListener('change', () => {
    if (inEl.value) {
      const next = new Date(`${inEl.value}T00:00:00`);
      next.setDate(next.getDate() + 1);
      outEl.min = iso(next);
      if (!outEl.value || outEl.value <= inEl.value) {
        next.setDate(next.getDate() + 1);
        outEl.value = iso(next);
      }
    }
    render();
  });
  [outEl, dateEl, timeEl, gEl].forEach((el) => el.addEventListener('change', render));

  $('[data-next]', book)?.addEventListener('click', () => {
    const item = current();
    if (!item) return;
    let msg = '';
    if (item.kind === 'stay') {
      if (!inEl.value || !outEl.value) msg = 'Choose your check-in and check-out dates.';
      else if (nightsBetween(inEl.value, outEl.value) < 1) msg = 'Check-out needs to be after check-in.';
    } else if (!dateEl.value) msg = 'Choose a date.';
    err.textContent = msg;
    if (!msg) go(2);
  });
  $('[data-back]', book)?.addEventListener('click', () => go(1));

  const form = $<HTMLFormElement>('[data-book-form]', book)!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const ref = `EL-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const data = new FormData(form);
    // TODO before launch: send the request to the client's booking system or CRM, e.g.
    // await fetch('/api/booking', { method: 'POST', body: data });
    $('[data-ref]', book)!.textContent = ref;
    $('[data-confirm-name]', book)!.textContent = String(data.get('name') || '').split(' ')[0] || 'there';
    $('[data-confirm-email]', book)!.textContent = String(data.get('email') || '');
    go(3);
  });

  const first = current();
  if (first) { fillGuests(first); fillTimes(first); }
  render();
}

// Field notes: preset category filter from ?cat=
$$('[data-faq-root]').forEach((root) => {
  const cat = params.get('cat');
  if (!cat) return;
  $$<HTMLButtonElement>('[data-faq-filter]', root).find((b) => b.dataset.faqFilter === cat)?.click();
});
