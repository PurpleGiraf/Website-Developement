// Client branding and business details for Template 03 (Professional services).
// Change these to rebrand the template; every page, the header/footer and the JSON-LD read from here.

const headingFonts = {
  Geist: "'Geist', sans-serif",
  'Instrument Sans': "'Instrument Sans', sans-serif",
  Newsreader: "'Newsreader', serif",
} as const;

export type HeadingFont = keyof typeof headingFonts;

const headingFont: HeadingFont = 'Geist';

export const config = {
  brandName: 'Haddon Lowe',
  // Suggested alternatives: '#2747d6', '#1f7a5a', '#111111'
  accent: '#e2492f',
  headingFont,
  headingFontStack: headingFonts[headingFont],
  showSeoNotes: false,
  showDemoBar: true,

  business: {
    name: 'Haddon Lowe',
    legalName: 'Haddon Lowe Pty Ltd',
    abn: '27 084 661 302',
    tagline: 'Chartered Accountants & Advisors',
    phone: '(08) 5550 0193',
    phoneE164: '+61855500193',
    email: 'office@haddonlowe.com.au',
    address: {
      street: 'Level 9, 216 St Georges Terrace',
      locality: 'Perth',
      region: 'WA',
      postcode: '6000',
      country: 'AU',
    },
    hours: 'Mon–Fri 8:30–17:30',
    openingHours: 'Mo-Fr 08:30-17:30',
    areaServed: ['Perth', 'Australia'],
    foundingDate: '1998',
  },
};

export const base = '/professional';

export const routes = {
  home: `${base}/`,
  about: `${base}/firm/`,
  services: `${base}/services/`,
  detail: `${base}/services/small-business-tax/`,
  blog: `${base}/insights/`,
  faq: `${base}/faq/`,
  book: `${base}/book/`,
  contact: `${base}/contact/`,
} as const;

export type PageKey = keyof typeof routes;

// Legal pages sit outside the demo bar and main nav; they're linked from the footer and forms.
export const legalRoutes = {
  privacy: `${base}/privacy/`,
  terms: `${base}/terms/`,
} as const;

export const labels: Record<PageKey, string> = {
  home: 'Home',
  about: 'Firm',
  services: 'Services',
  detail: 'Service detail',
  blog: 'Insights',
  faq: 'FAQ',
  book: 'Book',
  contact: 'Contact',
};
