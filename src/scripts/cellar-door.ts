// Cellar Door template: scroll motion, page wipe, booking, cart and dialogs.
// Pages read fine without JS; this adds the motion layer and the interactive overlays.

type Data = {
  shipping: { freeFrom: number; flat: number };
  wines: { id: string; name: string; vintage: string; price: number }[];
  experiences: { name: string; price: number; days: number[]; times: string[] }[];
};

const data: Data = JSON.parse(document.getElementById('hs-data')?.textContent || '{}');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const $ = (n: number) => '$' + n;
const qs = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const qsa = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s));
const clamp = (v: number) => Math.max(0, Math.min(1, v));

/* ---------- Dialogs ---------- */

const dialogs = Object.fromEntries(qsa<HTMLDialogElement>('dialog[data-dialog]').map((d) => [d.dataset.dialog!, d]));
const openDialog = (name: string) => {
  Object.values(dialogs).forEach((d) => d.open && d.close());
  dialogs[name]?.showModal();
};
Object.values(dialogs).forEach((d) => {
  // Click on the backdrop closes.
  d.addEventListener('click', (e) => {
    if (e.target === d) d.close();
  });
  qsa('[data-close]', d).forEach((b) => b.addEventListener('click', () => d.close()));
});
qsa('[data-open]').forEach((b) => b.addEventListener('click', () => openDialog(b.dataset.open!)));

/* ---------- Booking ---------- */

const book = { exp: 0, day: 0, time: 0, guests: 2 };
const dlg = dialogs.booking;
let days: Date[] = [];
// The next ten dates the chosen experience runs.
const setDays = () => {
  days = [];
  for (let i = 1; days.length < 10; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    if (data.experiences[book.exp].days.includes(d.getDay())) days.push(d);
  }
};
const chip = (label: string, on: boolean, pick: () => void) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'hs-chip';
  b.textContent = label;
  b.setAttribute('aria-pressed', String(on));
  b.addEventListener('click', pick);
  return b;
};
const summary = () => {
  const ex = data.experiences[book.exp];
  const day = days[book.day].toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  return `${ex.name} · ${day} at ${ex.times[book.time]} · ${book.guests} guest${book.guests > 1 ? 's' : ''} · ${$(ex.price * book.guests)}`;
};
const renderBooking = () => {
  if (!dlg) return;
  const ex = data.experiences[book.exp];
  qsa('[data-exp]', dlg).forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.exp) === book.exp)));
  qs('[data-book-days]', dlg)!.replaceChildren(
    ...days.map((d, i) => chip(d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric' }), i === book.day, () => ((book.day = i), renderBooking()))),
  );
  qs('[data-book-times]', dlg)!.replaceChildren(...ex.times.map((t, i) => chip(t, i === book.time, () => ((book.time = i), renderBooking()))));
  qs('[data-guests-out]', dlg)!.textContent = String(book.guests);
  qs('[data-book-total]', dlg)!.textContent = $(ex.price * book.guests);
  qsa('[data-book-summary]', dlg).forEach((s) => (s.textContent = summary()));
};
const bookStep = (n: number) => {
  qsa('[data-book-step]', dlg).forEach((s) => (s.hidden = s.dataset.bookStep !== String(n)));
  qs('[data-book-step-label]', dlg)!.textContent = n === 3 ? 'Confirmed' : `Step ${n} of 2`;
  qs('[data-book-title]', dlg)!.textContent = n === 3 ? 'See you soon.' : n === 2 ? 'Your details' : 'Book a visit';
};
const openBooking = (exp = 0) => {
  Object.assign(book, { exp, day: 0, time: 0 });
  setDays();
  bookStep(1);
  renderBooking();
  openDialog('booking');
};
if (dlg) {
  qsa('[data-book]').forEach((b) => b.addEventListener('click', () => openBooking(Number(b.dataset.book) || 0)));
  qsa('[data-exp]', dlg).forEach((b) => b.addEventListener('click', () => {
      Object.assign(book, { exp: Number(b.dataset.exp), day: 0, time: 0 });
      setDays();
      renderBooking();
    }),
  );
  qsa('[data-guests]', dlg).forEach((b) =>
    b.addEventListener('click', () => {
      book.guests = Math.max(1, Math.min(12, book.guests + Number(b.dataset.guests)));
      renderBooking();
    }),
  );
  qs('[data-book-next]', dlg)!.addEventListener('click', () => bookStep(2));
  qs('[data-book-back]', dlg)!.addEventListener('click', () => bookStep(1));
  // TODO before launch: connect to the booking system (e.g. Tock, SevenRooms, ResDiary) or post to its API here.
  qs<HTMLFormElement>('form[data-book-step]', dlg)!.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.currentTarget as HTMLFormElement;
    const name = (f.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (f.elements.namedItem('email') as HTMLInputElement).value.trim();
    const err = qs('[data-book-error]', dlg)!;
    if (!name || !/\S+@\S+\.\S+/.test(email)) {
      err.textContent = 'Please enter your name and a valid email.';
      return;
    }
    err.textContent = '';
    qs('[data-book-confirm]', dlg)!.textContent = `Thank you, ${name.split(' ')[0]}. A confirmation has been sent to ${email}.`;
    bookStep(3);
  });
}

