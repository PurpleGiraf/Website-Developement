// JSON-LD builders for the Health template.
import { config, routes } from './config';

const abs = (path: string, site?: URL) => (site ? new URL(path, site).href : path);

export function businessSchema(site?: URL) {
  const b = config.business;
  return {
    '@context': 'https://schema.org',
    '@type': ['Physiotherapy', 'MedicalClinic'],
    '@id': abs(routes.home, site) + '#clinic',
    name: config.brandName,
    legalName: b.legalName,
    url: abs(routes.home, site),
    telephone: b.phoneIntl,
    email: b.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.line1,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      postalCode: b.address.postcode,
      addressCountry: b.address.country,
    },
    openingHoursSpecification: b.openingHoursSpec.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [b.address.locality, ...b.areas],
    medicalSpecialty: 'Physiotherapy',
    isAcceptingNewPatients: true,
  };
}

export function faqSchema(list: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], site?: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path, site),
    })),
  };
}
