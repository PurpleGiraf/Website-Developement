// JSON-LD builders for Template 03.
import { config, routes } from './config';

const b = config.business;

export const abs = (site: URL | undefined, path: string) => new URL(path, site ?? 'https://example.com').toString();

export function businessSchema(site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': abs(site, routes.home) + '#business',
    name: config.brandName,
    legalName: b.legalName,
    description: `${b.tagline}. Tax, advisory and SMSF services for owner-led businesses and their families.`,
    url: abs(site, routes.home),
    telephone: b.phoneE164,
    email: b.email,
    foundingDate: b.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      postalCode: b.address.postcode,
      addressCountry: b.address.country,
    },
    openingHours: b.openingHours,
    areaServed: b.areaServed,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(site: URL | undefined, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(site, c.path),
    })),
  };
}
