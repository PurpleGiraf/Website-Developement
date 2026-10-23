// Service pages for Template 03. One entry per service; each renders at /professional/services/<slug>/.
// The first service keeps the copy from the original template's detail page.
import { base } from './config';

export type Tier = {
  name: string;
  body: string;
  price: string;
  /** schema.org unit for the price, if it recurs */
  unit?: 'MONTH' | 'ANN';
};

export type Service = {
  num: string;
  slug: string;
  href: string;
  name: string;
  /** Short label for breadcrumbs and the footer */
  short: string;
  blurb: string;
  from: string;
  serviceType: string;
  h1: string;
  intro: string;
  cta: string;
  whoFor: string[];
  inclusions: string[];
  feeHeader: string;
  feeNote?: string;
  tiers: Tier[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

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

export const tiers: Tier[] = [
  { name: 'Essentials', body: 'Sole traders and single-company businesses under $500k turnover.', price: '$290', unit: 'MONTH' },
  { name: 'Growth', body: 'Companies or trusts with staff, $500k–$3m turnover.', price: '$560', unit: 'MONTH' },
  { name: 'Group', body: 'Multi-entity groups, family trusts and holding companies.', price: 'From $950', unit: 'MONTH' },
];

export const detailFaqs = [
  { q: 'What does a small business accountant cost in Perth?', a: 'For an owner-led company with BAS and an annual return, expect $250–$600 a month on a fixed-fee plan, depending on transaction volume and structure.' },
  { q: 'Can you lodge overdue tax returns?', a: 'Yes. We regularly bring businesses up to date with the ATO, and can negotiate payment plans and penalty remission on your behalf.' },
  { q: 'Do I need to register for GST?', a: 'You must register once your GST turnover reaches $75,000 a year (or $150,000 for not-for-profits). Taxi and ride-share drivers must register regardless of turnover.' },
];

const list: Omit<Service, 'num' | 'href'>[] = [
  {
    slug: 'small-business-tax',
    name: 'Small business tax & BAS',
    short: 'Small business tax',
    blurb: 'Quarterly BAS, annual returns and proactive tax planning.',
    from: 'From $290/mo',
    serviceType: 'Small business accounting',
    h1: 'Small business tax & BAS, Perth',
    intro: 'Quarterly BAS, annual returns and year-round tax planning for companies, trusts and sole traders — on a fixed monthly fee from $290 + GST.',
    cta: 'Book a free 30-min review',
    whoFor: [
      'Sole traders who have outgrown doing their own BAS.',
      'Companies and trusts with staff, payroll and super obligations.',
      'Owners who want tax planned before 30 June, not explained after it.',
      'Businesses switching from an accountant they only hear from once a year.',
    ],
    inclusions,
    feeHeader: 'Monthly, ex GST',
    tiers,
    faqs: detailFaqs,
    metaTitle: 'Small business tax & BAS accountant Perth | Haddon Lowe',
    metaDescription: 'Quarterly BAS, annual returns and tax planning for Perth companies, trusts and sole traders. Fixed monthly fee from $290 + GST. Book a free 30-minute review.',
  },
  {
    slug: 'business-advisory',
    name: 'Business advisory',
    short: 'Business advisory',
    blurb: 'Cashflow forecasting, pricing, KPIs and quarterly board-style reviews.',
    from: 'From $650/mo',
    serviceType: 'Business advisory',
    h1: 'Business advisory for owner-led companies',
    intro: 'A partner who looks forward with you, not just back. Rolling cashflow forecasts, the handful of numbers that matter, and a quarterly review run like a board meeting. From $650 a month + GST.',
    cta: 'Book a free 30-min review',
    whoFor: [
      'Owners with roughly 5 to 50 staff who are making growth decisions on gut feel.',
      'Businesses where profit looks fine but the bank balance does not.',
      'Companies preparing for bank finance, a new location or a major hire.',
      'Founders who want an outside view without hiring a full-time CFO.',
    ],
    inclusions: [
      '13-week rolling cashflow forecast',
      'Annual budget with quarterly reforecast',
      'KPI dashboard built from Xero or MYOB',
      'Quarterly board-style review with your partner',
      'Pricing and gross margin analysis',
      'Support preparing bank finance applications',
      'Scenario modelling for hires, leases and capital spend',
      'Direct access to your partner between meetings',
    ],
    feeHeader: 'Monthly, ex GST',
    tiers: [
      { name: 'Quarterly', body: 'Forecast, dashboard and a review meeting every quarter.', price: '$650', unit: 'MONTH' },
      { name: 'Monthly', body: 'Monthly review meeting and reforecast for faster-moving businesses.', price: '$1,200', unit: 'MONTH' },
      { name: 'Outsourced CFO', body: 'Ongoing finance leadership, including board and lender reporting.', price: 'From $2,400', unit: 'MONTH' },
    ],
    faqs: [
      { q: 'What is the difference between compliance and advisory?', a: 'Compliance is getting your BAS and tax returns right and on time. Advisory uses the same numbers to plan ahead: what you can afford, where margin is leaking and what happens to cash if you grow.' },
      { q: 'Do I need to be a tax client to use advisory?', a: 'No. Most advisory clients also use us for tax because it saves duplicated work, but we can work alongside your existing accountant.' },
      { q: 'How quickly will we have a working forecast?', a: 'Usually within the first month, once we have access to your accounting file. What it changes for your business depends on the decisions you make with it, and we help you make them.' },
    ],
    metaTitle: 'Business advisory & cashflow forecasting Perth | Haddon Lowe',
    metaDescription: 'Cashflow forecasts, KPIs, pricing and quarterly board-style reviews for Perth owner-led businesses. Fixed monthly fee from $650 + GST.',
  },
  {
    slug: 'structuring',
    name: 'Structuring',
    short: 'Structuring',
    blurb: 'Companies, trusts and groups set up — or restructured — for growth and asset protection.',
    from: 'Fixed quote',
    serviceType: 'Business structuring',
    h1: 'Business structuring: companies, trusts and groups',
    intro: 'The right structure affects the tax you pay, how well your assets are protected and how easily you can sell or bring in partners. We model the options with your real numbers before recommending one, and quote a fixed fee up front.',
    cta: 'Book a structure review',
    whoFor: [
      'People starting a business who want to set it up properly the first time.',
      'Sole traders whose profits have grown past what that structure suits.',
      'Owners bringing in a business partner, investor or family member.',
      'Groups buying property, a second business or separating assets from trading risk.',
    ],
    inclusions: [
      'Review of your current structure and goals',
      'Side-by-side modelling of company, trust and partnership options',
      'Company registration with ASIC',
      'Trust deed arranged through a specialist deed provider',
      'ABN, TFN, GST and PAYG withholding registrations',
      'Capital gains tax and stamp duty review before assets move',
      'Coordination with your lawyer on shareholder and unitholder agreements',
      'A written summary of how the structure works and why',
    ],
    feeHeader: 'Fixed fee, ex GST',
    feeNote: 'Government and deed provider fees are passed on at cost.',
    tiers: [
      { name: 'Structure review', body: 'Assessment of your current setup with written recommendations.', price: 'From $1,800' },
      { name: 'New entity setup', body: 'A company or trust established and registered, ready to trade.', price: 'From $1,450' },
      { name: 'Group restructure', body: 'Moving a business or assets into a new structure.', price: 'Quoted after review' },
    ],
    faqs: [
      { q: 'Is a company or a trust better for my business?', a: 'There is no single answer. It depends on profit levels, who works in the business, whether you want to distribute income to family, asset protection and your exit plans. We compare the options using your actual numbers.' },
      { q: 'Can I change my structure later?', a: 'Yes, but moving a business or assets between entities can trigger capital gains tax and stamp duty. Some rollovers and concessions may apply, so it is worth planning the change carefully and getting it right early.' },
      { q: 'Do you prepare the legal documents?', a: 'We register entities and arrange trust deeds through a specialist provider. Agreements between owners, such as shareholder agreements, should be prepared by your lawyer, and we work with them on the tax and financial terms.' },
    ],
    metaTitle: 'Company & trust structuring accountant Perth | Haddon Lowe',
    metaDescription: 'Company, trust and group structures for Perth businesses, modelled with your numbers. Setup, restructures and asset protection on a fixed fee.',
  },
  {
    slug: 'self-managed-super',
    name: 'Self-managed super',
    short: 'Self-managed super',
    blurb: 'SMSF establishment, annual compliance, audit coordination and strategy.',
    from: 'From $2,400/yr',
    serviceType: 'SMSF accounting and administration',
    h1: 'SMSF accounting and administration',
    intro: 'Annual accounts, tax returns and audit coordination for self-managed super funds, plus clear guidance on contributions, pensions and property. Led by Anika Rao, our SMSF partner. Compliance from $2,400 a year + GST.',
    cta: 'Book a free 30-min review',
    whoFor: [
      'Trustees of an existing SMSF who want faster, clearer annual compliance.',
      'Business owners whose fund holds, or plans to buy, business premises.',
      'Members moving into retirement phase and starting a pension.',
      'People weighing up whether an SMSF suits them at all.',
    ],
    inclusions: [
      'Annual financial statements and member statements',
      'SMSF annual return prepared and lodged',
      'Coordination with an independent approved SMSF auditor',
      'Contribution cap monitoring for each member',
      'Minimum pension calculations and documentation',
      'Trustee minutes and resolutions',
      'Corporate trustee ASIC compliance',
      'SMSF establishment, including trust deed and corporate trustee',
    ],
    feeHeader: 'Fee, ex GST',
    feeNote: 'The independent audit, ATO supervisory levy and any ASIC fees are charged separately.',
    tiers: [
      { name: 'Accumulation', body: 'Annual compliance for funds where all members are still contributing.', price: '$2,400/yr', unit: 'ANN' },
      { name: 'Pension phase', body: 'Funds paying one or more pensions, including actuarial certificates where needed.', price: '$2,900/yr', unit: 'ANN' },
      { name: 'Establishment', body: 'New fund, trust deed, corporate trustee and registrations.', price: 'From $1,600' },
    ],
    faqs: [
      { q: 'Should I set up an SMSF?', a: 'That is a financial advice question, and the answer depends on your balance, costs, time and investment plans. We will talk through the duties, costs and alternatives. Where you need personal advice, it must come from someone authorised under an Australian financial services licence, and we will tell you plainly when that applies.' },
      { q: 'Can my SMSF buy my business premises?', a: 'Generally yes. An SMSF can acquire business real property from a related party at market value, and lease it back to your business. The lease must be on commercial terms at market rent, and the rent must actually be paid.' },
      { q: 'Who audits my fund?', a: 'Every SMSF must be audited each year by an approved SMSF auditor who is independent of the fund and of us. We prepare everything the auditor needs and manage the process with them.' },
    ],
    metaTitle: 'SMSF accountant Perth | Haddon Lowe',
    metaDescription: 'SMSF annual accounts, tax returns, audit coordination, pensions and establishment. Perth SMSF specialists with compliance from $2,400 a year + GST.',
  },
  {
    slug: 'individual-family-tax',
    name: 'Individual & family tax',
    short: 'Individual & family tax',
    blurb: 'Returns, investment property and share portfolios, CGT events.',
    from: 'From $380/yr',
    serviceType: 'Individual tax return preparation',
    h1: 'Individual and family tax returns',
    intro: 'Tax returns for business owners, investors and their families, prepared by the same team that knows your business. Rental properties, share portfolios, capital gains and family trust distributions, from $380 a year + GST.',
    cta: 'Book a free 30-min review',
    whoFor: [
      'Business owners and their partners who want everything in one place.',
      'Investors with rental properties, shares or managed funds.',
      'Anyone who sold an asset this year and has a capital gain to report.',
      'Families receiving distributions from a family trust.',
    ],
    inclusions: [
      'Individual tax returns prepared and lodged',
      'Rental property schedules and depreciation',
      'Capital gains on shares, crypto and property',
      'Dividend and managed fund statements reconciled',
      'Family trust distribution planning',
      'Medicare levy surcharge and private health checks',
      'Extended lodgment dates through our tax agent program',
      'ATO letters and reviews handled for you',
    ],
    feeHeader: 'Annual, ex GST',
    tiers: [
      { name: 'Individual', body: 'Salary, a few deductions and simple investments.', price: '$380', unit: 'ANN' },
      { name: 'Investor', body: 'One rental property or a share portfolio with capital gains.', price: '$650', unit: 'ANN' },
      { name: 'Family', body: 'Two or more returns plus a family trust distribution plan.', price: 'From $1,400', unit: 'ANN' },
    ],
    faqs: [
      { q: 'When is my tax return due?', a: 'If you lodge yourself, it is due by 31 October. If you are on a registered tax agent’s client list before that date, you can usually lodge later under the agent’s lodgment program. We confirm your exact date when you join.' },
      { q: 'Can I claim interest on my rental property loan?', a: 'Generally yes, for the portion of the loan used to buy a property that is rented or genuinely available for rent. If you redraw money from the loan for private use, interest on that part is not deductible.' },
      { q: 'What do I need to send you?', a: 'Usually your income statement is pre-filled from the ATO. We send a checklist covering rental statements, sale contracts, investment summaries and receipts, and you can upload everything to our secure portal.' },
    ],
    metaTitle: 'Individual tax returns & investment property tax Perth | Haddon Lowe',
    metaDescription: 'Tax returns for Perth business owners, investors and families. Rental properties, shares, capital gains and trust distributions, from $380 a year + GST.',
  },
  {
    slug: 'succession-sale',
    name: 'Succession & sale',
    short: 'Succession & sale',
    blurb: 'Valuation, exit planning and small business CGT concessions.',
    from: 'Fixed quote',
    serviceType: 'Business succession and exit planning',
    h1: 'Selling or passing on your business',
    intro: 'The tax on a business sale is largely decided years before the sale. We help you get the structure, records and timing right so you keep more of what you have built, whether you sell to a buyer, your team or the next generation.',
    cta: 'Book an exit planning review',
    whoFor: [
      'Owners planning to sell in the next one to five years.',
      'Family businesses handing over to the next generation.',
      'Partners or shareholders planning to exit a shared business.',
      'Owners who have received an approach from a buyer and want to understand the numbers.',
    ],
    inclusions: [
      'Exit readiness review',
      'Indicative business valuation',
      'Small business CGT concessions eligibility review',
      'Pre-sale structure and record clean-up',
      'Modelling of after-tax proceeds under different sale options',
      'Due diligence support alongside your lawyer and broker',
      'Family succession planning with your estate lawyer',
      'Super contribution planning for sale proceeds',
    ],
    feeHeader: 'Fixed fee, ex GST',
    tiers: [
      { name: 'Exit readiness', body: 'Review of structure, records and concession eligibility with an action plan.', price: 'From $3,500' },
      { name: 'Valuation', body: 'Indicative valuation with the assumptions explained.', price: 'From $4,500' },
      { name: 'Sale support', body: 'Hands-on support from offer through to settlement.', price: 'Quoted per sale' },
    ],
    faqs: [
      { q: 'What are the small business CGT concessions?', a: 'There are four: the 15-year exemption, the 50% active asset reduction, the retirement exemption and the rollover. To qualify you generally need to pass a turnover or net asset value test, and the asset must be an active asset. They can substantially reduce tax on a sale, but the conditions are strict, so check eligibility early.' },
      { q: 'How far ahead should I start planning?', a: 'Ideally three years. That leaves time to fix structure problems, separate investment assets from the trading business and build clean financial records, all of which can affect both the price and the tax.' },
      { q: 'Can you value my business?', a: 'We prepare indicative valuations for planning and negotiation. Where a formal valuation is needed, for example for a related-party sale or a dispute, we refer you to an independent valuer and work with them.' },
    ],
    metaTitle: 'Business sale & succession planning accountant Perth | Haddon Lowe',
    metaDescription: 'Exit planning, valuations and small business CGT concessions for Perth owners selling or passing on a business. Fixed fees, quoted up front.',
  },
];

export const services: Service[] = list.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, '0'),
  href: `${base}/services/${s.slug}/`,
}));