/* ---------- Cart (kept in localStorage so it follows you between pages) ---------- */

let cart: Record<string, number> = {};
try {
  cart = JSON.parse(localStorage.getItem('hs-cart') || '{}');
} catch {}
const saveCart = () => {
  try {
    localStorage.setItem('hs-cart', JSON.stringify(cart));
  } catch {}
};
const cartDlg = dialogs.cart;
const renderCart = (ordered = false) => {
  const items = data.wines.filter((w) => cart[w.id] > 0).map((w) => ({ ...w, qty: cart[w.id] }));
  const count = items.reduce((a, c) => a + c.qty, 0);
  const sub = items.reduce((a, c) => a + c.qty * c.price, 0);
  const ship = count >= data.shipping.freeFrom || count === 0 ? 0 : data.shipping.flat;
  qsa('[data-cart-count]').forEach((c) => (c.textContent = String(count)));
  if (!cartDlg) return;
  qs('[data-cart-ordered]', cartDlg)!.hidden = !ordered;
  qs('[data-cart-empty]', cartDlg)!.hidden = ordered || count > 0;
  qs('[data-cart-full]', cartDlg)!.hidden = ordered || count === 0;
  qs('[data-cart-items]', cartDlg)!.innerHTML = items
    .map(
      (c) => `<li><div style="display:flex;flex-direction:column;gap:4px"><span class="hs-serif" style="font-size:22px">${c.name}</span><span style="font-size:13px;color:#5D5A50">${c.vintage} · ${$(c.price)}</span></div>
      <div style="display:flex;align-items:center;gap:12px"><button type="button" data-qty="${c.id}" data-d="-1" aria-label="Remove one ${c.name}">−</button><span>${c.qty}</span><button type="button" data-qty="${c.id}" data-d="1" aria-label="Add one ${c.name}">+</button></div></li>`,
    )
    .join('');
  qs('[data-cart-ship]', cartDlg)!.textContent = ship ? $(ship) : 'Free';
  qs('[data-cart-total]', cartDlg)!.textContent = $(sub + ship);
};
cartDlg?.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>('[data-qty]');
  if (!b) return;
  const id = b.dataset.qty!;
  cart[id] = Math.max(0, (cart[id] || 0) + Number(b.dataset.d));
  saveCart();
  renderCart();
});
// TODO before launch: hand the cart to the store's checkout (e.g. WineDirect, Shopify, WooCommerce).
qs('[data-checkout]', cartDlg)?.addEventListener('click', () => {
  cart = {};
  saveCart();
  renderCart(true);
});
qsa('[data-add]').forEach((b) =>
  b.addEventListener('click', () => {
    const id = b.dataset.add!;
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    openDialog('cart');
  }),
);
qsa('[data-open="cart"]').forEach((b) => b.addEventListener('click', () => renderCart()));
renderCart();

/* ---------- Wine filters ---------- */

const filterBtns = qsa('[data-wine-filter]');
filterBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const t = btn.dataset.wineFilter;
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    qsa('[data-wine-type]').forEach((w) => (w.hidden = t !== 'All' && w.dataset.wineType !== t));
  }),
);

/* ---------- Page wipe between template pages ---------- */

const wipe = qs('[data-wipe]');
if (wipe && root.classList.contains('hs-wiping')) {
  try {
    sessionStorage.removeItem('hs-wipe');
  } catch {}
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      root.classList.remove('hs-wiping');
      wipe.classList.add('is-out');
      setTimeout(() => wipe.classList.remove('is-out'), 900);
    }),
  );
}
if (wipe && !reduce) {
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith('/cellar-door/') || url.pathname === location.pathname) return;
    e.preventDefault();
    Object.values(dialogs).forEach((d) => d.open && d.close());
    wipe.classList.remove('is-out');
    wipe.classList.add('is-in');
    try {
      sessionStorage.setItem('hs-wipe', '1');
    } catch {}
    setTimeout(() => (location.href = url.href), 800);
  });
  // Coming back via the back/forward cache: clear the panel.
  addEventListener('pageshow', (e) => {
    if (e.persisted) wipe.classList.remove('is-in', 'is-out');
  });
}

/* ---------- Scroll motion ---------- */

