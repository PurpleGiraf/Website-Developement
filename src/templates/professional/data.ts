// Page content for Template 03, copied from the original template's data.

// Service summaries (home and services hub). Full service pages live in services.ts.
export { services, inclusions, tiers, detailFaqs } from './services';

export const faqs = [
  ['Fees', 'How do your fixed fees work?', 'We agree a monthly fee covering all compliance and a set number of advisory meetings. If scope changes, we quote before doing the extra work — no surprise invoices.'],
  ['Getting started', 'How hard is it to switch accountants?', 'Not hard. Once you sign our engagement letter, we contact your current accountant, request your files and update ATO authorisations. Most clients are fully moved within two weeks.'],
  ['Getting started', 'Do you work with businesses outside Perth?', 'Yes. About a quarter of our clients are interstate; we meet by video and use secure cloud document sharing.'],
  ['Tax', 'When is my BAS due?', 'Quarterly BAS lodged through a registered agent is generally due on the 25th of the month after quarter end (26 February for the December quarter). We track every date for you.'],
  ['Tax', 'Should my business be a company or a trust?', 'It depends on profit levels, who works in the business, asset protection and your exit plans. We model each option with your actual numbers before recommending a structure.'],
  ['Software', 'Which accounting software do you support?', 'We’re certified partners for Xero and MYOB, and work with QuickBooks Online. We can migrate your data if you’re moving platforms.'],
  ['Fees', 'Is the first meeting really free?', 'Yes — 30 minutes with a partner, no obligation. We’ll tell you plainly whether we’re the right fit.'],
].map((r) => ({ cat: r[0], q: r[1], a: r[2] }));

export const faqCats = ['All', 'Getting started', 'Fees', 'Tax', 'Software'];

export const principles = [
  { big: '1', title: 'Named partner', body: 'You deal with the same partner every year, not a rotating junior.' },
  { big: '24h', title: 'Response time', body: 'Every email or call answered within one business day.' },
  { big: '$0', title: 'Surprise invoices', body: 'Fixed monthly fees. Extra work is quoted before it starts.' },
];

export const team = [
  { name: 'Margaret Haddon', role: 'Founding partner — Tax' },
  { name: 'David Lowe', role: 'Founding partner — Advisory' },
  { name: 'Anika Rao', role: 'Partner — SMSF' },
  { name: 'James Whitford', role: 'Partner — Structuring' },
];

export const creds = [
  { a: 'Chartered Accountants Australia & New Zealand', b: 'Registered practice' },
  { a: 'Tax Practitioners Board', b: 'Registered tax agent 24 816 005' },
  { a: 'SMSF Association', b: 'Specialist advisor' },
  { a: 'Xero & MYOB', b: 'Certified partners' },
];

export const featuredPost = {
  cat: 'Tax',
  date: '16.10.2026',
  isoDate: '2026-10-16',
  readTime: '6 min',
  title: 'Division 7A loans: what directors need to fix before 30 June',
  dek: 'Money drawn from your company can be treated as an unfranked dividend. Here’s how to put a complying loan agreement in place.',
  author: 'Margaret Haddon',
  byline: 'Margaret Haddon, Partner, CA',
  slug: 'division-7a-loans-before-30-june',
  image: 'professional/insights-featured',
};

export const posts = [
  ['02.10.2026', 'Payday super: what changes for employers from July 2026', 'Payroll', 'payday-super-employers-july-2026', 'David Lowe'],
  ['18.09.2026', 'Instant asset write-off: what you can still claim this year', 'Tax', 'instant-asset-write-off', 'Margaret Haddon'],
  ['04.09.2026', 'Selling your business? Start CGT planning three years out', 'Exit', 'selling-your-business-cgt-planning', 'James Whitford'],
  ['21.08.2026', 'Family trust distributions and the 2026 ATO focus areas', 'Tax', 'family-trust-distributions-ato-focus', 'James Whitford'],
  ['07.08.2026', 'SMSF property: borrowing rules in plain English', 'SMSF', 'smsf-property-borrowing-rules', 'Anika Rao'],
  ['24.07.2026', 'Building a 13-week cashflow forecast that actually gets used', 'Advisory', '13-week-cashflow-forecast', 'David Lowe'],
].map((r, i) => ({
  date: r[0],
  title: r[1],
  cat: r[2],
  isoDate: r[0].split('.').reverse().join('-'),
  slug: r[3],
  author: r[4],
  image: `professional/post-${i + 1}`,
}));

export const topicList = ['Business tax & BAS', 'Advisory & growth', 'Structuring', 'SMSF', 'Something else'];
export const formatList = ['At our office', 'Video call', 'Phone'];
export const slotList = ['Tue 27 Oct — 9:30', 'Tue 27 Oct — 14:00', 'Wed 28 Oct — 11:00', 'Thu 29 Oct — 8:30', 'Thu 29 Oct — 16:00', 'Fri 30 Oct — 10:00'];

export const contactCols = [
  { label: 'Address', l1: 'Level 9, 216 St Georges Terrace', l2: 'Perth WA 6000' },
  { label: 'Phone', l1: '(08) 5550 0193', l2: 'Mon–Fri 8:30–17:30' },
  { label: 'Email', l1: 'office@haddonlowe.com.au', l2: 'Reply within 1 business day' },
  { label: 'Getting here', l1: 'Elizabeth Quay station', l2: '5 minutes’ walk, buses on St Georges Tce' },
];
