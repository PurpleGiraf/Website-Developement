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
  about: `${base}/our-story/`,
  wines: `${base}/wines/`,
  detail: `${base}/wines/single-vineyard-pinot-noir/`,
  visit: `${base}/visit/`,
  events: `${base}/events/`,
  weddings: `${base}/weddings/`,
  club: `${base}/club/`,
  faq: `${base}/faq/`,
  contact: `${base}/contact/`,
} as const;

export type PageKey = keyof typeof routes;

// Legal pages: linked from the footer and forms, not part of the main nav or demo bar.
export const legalRoutes = {
  privacy: `${base}/privacy/`,
  terms: `${base}/terms/`,
} as const;

export const labels: Record<PageKey, string> = {
  home: 'Home',
  about: 'Our story',
  wines: 'Wines',
  detail: 'Wine detail',
  visit: 'Visit & Dine',
  events: 'Events',
  weddings: 'Weddings',
  club: 'Club',
  faq: 'FAQ',
  contact: 'Contact',
};

export type Wine = {
  id: string;
  slug: string;
  vintage: string;
  type: string;
  name: string;
  price: number;
  tint: string;
  note: string;
  /** Longer description for the wine's own page. */
  story: string;
  nose: string;
  palate: string;
  food: string;
  block: string;
  winemaking: string;
  alcohol: string;
  cellar: string;
};

// Bottle shots: drop a transparent PNG at src/assets/images/cellar-door/bottle-<id>.png to replace the drawn bottle.
export const wines: Wine[] = [
  {
    id: 'sb', slug: 'lenswood-sauvignon-blanc', vintage: '2025', type: 'White', name: 'Lenswood Sauvignon Blanc', price: 32, tint: '#C9C3A2',
    note: 'Lime, snow pea and crushed stone. Bright and textural.',
    story: 'Picked in the cool of the morning from our highest block, where the fruit holds its acidity long into autumn. A portion sees old oak and lees stirring for texture, so it sits somewhere between the zesty and the serious.',
    nose: 'Lime zest, snow pea, cut grass and a little wet stone.',
    palate: 'Bright and juicy up front, then a chalky, textural finish that lingers.',
    food: 'Goat\'s cheese tart, King George whiting, anything with green herbs.',
    block: 'Top Ridge block, 540 m, planted 1998',
    winemaking: 'Whole-bunch pressed. 85% stainless steel, 15% older French oak, four months on lees.',
    alcohol: '12.5%', cellar: 'Drink now to 2028',
  },
  {
    id: 'ch', slug: 'ridge-chardonnay', vintage: '2024', type: 'White', name: 'Ridge Chardonnay', price: 48, tint: '#D2BF92',
    note: 'White peach, cashew and a fine thread of acidity.',
    story: 'Our oldest Chardonnay vines grow on ironstone at the crest of the ridge. We let the wild yeasts do the work in barrel and keep new oak to a minimum, so the fruit and the site do the talking.',
    nose: 'White peach, grapefruit pith, struck match and roasted cashew.',
    palate: 'Fine and linear, with a creamy mid-palate and a long, saline finish.',
    food: 'Roast chicken, scallops in brown butter, washed-rind cheese.',
    block: 'Ironstone block, 520 m, planted 1994',
    winemaking: 'Wild fermented in French oak (20% new), ten months in barrel with partial malolactic.',
    alcohol: '13%', cellar: 'Drink now to 2032',
  },
  {
    id: 'pn', slug: 'single-vineyard-pinot-noir', vintage: '2024', type: 'Red', name: 'Single Vineyard Pinot Noir', price: 56, tint: '#8E4A4C',
    note: 'Red cherry, rose petal and fine, silky tannin.',
    story: 'The wine we are best known for. Five clones planted across one east-facing slope, picked in small batches and fermented with a portion of whole bunches for lift and perfume.',
    nose: 'Red cherry, rose petal, forest floor and a little spice.',
    palate: 'Silky and layered, with fine-grained tannin and bright, lifted acidity.',
    food: 'Duck breast, mushroom risotto, slow-roasted lamb shoulder.',
    block: 'East Slope, 510 m, MV6, 114, 115, 777 and Abel clones',
    winemaking: '25% whole bunches, wild ferment, eleven months in French oak (25% new). Unfined.',
    alcohol: '13%', cellar: 'Drink now to 2034',
  },
  {
    id: 'sh', slug: 'cool-climate-shiraz', vintage: '2023', type: 'Red', name: 'Cool Climate Shiraz', price: 52, tint: '#5E3438',
    note: 'Black pepper, violets and dark plum.',
    story: 'Shiraz on the edge of ripening. The cool nights at 500 metres keep the fruit fresh and peppery, more Northern Rhône than Barossa, and we pick the moment the seeds turn brown.',
    nose: 'Cracked black pepper, violets, dark plum and a hint of smoked meat.',
    palate: 'Medium bodied and savoury, with juicy dark fruit and a firm, fine tannin line.',
    food: 'Barbecued lamb, beef cheeks, mushroom and lentil pie.',
    block: 'Lower Ridge, 490 m, planted 2001',
    winemaking: '15% whole bunches, co-fermented with a splash of Viognier, fourteen months in older oak.',
    alcohol: '13.5%', cellar: 'Drink now to 2035',
  },
  {
    id: 'ro', slug: 'pinot-rose', vintage: '2025', type: 'Rosé', name: 'Pinot Rosé', price: 30, tint: '#D4A699',
    note: 'Pale and dry. Strawberry and blood orange.',
    story: 'Made from Pinot Noir picked early for this wine alone, not bled off a red. Pressed straight away for a pale onion-skin colour and a dry, savoury finish.',
    nose: 'Wild strawberry, blood orange and a little rose water.',
    palate: 'Crisp and dry, with a delicate texture and a refreshing citrus finish.',
    food: 'Prawns, charcuterie, a long lunch in the sun.',
    block: 'East Slope, 510 m',
    winemaking: 'Whole-bunch pressed, cool fermented in stainless steel, bottled young.',
    alcohol: '12%', cellar: 'Drink now to 2027',
  },
  {
    id: 'bb', slug: 'blanc-de-blancs', vintage: 'NV', type: 'Sparkling', name: 'Blanc de Blancs', price: 62, tint: '#C8C2A8',
    note: 'Three years on lees. Brioche and green apple.',
    story: 'Traditional method sparkling made entirely from Chardonnay. Each release blends the current vintage with reserve wines held back in barrel, then rests three years on lees before disgorging.',
    nose: 'Green apple, lemon curd, brioche and toasted almond.',
    palate: 'Fine, persistent bead with a creamy texture and a long, chalky finish.',
    food: 'Oysters, fried chicken, the start of any celebration.',
    block: 'Ironstone block, 520 m',
    winemaking: 'Traditional method. 30% reserve wines, 36 months on lees, 4 g/L dosage.',
    alcohol: '12%', cellar: 'Drink now to 2029',
  },
];

