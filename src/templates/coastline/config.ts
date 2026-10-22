// Client branding, business details and routes for Template 05 (Tourism / Coastline).
// Change these values to re-brand the template. Listings and page copy live in data.ts.

export const config = {
  brandName: 'elsewhere',
  tagline: 'A little further from ordinary.',
  // Sunset orange: CTA band, sun marks, active tabs. Suggested alternatives: #2f7d74, #c7922f, #8a4f7d
  accent: '#e0623a',
  // Darker shades of the accent for buttons with white text and small accent text (both pass WCAG AA).
  accentDeep: '#c4501f',
  accentText: '#b5461f',
  // Shows the dark template bar listing every page.
  showDemoBar: true,

  business: {
    name: 'Elsewhere Escapes',
    legalName: 'Elsewhere Escapes Pty Ltd',
    abn: '00 000 000 000',
    // 07 5550 xxxx is the ACMA range reserved for fictional use: replace with the client's number.
    phone: '(07) 5550 1840',
    phoneHref: 'tel:0755501840',
    phoneIntl: '+61-7-5550-1840',
    email: 'hello@elsewhere.example',
    founded: '2017',
    address: {
      line1: 'Suite 3, 41 Marine Parade',
      locality: 'Coolangatta',
      region: 'QLD',
      postcode: '4225',
      country: 'AU',
    },
    hours: [
      { d: 'Monday – Friday', t: '8:30am – 5:30pm' },
      { d: 'Saturday', t: '9am – 1pm' },
      { d: 'Sunday & public holidays', t: 'Closed (email us)' },
    ],
    openingHoursSpec: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:30' },
      { days: ['Saturday'], opens: '09:00', closes: '13:00' },
    ],
    social: { instagram: '#', facebook: '#', youtube: '#' },
    acknowledgement:
      'Elsewhere acknowledges the Traditional Custodians of the lands and waters we travel on, and pays respect to Elders past and present.',
  },
};

export const base = '/coastline';

export const routes = {
  home: `${base}/`,
  stays: `${base}/stays/`,
  experiences: `${base}/experiences/`,
  destinations: `${base}/destinations/`,
  notes: `${base}/field-notes/`,
  map: `${base}/map/`,
  gallery: `${base}/gallery/`,
  story: `${base}/our-story/`,
  faq: `${base}/faq/`,
  contact: `${base}/contact/`,
  book: `${base}/book/`,
} as const;

export type PageKey = keyof typeof routes | 'stay' | 'experience' | 'destination' | 'note';

export const labels: Record<keyof typeof routes, string> = {
  home: 'Home',
  stays: 'Places to stay',
  experiences: 'Tours & experiences',
  destinations: 'Destinations',
  notes: 'Field notes',
  map: 'Explore the map',
  gallery: 'Gallery',
  story: 'Our story',
  faq: 'FAQ',
  contact: 'Contact',
  book: 'Book',
};

export const legalRoutes = { privacy: `${base}/privacy/`, terms: `${base}/terms/` };

export const stayHref = (slug: string) => `${base}/stays/${slug}/`;
export const expHref = (slug: string) => `${base}/experiences/${slug}/`;
export const destHref = (slug: string) => `${base}/destinations/${slug}/`;
export const noteHref = (slug: string) => `${base}/field-notes/${slug}/`;

export const money = (n: number) => (n === 0 ? 'Free' : `$${n.toLocaleString('en-AU')}`);

const abs = (path: string, site?: URL) => new URL(path, site ?? 'https://example.com').href;

export const orgSchema = (site?: URL) => {
  const b = config.business;
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${abs(routes.home, site)}#business`,
    name: b.name,
    legalName: b.legalName,
    url: abs(routes.home, site),
    telephone: b.phoneIntl,
    email: b.email,
    foundingDate: b.founded,
    slogan: config.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.line1,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      postalCode: b.address.postcode,
      addressCountry: b.address.country,
    },
    openingHoursSpecification: b.openingHoursSpec.map((o) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: o.days, opens: o.opens, closes: o.closes })),
    areaServed: { '@type': 'Country', name: 'Australia' },
  };
};

export const breadcrumbSchema = (items: { name: string; path: string }[], site?: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path, site) })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
