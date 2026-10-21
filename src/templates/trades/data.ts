// Content for the Trades template (copied from the original design, plus build-out content).

// Slugs and image names for each service, in the same order as `services` below.
// Image names match docs/image-shotlist.md.
const serviceMeta = [
  { slug: 'kitchen-renovations', card: 'trades/service-kitchens', alt: 'Kitchen with timber cabinetry built in the Ashgrove workshop' },
  { slug: 'bathroom-renovations', card: 'trades/service-bathrooms', alt: 'Renovated bathroom with a freestanding bath' },
  { slug: 'custom-joinery', card: 'trades/service-joinery', alt: 'Built-in timber shelving made to measure' },
  { slug: 'extensions-renovations', card: 'trades/service-extensions', alt: 'Rear house extension opening onto a deck' },
  { slug: 'decks-outdoor-rooms', card: 'trades/service-decks', alt: 'Spotted gum hardwood deck' },
  { slug: 'heritage-restoration', card: 'trades/service-heritage', alt: 'Restored Queenslander verandah' },
];

export const services = [
  ['Kitchen renovations', 'Full design and build — cabinetry made in our workshop, trades managed by us.', 'From $28k', 'kitchen — timber cabinetry'],
  ['Bathrooms & ensuites', 'Waterproofed to AS 3740, tiled by our regular crew, finished with custom vanities.', 'From $22k', 'bathroom — freestanding bath'],
  ['Custom joinery', 'Built-in wardrobes, libraries, entertainment units and window seats.', 'From $4.5k', 'built-in shelving'],
  ['Extensions & renovations', 'Raise-and-builds, rear extensions and whole-home renovations.', 'From $120k', 'rear extension — deck'],
  ['Decks & outdoor rooms', 'Hardwood decks, pergolas and outdoor kitchens built for Queensland weather.', 'From $18k', 'spotted gum deck'],
  ['Heritage restoration', 'Queenslanders and workers’ cottages — VJs, fretwork and windows restored.', 'Quoted per project', 'Queenslander verandah'],
].map((r, i) => ({ num: String(i + 1).padStart(2, '0'), name: r[0], blurb: r[1], from: r[2], img: r[3], ...serviceMeta[i] }));

export const servicesTop = services.slice(0, 4);

export const faqs = [
  ['Pricing', 'Do you provide free quotes?', 'Yes. The first site visit within our service area is free. After a measure-up we provide a detailed fixed-price quote, usually within 10 working days.'],
  ['Pricing', 'How do payments work?', 'For work over $20,000 the deposit is capped at 5%, in line with QBCC requirements. After that, payments are staged against clear milestones written into your contract.'],
  ['Licensing', 'Are you licensed and insured?', 'Yes. We hold QBCC licence 1298 4471, carry $20 million public liability, and residential work over $3,300 is covered by the QBCC Home Warranty Scheme.'],
  ['Process', 'How long will my project take?', 'Kitchens typically take 8–12 weeks on site, bathrooms 4–6 weeks and extensions 4–8 months. Your contract includes a written schedule.'],
  ['Process', 'Do I need to move out during a renovation?', 'Rarely for kitchens or single bathrooms — we can set up a temporary kitchenette. For extensions and whole-home work, most clients move out for part of the build.'],
  ['Process', 'Can you work with my architect or designer?', 'Absolutely. Around a third of our projects are architect-led; we’re happy to price from existing plans or collaborate early on buildability.'],
  ['Process', 'What areas do you service?', 'Inner and northern Brisbane, Moreton Bay and the Redlands. For larger projects we’ll travel further — just ask.'],
  ['Licensing', 'Do you offer a warranty?', 'Statutory cover through the QBCC Home Warranty Scheme (up to 6 years 6 months for structural defects), plus our own 12-month maintenance visit after handover.'],
].map((r) => ({ cat: r[0], q: r[1], a: r[2] }));

export const faqCats = ['All', 'Pricing', 'Process', 'Licensing'];

export const kitchenFaqs = [
  { q: 'How much does a kitchen renovation cost in Brisbane?', a: 'Most Ashgrove kitchens land between $35,000 and $70,000 including GST. A like-for-like refresh starts around $28,000; bespoke kitchens with stone islands and integrated appliances run higher.' },
  { q: 'How long does a kitchen renovation take?', a: 'Allow 4–6 weeks for design and approvals, then 8–12 weeks on site. Cabinetry is built in our workshop while demolition and rough-in happen at your home.' },
  { q: 'Do I need council approval for a kitchen renovation?', a: 'Usually not, unless you’re moving structural walls or the home is heritage-listed. We’ll confirm during the site visit and manage any approvals needed.' },
];