export const wineUrl = (w: Wine) => `${routes.wines}${w.slug}/`;

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
  { date: '2026-11-08', start: '18:30', end: '22:30', time: '6:30pm – 10:30pm', name: 'Pinot & Paddock Dinner', desc: 'Five courses in the barrel hall with the winemaker and the 2024 Pinot release.', more: 'Our winemaker pours the new Single Vineyard Pinot Noir alongside two museum vintages, matched to five courses from the kitchen. Seating is at long shared tables.', price: 185, photo: 'cellar-door/visit-barrel-hall' },
  { date: '2026-11-29', start: '12:00', end: '16:00', time: 'Noon – 4pm', name: 'Spring Long Lunch', desc: 'A single table among the vines, cooked over fire by our kitchen.', more: 'One table, sixty guests, set between the rows of the East Slope. The kitchen cooks over fire in the vineyard, with a glass on arrival and matched wines throughout.', price: 140, photo: 'cellar-door/events-fire' },
  { date: '2026-12-13', start: '16:00', end: '21:00', time: '4pm – 9pm', name: 'Twilight Sessions', desc: 'Live music on the lawn, wine by the glass and wood-fired pizza.', more: 'Bring a rug and settle in. Local musicians on the lawn, wine and cider by the glass, and pizzas from the wood oven. Free entry, no booking needed. Kids welcome until 7pm.', price: 0, photo: 'cellar-door/events-music' },
];

export const clubTiers = [
  { id: 'cellar', name: 'Cellar', desc: 'Six bottles, twice a year', price: '~$300 / release', perks: ['Six bottles each March and September', 'Winemaker\'s selection, or swap to suit', '15% off wine and lunch', 'Free tasting for two on every visit'] },
  { id: 'reserve', name: 'Reserve', desc: 'Twelve bottles incl. library wines', price: '~$620 / release', perks: ['Twelve bottles each March and September', 'Includes library and small-batch wines', '20% off wine, 15% off lunch', 'Free Reserve & Library tasting for four', 'Invitation to the annual members\' dinner'] },
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

export const eventSchema = (site: URL | undefined) =>
  events.map((ev) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: ev.name,
    description: ev.more,
    // South Australia is on daylight time (+10:30) from October to April.
    startDate: `${ev.date}T${ev.start}:00+10:30`,
    endDate: `${ev.date}T${ev.end}:00+10:30`,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: config.business.name,
      address: `${config.business.address.line1}, ${config.business.address.locality} ${config.business.address.region} ${config.business.address.postcode}`,
    },
    organizer: { '@id': new URL(`${base}/#winery`, site).href },
    offers: { '@type': 'Offer', price: ev.price, priceCurrency: 'AUD', availability: 'https://schema.org/InStock', url: new URL(routes.events, site).href },
  }));

export const breadcrumbSchema = (items: { name: string; path: string }[], site: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: new URL(it.path, site).href })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
