// Client branding, business details and content for Template 04 (Wine & hospitality / cellar door).
// Change these values to re-brand the template.

export const config = {
  brandName: 'Hillside',
  // Wine red: buttons, italics, wipe transition. Suggested alternatives: #4a3a5e, #6b3b22, #2f3a2c
  accent: '#5E1F24',
  // Shows the dark template bar listing every page.
  showDemoBar: true,

  business: {
    name: 'Hillside Wines',
    legalName: 'Hillside Wines Pty Ltd',
    phone: '(08) 8389 4120',
    phoneHref: 'tel:0883894120',
    phoneIntl: '+61-8-8389-4120',
    email: 'cellar@hillsidewines.com.au',
    instagram: '@hillsidewines',
    licence: 'Liquor licence 57204193',
    founded: '1994',
    address: {
      line1: '48 Ridge Road',
      locality: 'Lenswood',
      region: 'SA',
      postcode: '5240',
      country: 'AU',
    },
    directions: 'Via the South Eastern Freeway and Lobethal Road. Parking on site.',
    hoursShort: 'Thursday – Monday, 11 – 5',
    hours: [
      { d: 'Thursday – Monday', t: '11am – 5pm' },
      { d: 'Lunch', t: 'Noon – 3pm' },
      { d: 'Tuesday & Wednesday', t: 'Closed' },
    ],
    // schema.org openingHoursSpecification equivalent of `hours`
    openingHoursSpec: [{ days: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'], opens: '11:00', closes: '17:00' }],
    acknowledgement: 'We acknowledge the Peramangk people, Traditional Owners of the land on which we grow.',
  },
};

export const base = '/cellar-door';

export const routes = {
  home: `${base}/`,
  wines: `${base}/wines/`,
  visit: `${base}/visit/`,
} as const;

export type PageKey = keyof typeof routes;

export const labels: Record<PageKey, string> = {
  home: 'Home',
  wines: 'Wines',
  visit: 'Visit & Dine',
};

export type Wine = { id: string; vintage: string; type: string; name: string; price: number; tint: string; note: string };

// Bottle shots: drop a transparent PNG at src/assets/images/cellar-door/bottle-<id>.png to replace the tinted placeholder.
export const wines: Wine[] = [
  { id: 'sb', vintage: '2025', type: 'White', name: 'Lenswood Sauvignon Blanc', price: 32, tint: '#C9C3A2', note: 'Lime, snow pea and crushed stone. Bright and textural.' },
  { id: 'ch', vintage: '2024', type: 'White', name: 'Ridge Chardonnay', price: 48, tint: '#D2BF92', note: 'White peach, cashew and a fine thread of acidity.' },
  { id: 'pn', vintage: '2024', type: 'Red', name: 'Single Vineyard Pinot Noir', price: 56, tint: '#8E4A4C', note: 'Red cherry, rose petal and fine, silky tannin.' },
  { id: 'sh', vintage: '2023', type: 'Red', name: 'Cool Climate Shiraz', price: 52, tint: '#5E3438', note: 'Black pepper, violets and dark plum.' },
  { id: 'ro', vintage: '2025', type: 'Rosé', name: 'Pinot Rosé', price: 30, tint: '#D4A699', note: 'Pale and dry. Strawberry and blood orange.' },
  { id: 'bb', vintage: 'NV', type: 'Sparkling', name: 'Blanc de Blancs', price: 62, tint: '#C8C2A8', note: 'Three years on lees. Brioche and green apple.' },
];

export const wineTypes = ['All', 'White', 'Red', 'Rosé', 'Sparkling'];

// Members price, shown on the shop page.
export const clubDiscount = 0.15;
// Shipping: free on six bottles or more, otherwise a flat rate.
export const shipping = { freeFrom: 6, flat: 15 };

// `days`: weekdays it runs (0 = Sunday), so the booking calendar only offers valid dates.
export type Experience = { id: string; name: string; desc: string; meta: string; price: number; days: number[]; times: string[]; photo: string; photoAlt: string };

export const experiences: Experience[] = [
  { id: 'tasting', name: 'Cellar Door Tasting', desc: 'Six current releases at the stone bar, guided by our cellar team.', meta: '45 min · Thu–Mon', price: 20, days: [0, 1, 4, 5, 6], times: ['11:00', '12:30', '2:00', '3:30'], photo: 'cellar-door/exp-tasting', photoAlt: 'A flight of wines lined up for a tasting' },
  { id: 'reserve', name: 'Reserve & Library', desc: 'Seven wines including museum vintages, with Hills cheese and charcuterie.', meta: '75 min · Fri–Sun', price: 65, days: [0, 5, 6], times: ['11:30', '1:30', '3:00'], photo: 'cellar-door/exp-reserve', photoAlt: 'Wine with a board of local cheese and charcuterie' },
  { id: 'walk', name: 'Vineyard Walk & Lunch', desc: 'A walk through the blocks with our winemaker, then lunch on the verandah.', meta: '3 hrs · Saturdays', price: 165, days: [6], times: ['10:30'], photo: 'cellar-door/exp-walk', photoAlt: 'Guests walking between the vineyard rows' },
  { id: 'lunch', name: 'Verandah Lunch', desc: 'Four-course set menu with optional wine match.', meta: 'From noon', price: 95, days: [0, 1, 4, 5, 6], times: ['12:00', '12:30', '1:00', '1:30'], photo: 'cellar-door/home-verandah', photoAlt: 'Lunch on the verandah' },
];

export const lunch = { courses: 95, match: 55 };

// ISO dates so the Event schema is valid; update for each season.
export const events = [
  { date: '2026-11-08', start: '18:30', name: 'Pinot & Paddock Dinner', desc: 'Five courses in the barrel hall with the winemaker and the 2024 Pinot release.', price: 185 },
  { date: '2026-11-29', start: '12:00', name: 'Spring Long Lunch', desc: 'A single table among the vines, cooked over fire by our kitchen.', price: 140 },
  { date: '2026-12-13', start: '16:00', name: 'Twilight Sessions', desc: 'Live music on the lawn, wine by the glass and wood-fired pizza.', price: 0 },
];

export const clubTiers = [
  { id: 'cellar', name: 'Cellar', desc: 'Six bottles, twice a year', price: '~$300 / release' },
  { id: 'reserve', name: 'Reserve', desc: 'Twelve bottles incl. library wines', price: '~$620 / release' },
];

export const money = (n: number) => '$' + n;

export const businessSchema = (site: URL | undefined) => {
  const b = config.business;
  return {
    '@context': 'https://schema.org',
    '@type': 'Winery',
    '@id': new URL(`${base}/#winery`, site).href,
    name: b.name,
    url: new URL(routes.home, site).href,
    telephone: b.phoneIntl,
    email: b.email,
    foundingDate: b.founded,
    servesCuisine: 'Modern Australian',
    acceptsReservations: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.line1,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      postalCode: b.address.postcode,
      addressCountry: b.address.country,
    },
    openingHoursSpecification: b.openingHoursSpec.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
  };
};
