// Client branding, business details and routes for Template 06 (Digital marketing agency / BLANK Digital).
// Change these values to re-brand the template. Services, posts, FAQs and legal copy live in data.ts.

export const config = {
  brandName: 'BLANK',
  brandSub: 'digital',
  tagline: 'Marketing at the speed of now.',
  // Electric blue: cursor block in the logo, progress bar, step markers. Suggested alternatives: #7c3aed, #10b981, #f97316
  accent: '#2F5BFF',
  // Lighter tint of the accent for small text on the dark background (passes WCAG AA on #0A0A0B).
  accentText: '#7D96FF',
  // Home page boot screen. Shows once per browser session, never with reduced motion.
  showIntro: true,
  // Shows the dark template bar listing every page.
  showDemoBar: true,
  // The scarcity pill above the home headline. Only switch this on when the number is true.
  announcement: { on: true, label: 'NOW BOOKING', text: '3 launch slots left for November' },

  business: {
    name: 'BLANK Digital',
    legalName: 'BLANK Digital Pty Ltd',
    // Placeholder number and email from the design: replace with the client's details before launch.
    phone: '+1 (000) 000-0000',
    phoneHref: 'tel:+10000000000',
    email: 'hello@blank.digital',
    founded: '2026',
    social: { instagram: '#', linkedin: '#', tiktok: '#' },
  },
};

export const base = '/blank-digital';

export const routes = {
  home: `${base}/`,
  services: `${base}/services/`,
  process: `${base}/process/`,
  work: `${base}/#work`,
  about: `${base}/#about`,
  insights: `${base}/insights/`,
  quote: `${base}/#quote`,
  privacy: `${base}/privacy/`,
  terms: `${base}/terms/`,
} as const;

export type PageKey = 'home' | 'services' | 'service' | 'process' | 'insights' | 'post' | 'privacy' | 'terms';

export const serviceHref = (slug: string) => `${base}/services/${slug}/`;
export const postHref = (slug: string) => `${base}/insights/${slug}/`;

const abs = (path: string, site?: URL) => new URL(path, site ?? 'https://example.com').href;

export const orgSchema = (site?: URL) => {
  const b = config.business;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${abs(routes.home, site)}#business`,
    name: b.name,
    legalName: b.legalName,
    url: abs(routes.home, site),
    telephone: b.phone,
    email: b.email,
    foundingDate: b.founded,
    slogan: config.tagline,
    knowsAbout: ['Paid advertising', 'Social media marketing', 'Search engine optimisation', 'Web design', 'Branding', 'Email marketing', 'Video production', 'Marketing analytics'],
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

export const absUrl = abs;