export const typeList = ['Kitchen', 'Bathroom', 'Joinery', 'Extension', 'Deck', 'Heritage'];

export const steps = [
  { num: '01', title: 'Site visit & brief', body: 'We walk the house with you, measure up and talk through budget honestly.' },
  { num: '02', title: 'Design & fixed quote', body: 'Drawings, finishes and a line-by-line fixed price. No provisional-sum surprises.' },
  { num: '03', title: 'Build', body: 'One lead carpenter on site throughout, with weekly photo updates.' },
  { num: '04', title: 'Handover & care', body: 'A walkthrough, a care guide for every finish and a 12-month check-in.' },
];

export const team = [
  { name: 'Tom Hartley', role: 'Founder & licensed builder' },
  { name: 'Priya Nair', role: 'Design & project lead' },
  { name: 'Sam O’Brien', role: 'Lead cabinetmaker' },
];

export const values = [
  { title: 'Fixed prices', body: 'We do the homework upfront so the number you sign is the number you pay, barring changes you ask for.' },
  { title: 'Made, not bought', body: 'Cabinetry and joinery come from our own workshop, so we control the quality of every panel.' },
  { title: 'Tidy sites', body: 'Floors protected, dust contained, site swept daily. You still live there, after all.' },
];

export const inclusions = [
  'Design consultation and 3D layout drawings',
  'Custom cabinetry built in our Northgate workshop',
  'Benchtops, splashback and hardware supply',
  'Licensed plumbing and electrical',
  'Demolition, waste removal and site protection',
  'Final clean and handover walkthrough',
];

export const tiers = [
  { name: 'Refresh', price: 'From $28k', body: 'Same layout, new cabinetry, benchtops, splashback and appliances.' },
  { name: 'Full renovation', price: '$45–70k', body: 'Layout changes, island, new plumbing and lighting plan.' },
  { name: 'Bespoke', price: '$75k+', body: 'Solid-timber or veneer cabinetry, stone island, butler’s pantry.' },
];

export const featuredPost = {
  slug: 'kitchen-renovation-budget-brisbane',
  image: 'trades/journal-featured',
  cat: 'GUIDES',
  date: '14 OCT 2026',
  isoDate: '2026-10-14',
  read: '8 MIN READ',
  title: 'What a realistic kitchen renovation budget looks like in Brisbane (2026)',
  dek: 'We break down twelve recent projects line by line — cabinetry, benchtops, trades and the costs most quotes leave out.',
  author: 'Tom Hartley',
};

const postSlugs = [
  'timber-vs-2-pac-cabinetry',
  'queenslander-restoration-keep-or-replace',
  'how-long-bathroom-renovation-takes',
  'council-approval-deck-brisbane',
  'choosing-decking-timber',
  'walnut-sideboard-workshop',
];

export const posts = [
  ['MATERIALS', '2 OCT 2026', '2026-10-02', 'Timber vs. 2-pac: choosing cabinetry that lasts', 'How each finish wears in a busy family kitchen.'],
  ['HERITAGE', '18 SEP 2026', '2026-09-18', 'Queenslander restorations: what to keep, what to replace', 'Saving VJs, fretwork and original windows without blowing the budget.'],
  ['GUIDES', '4 SEP 2026', '2026-09-04', 'How long does a bathroom renovation take?', 'A week-by-week timeline from demolition to final seal.'],
  ['APPROVALS', '21 AUG 2026', '2026-08-21', 'Do you need council approval for a deck in Brisbane?', 'Heights, setbacks and when a certifier is required.'],
  ['MATERIALS', '7 AUG 2026', '2026-08-07', 'Spotted gum, blackbutt or merbau? Choosing decking timber', 'Durability, colour and price compared.'],
  ['PROJECTS', '24 JUL 2026', '2026-07-24', 'Inside the workshop: a 4-metre walnut sideboard', 'From rough-sawn boards to final oil.'],
].map((r, i) => ({ cat: r[0], date: r[1], isoDate: r[2], title: r[3], dek: r[4], slug: postSlugs[i], image: `trades/post-${i + 1}` }));

/** Featured article plus the list, in one array for article pages and related links. */
export const allPosts = [featuredPost, ...posts];

export const nextSteps = [
  { num: '01', title: 'We call you', body: 'Within one business day, to understand the project and book a visit.' },
  { num: '02', title: 'Free site visit', body: 'We measure up, look at access and talk through options and budget.' },
  { num: '03', title: 'Fixed-price quote', body: 'Detailed, itemised and usually within 10 working days.' },
];

export const faqPageSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