const header = qs('[data-header]');
const demobar = qs('[data-demobar]');
const darkHero = header?.dataset.darkHero === '1';
const pins = qsa('[data-pin]');
const scrubs = qsa<HTMLVideoElement & { _cur?: number }>('[data-scrub]');
const px = qsa('[data-px]');
const pxx = qsa('[data-pxx]');
const zooms = qsa('[data-zoom]');
const marquees = qsa('[data-marquee]');
const reveals = qsa('[data-reveal]');
const float = qs('[data-float]');
let lastY = scrollY;
let hidden = false;
let mx = innerWidth / 2,
  my = innerHeight / 2,
  fx = mx,
  fy = my;

scrubs.forEach((v) => {
  v.pause();
  v._cur = 0;
});

// Reveal: items already in view stay put; the rest start lowered and rise in when reached.
if (!reduce) {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top > innerHeight * 0.9) {
      el.style.opacity = '0';
      el.style.transform = 'translate3d(0,56px,0)';
      el.dataset.hid = '1';
    }
  });
}

// Floating photo that follows the cursor over the Tastings list.
if (float) {
  const shots = Array.from(float.children) as HTMLElement[];
  addEventListener('mousemove', (e) => ((mx = e.clientX), (my = e.clientY)));
  qsa('[data-float-i]').forEach((row) => {
    row.addEventListener('mouseenter', () => {
      float.classList.add('is-on');
      shots.forEach((s, i) => s.classList.toggle('is-on', i === Number(row.dataset.floatI)));
    });
  });
  qsa('[data-float-root]').forEach((r) => r.addEventListener('mouseleave', () => float.classList.remove('is-on')));
}

const tick = (t: number) => {
  const vh = innerHeight;
  const y = scrollY;
  const barH = demobar?.offsetHeight ?? 0;

  if (header) {
    root.style.setProperty('--hs-top', Math.max(0, barH - y) + 'px');
    const anyOpen = Object.values(dialogs).some((d) => d.open);
    if (y < 120) hidden = false;
    else if (y > lastY + 4) hidden = true;
    else if (y < lastY - 4) hidden = false;
    header.classList.toggle('is-hidden', hidden && !anyOpen);
    header.classList.toggle('is-dark', darkHero && y < vh * 0.85);
  }
  lastY = y;

  pins.forEach((el) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--p', clamp(-r.top / Math.max(1, r.height - vh)).toFixed(4));
  });

  scrubs.forEach((v) => {
    const d = v.duration;
    if (!d || isNaN(d) || v.readyState < 1) return;
    const pin = v.closest<HTMLElement>('[data-pin]');
    const p = pin ? parseFloat(pin.style.getPropertyValue('--p')) || 0 : 0;
    const target = Math.min(d - 0.05, p * d);
    v._cur! += (target - v._cur!) * (reduce ? 1 : 0.18);
    if (Math.abs(v.currentTime - v._cur!) > 0.015 && !v.seeking) v.currentTime = v._cur!;
  });

  if (!reduce) {
    px.forEach((el) => {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;
      const c = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0,${(c * parseFloat(el.dataset.px || '0')).toFixed(1)}px,0)`;
    });
    pxx.forEach((el) => {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;
      const c = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(${(c * parseFloat(el.dataset.pxx || '0')).toFixed(1)}px,0,0)`;
    });
    zooms.forEach((el) => {
      const r = el.parentElement!.getBoundingClientRect();
      const p = clamp((vh - r.top) / (vh + r.height));
      el.style.transform = `scale(${(1 + parseFloat(el.dataset.zoom || '0') * (1 - p)).toFixed(4)})`;
    });
    marquees.forEach((el) => {
      const half = el.scrollWidth / 2;
      if (!half) return;
      const x = (t * 0.03 + y * parseFloat(el.dataset.marquee || '0')) % half;
      el.style.transform = `translate3d(${-x.toFixed(1)}px,0,0)`;
    });
    reveals.forEach((el) => {
      if (el.dataset.hid !== '1' || el.getBoundingClientRect().top > vh * 0.88) return;
      el.dataset.hid = '';
      el.style.transition = 'opacity 1.2s cubic-bezier(.2,.7,.1,1), transform 1.2s cubic-bezier(.2,.7,.1,1)';
      el.style.transitionDelay = (parseInt(el.dataset.reveal || '0') || 0) + 'ms';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    if (float) {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      const rot = Math.max(-8, Math.min(8, (mx - fx) * 0.05));
      float.style.transform = `translate3d(${fx.toFixed(1)}px,${fy.toFixed(1)}px,0) translate(-50%,-50%) rotate(${rot.toFixed(2)}deg)`;
    }
  }
  requestAnimationFrame(tick);
};
requestAnimationFrame(tick);
