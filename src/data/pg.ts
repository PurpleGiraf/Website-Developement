// Shared Purple Giraffe site data: navigation, services, offices.
export const PG_SITE = 'https://purplegiraffe.com.au';

export const services = [
  { key: 'web', n: '01', label: 'Website development', href: '/services/website-development/' },
  { key: 'marketing', n: '02', label: 'Digital marketing', href: '/services/digital-marketing/' },
  { key: 'ai', n: '03', label: 'AI solutions', href: '/services/ai-solutions/' },
  { key: 'ux', n: '04', label: 'UI/UX design', href: '/services/ui-ux-design/' },
] as const;

export type ServiceKey = (typeof services)[number]['key'];

export const navLinks = [
  { key: 'work', label: 'Work', href: '/#work' },
  { key: 'templates', label: 'Templates', href: '/templates/' },
  { key: 'review', label: 'AI Visibility Review', href: '/ai-visibility-review/' },
  { key: 'about', label: 'About', href: '/about/' },
  { key: 'faq', label: 'FAQ', href: '/faq/' },
] as const;

export type NavKey = ServiceKey | (typeof navLinks)[number]['key'] | 'contact' | '';

export const offices = [
  { label: 'Adelaide · Head office', lines: ['Suite 5/181 Gilles Street', 'Adelaide SA 5000'], phone: '08 8425 2970', tel: '0884252970', street: 'Suite 5/181 Gilles Street', locality: 'Adelaide', region: 'SA', postcode: '5000' },
  { label: 'Perth · Virtual', lines: ['Fremantle WA 6160'], phone: '08 6263 9236', tel: '0862639236', locality: 'Fremantle', region: 'WA', postcode: '6160' },
  { label: 'Queensland', lines: ['Ground Floor, 2/67 Astor Terrace', 'Spring Hill QLD 4000'], phone: '07 3544 9535', tel: '0735449535', street: 'Ground Floor, 2/67 Astor Terrace', locality: 'Spring Hill', region: 'QLD', postcode: '4000' },
];

export const email = 'marketing@purplegiraffe.com.au';

// Social profiles (from the current purplegiraffe.com.au site).
export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/PurpleGiraffeAU' },
  { label: 'Instagram', href: 'https://www.instagram.com/PurpleGiraffeAU' },
  { label: 'Facebook', href: 'https://www.facebook.com/PurpleGiraffeAU' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC1pLU2r-aMFPNQWXRn0N24A' },
];

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Purple Giraffe',
  url: PG_SITE,
  email,
  foundingDate: '2014',
  founder: { '@type': 'Person', name: 'Lynda Schenk' },
  sameAs: [] as string[],
  location: offices.map((o) => ({
    '@type': 'Place',
    name: `Purple Giraffe ${o.locality}`,
    telephone: o.phone,
    address: { '@type': 'PostalAddress', streetAddress: o.street, addressLocality: o.locality, addressRegion: o.region, postalCode: o.postcode, addressCountry: 'AU' },
  })),
};

orgSchema.sameAs = socials.map((s) => s.href);
