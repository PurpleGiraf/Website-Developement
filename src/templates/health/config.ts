// Client branding and business details for Template 02 (Health & allied health).
// Change these values to re-brand the template.

const headingFonts = {
  Lora: "'Lora', serif",
  Figtree: "'Figtree', sans-serif",
  'DM Serif Display': "'DM Serif Display', serif",
} as const;

export type HeadingFont = keyof typeof headingFonts;

const headingFont: HeadingFont = 'Lora';

export const config = {
  brandName: 'Saltbush Physio',
  // Suggested alternatives: #5f7688, #a26b52, #76698a
  accent: '#4f6f5a',
  headingFont,
  headingFontStack: headingFonts[headingFont],
  // Shows the SEO annotation badges (schema / keyword notes) on each page.
  showSeoNotes: false,
  // Shows the dark template bar listing every page.
  showDemoBar: true,

  business: {
    name: 'Saltbush Physiotherapy',
    legalName: 'Saltbush Physiotherapy Pty Ltd',
    abn: '63 108 552 914',
    phone: '(08) 8555 0178',
    phoneHref: 'tel:0885550178',
    phoneIntl: '+61-8-8555-0178',
    email: 'hello@saltbushphysio.com.au',
    address: {
      line1: 'Level 1, 184 The Parade',
      locality: 'Norwood',
      region: 'SA',
      postcode: '5067',
      country: 'AU',
    },
    parking: 'Free 2-hour parking on Edward St. Lift access.',
    hours: [
      { d: 'Mon – Thu', t: '7:00am – 7:30pm' },
      { d: 'Friday', t: '7:00am – 5:00pm' },
      { d: 'Saturday', t: '8:00am – 12:30pm' },
      { d: 'Sunday', t: 'Closed' },
    ],
    // schema.org openingHoursSpecification equivalent of `hours`
    openingHoursSpec: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '19:30' },
      { days: ['Friday'], opens: '07:00', closes: '17:00' },
      { days: ['Saturday'], opens: '08:00', closes: '12:30' },
    ],
    areas: ['Kensington', 'Kent Town', 'St Peters', 'Magill', 'Burnside', 'Adelaide CBD'],
  },
};

export const base = '/health';

export const routes = {
  home: `${base}/`,
  about: `${base}/about/`,
  services: `${base}/services/`,
  detail: `${base}/services/clinical-pilates/`,
  blog: `${base}/resources/`,
  faq: `${base}/faq/`,
  book: `${base}/book/`,
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
  about: 'About',
  services: 'Services',
  detail: 'Service detail',
  blog: 'Resources',
  faq: 'FAQ',
  book: 'Book',
  contact: 'Contact',
};
