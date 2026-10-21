// Client branding and business details for the Trades template.
const fonts = {
  'Instrument Serif': "'Instrument Serif', serif",
  Newsreader: "'Newsreader', serif",
  Archivo: "'Archivo', sans-serif",
} as const;

export const config = {
  brandName: 'Ashgrove',
  accent: '#9a5b34', // options: #9a5b34, #5d6b4a, #2f4858, #8a6d3b
  headingFont: 'Instrument Serif' as keyof typeof fonts,
  showSeoNotes: false,
  showDemoBar: true,
  business: {
    name: 'Ashgrove Joinery & Build',
    legalName: 'Ashgrove Joinery & Build Pty Ltd',
    abn: '41 612 004 873',
    licence: 'QBCC 1298 4471',
    phone: '(07) 3555 0142',
    phoneHref: 'tel:0735550142',
    phoneIntl: '+61 7 3555 0142',
    email: 'hello@ashgrovebuild.com.au',
    address: { street: 'Unit 4, 22 Earnshaw Road', locality: 'Northgate', region: 'QLD', postcode: '4013', country: 'AU' },
    hours: ['Mon–Fri 7:00am – 4:00pm', 'Showroom Sat by appointment'],
    serviceArea: 'Inner & north Brisbane, Moreton Bay, Redlands',
    areas: ['Paddington', 'Ashgrove', 'Clayfield', 'Wilston', 'Kedron', 'North Lakes', 'Cleveland'],
    foundingYear: '2009',
  },
};

export const hf = fonts[config.headingFont] ?? fonts['Instrument Serif'];

export const base = '/trades/';
export const pages = [
  { key: 'home', label: 'Home', href: `${base}` },
  { key: 'about', label: 'About', href: `${base}about/` },
  { key: 'services', label: 'Services', href: `${base}services/` },
  { key: 'detail', label: 'Service detail', href: `${base}services/kitchen-renovations/` },
  { key: 'blog', label: 'Journal', href: `${base}journal/` },
  { key: 'faq', label: 'FAQ', href: `${base}faq/` },
  { key: 'quote', label: 'Quote', href: `${base}quote/` },
  { key: 'contact', label: 'Contact', href: `${base}contact/` },
] as const;

export type PageKey = (typeof pages)[number]['key'];
export const href = Object.fromEntries(pages.map((p) => [p.key, p.href])) as Record<PageKey, string>;
export const legalHref = { privacy: `${base}privacy/`, terms: `${base}terms/` };
export const postHref = (slug: string) => `${base}journal/${slug}/`;

export const localBusinessSchema = (site: URL | undefined) => {
  const b = config.business;
  const url = new URL(base, site ?? 'https://example.com').href;
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${url}#business`,
    name: b.name,
    legalName: b.legalName,
    url,
    telephone: b.phoneIntl,
    email: b.email,
    foundingDate: b.foundingYear,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      postalCode: b.address.postcode,
      addressCountry: b.address.country,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '16:00' },
    ],
    areaServed: ['Brisbane', 'Moreton Bay', 'Redlands', ...b.areas].map((name) => ({ '@type': 'Place', name })),
  };
};
