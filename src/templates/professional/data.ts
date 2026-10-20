// Page content for Template 03, copied from the original template's data.
import { routes } from './config';

export const services = [
  ['Small business tax & BAS', 'Quarterly BAS, annual returns and proactive tax planning.', 'From $290/mo'],
  ['Business advisory', 'Cashflow forecasting, pricing, KPIs and quarterly board-style reviews.', 'From $650/mo'],
  ['Structuring', 'Companies, trusts and groups set up — or restructured — for growth and asset protection.', 'Fixed quote'],
  ['Self-managed super', 'SMSF establishment, annual compliance, audit coordination and strategy.', 'From $2,400/yr'],
  ['Individual & family tax', 'Returns, investment property and share portfolios, CGT events.', 'From $380/yr'],
  ['Succession & sale', 'Valuation, exit planning and small business CGT concessions.', 'Fixed quote'],
].map((r, i) => ({ num: String(i + 1).padStart(2, '0'), name: r[0], blurb: r[1], from: r[2], href: routes.detail }));

export const faqs = [
  ['Fees', 'How do your fixed fees work?', 'We agree a monthly fee covering all compliance and a set number of advisory meetings. If scope changes, we quote before doing the extra work — no surprise invoices.'],
  ['Getting started', 'How hard is it to switch accountants?', 'Not hard. Once you sign our engagement letter, we contact your current accountant, request your files and update ATO authorisations. Most clients are fully moved within two weeks.'],
  ['Getting started', 'Do you work with businesses outside Melbourne?', 'Yes. About a quarter of our clients are interstate; we meet by video and use secure cloud document sharing.'],
  ['Tax', 'When is my BAS due?', 'Quarterly BAS lodged through a registered agent is generally due on the 25th of the month after quarter end (26 February for the December quarter). We track every date for you.'],
  ['Tax', 'Should my business be a company or a trust?', 'It depends on profit levels, who works in the business, asset protection and your exit plans. We model each option with your actual numbers before recommending a structure.'],
  ['Software', 'Which accounting software do you support?', 'We’re certified partners for Xero and MYOB, and work with QuickBooks Online. We can migrate your data if you’re moving platforms.'],
  ['Fees', 'Is the first meeting really free?', 'Yes — 30 minutes with a partner, no obligation. We’ll tell you plainly whether we’re the right fit.'],
].map((r) => ({ cat: r[0], q: r[1], a: r[2] }));

export const faqCats = ['All', 'Getting started', 'Fees', 'Tax', 'Software'];

export const detailFaqs = [
  { q: 'What does a small business accountant cost in Melbourne?', a: 'For an owner-led company with BAS and an annual return, expect $250–$600 a month on a fixed-fee plan, depending on transaction volume and structure.' },
  { q: 'Can you lodge overdue tax returns?', a: 'Yes. We regularly bring businesses up to date with the ATO, and can negotiate payment plans and penalty remission on your behalf.' },
  { q: 'Do I need to register for GST?', a: 'You must register once your GST turnover reaches $75,000 a year (or $150,000 for not-for-profits). Taxi and ride-share drivers must register regardless of turnover.' },
];

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

export const inclusions = [
  'Quarterly BAS preparation & lodgement',
  'Annual company, trust and individual returns',
  'Year-end tax planning meeting',
  'PAYG instalment and super guarantee review',
  'ATO correspondence handled for you',
  'Bookkeeping review in Xero or MYOB',
  'Division 7A loan management',
  'Unlimited email and phone questions',
];

export const tiers = [
  { name: 'Essentials', body: 'Sole traders and single-company businesses under $500k turnover.', price: '$290' },
  { name: 'Growth', body: 'Companies or trusts with staff, $500k–$3m turnover.', price: '$560' },
  { name: 'Group', body: 'Multi-entity groups, family trusts and holding companies.', price: 'From $950' },
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
};

export const posts = [
  ['02.10.2026', 'Payday super: what changes for employers from July 2026', 'Payroll'],
  ['18.09.2026', 'Instant asset write-off: what you can still claim this year', 'Tax'],
  ['04.09.2026', 'Selling your business? Start CGT planning three years out', 'Exit'],
  ['21.08.2026', 'Family trust distributions and the 2026 ATO focus areas', 'Tax'],
  ['07.08.2026', 'SMSF property: borrowing rules in plain English', 'SMSF'],
  ['24.07.2026', 'Building a 13-week cashflow forecast that actually gets used', 'Advisory'],
].map((r) => ({ date: r[0], title: r[1], cat: r[2], isoDate: r[0].split('.').reverse().join('-') }));

export const topicList = ['Business tax & BAS', 'Advisory & growth', 'Structuring', 'SMSF', 'Something else'];
export const formatList = ['At our office', 'Video call', 'Phone'];
export const slotList = ['Tue 27 Oct — 9:30', 'Tue 27 Oct — 14:00', 'Wed 28 Oct — 11:00', 'Thu 29 Oct — 8:30', 'Thu 29 Oct — 16:00', 'Fri 30 Oct — 10:00'];

export const contactCols = [
  { label: 'Address', l1: 'Level 9, 410 Collins Street', l2: 'Melbourne VIC 3000' },
  { label: 'Phone', l1: '(03) 9555 0193', l2: 'Mon–Fri 8:30–17:30' },
  { label: 'Email', l1: 'office@haddonlowe.com.au', l2: 'Reply within 1 business day' },
  { label: 'Getting here', l1: 'Trams 11, 12, 48, 109', l2: 'Collins St / Queen St stop' },
];
