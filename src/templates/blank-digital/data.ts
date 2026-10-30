// Page content for Template 06 (BLANK Digital). Branding and contact details live in config.ts.

export type Service = {
  slug: string;
  name: string;
  short: string;
  speed: string;
  speedLong: string;
  card: string;
  blurb: string;
  h1: string;
  intro: string;
  deliverables: [string, string][];
  timeline: [string, string][];
  metrics: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'paid-ads', name: 'Paid ads', short: 'paid ads', speed: 'Live in 72h', speedLong: 'Live in 72 hours',
    card: 'Google, Meta and TikTok campaigns tuned daily against real bookings, not vanity clicks.',
    blurb: 'Google, Meta and TikTok campaigns tuned daily against real bookings.',
    h1: 'Ads that pay for themselves.',
    intro: 'Google, Meta and TikTok campaigns built around bookings and sales, not clicks. Launched in three days, then tuned every day after.',
    deliverables: [['Channel strategy', 'The right mix of Google, Meta and TikTok for your market, with a clear budget split.'], ['Campaign build', 'Account structure, audiences, keywords and offers set up properly from the start.'], ['Ad creative', 'Static, carousel and short video ads, with multiple hooks to test.'], ['Conversion tracking', 'Pixels, call tracking and form tracking so every lead is counted.'], ['Daily optimisation', 'Bids, budgets and creative rotated daily toward what is working.'], ['Weekly report', 'Spend, leads, cost per lead and what we are testing next.']],
    timeline: [['Day 0', 'Brief and account access'], ['24 hours', 'Strategy, audiences and first creative'], ['72 hours', 'Campaigns live and tracked'], ['Ongoing', 'Daily tuning, weekly reports']],
    metrics: ['Cost per lead', 'Return on ad spend', 'Conversion rate', 'Booked appointments'],
    faqs: [
      { q: 'What budget do I need?', a: 'We work with ad budgets from around $1,000 a month and recommend a split based on your goals and market.' },
      { q: 'Do I keep my ad accounts?', a: 'Yes. Everything is built in accounts you own, and you keep full access at all times.' },
      { q: 'How soon will I see results?', a: 'Data starts flowing on day one. Most clients see a stable cost per lead within two to three weeks.' },
    ],
  },
  {
    slug: 'social-content', name: 'Social content', short: 'social', speed: 'Weekly', speedLong: 'Weekly cadence',
    card: 'Scroll-stopping posts and reels in your voice, planned and published on schedule.',
    blurb: 'Posts and reels in your voice, planned and published on schedule.',
    h1: 'A feed that never goes quiet.',
    intro: 'Posts, reels and captions in your voice, planned a month ahead and published on schedule, so you stay visible without lifting a finger.',
    deliverables: [['Content strategy', 'Pillars, formats and posting rhythm built around your customers.'], ['Monthly calendar', 'A full month of content planned and shared ahead of time.'], ['Post design and copy', 'On-brand graphics and captions written in your voice.'], ['Reels and short-form', 'Edited vertical video made for reach.'], ['Scheduling', 'Everything published at the right time on every platform.'], ['Community management', 'Comments and messages monitored and answered.']],
    timeline: [['Day 0', 'Brand voice and goals'], ['48 hours', 'First month planned'], ['72 hours', 'First posts live'], ['Ongoing', 'Weekly publishing, monthly review']],
    metrics: ['Reach', 'Engagement rate', 'Profile visits', 'Enquiries from social'],
    faqs: [
      { q: 'Which platforms do you cover?', a: 'Instagram, Facebook, TikTok and LinkedIn. We focus on where your customers actually spend time.' },
      { q: 'Do I approve posts?', a: 'Yes. You see the calendar ahead of time and can approve or request changes in one click.' },
      { q: 'Can you use our own photos?', a: 'Absolutely. Send what you have and we build around it, filling the gaps with design and video.' },
    ],
  },
  {
    slug: 'seo', name: 'SEO', short: 'SEO', speed: 'Compounding', speedLong: 'Compounding results',
    card: 'Local search, Google Business Profile and content that puts you on the map and keeps you there.',
    blurb: 'Local search and content that put you on the map and keep you there.',
    h1: 'Show up when they search.',
    intro: 'Local SEO, technical fixes and search-ready content that put you on the map for the searches that matter, and keep you there.',
    deliverables: [['SEO audit', 'A full review of your site, rankings and competitors, with a keyword map.'], ['Google Business Profile', 'Categories, services, photos and posts optimised for the map pack.'], ['Technical fixes', 'Speed, indexing, schema and mobile issues resolved.'], ['Local citations', 'Consistent listings across the directories that matter.'], ['Search content', 'Monthly pages and articles targeting the terms your customers use.'], ['Rank tracking', 'Rankings, traffic and calls from search tracked every week.']],
    timeline: [['Day 0', 'Audit and access'], ['72 hours', 'Quick wins fixed'], ['30 days', 'Content and citations rolling'], ['Ongoing', 'Monthly ranking reports']],
    metrics: ['Map pack rankings', 'Organic traffic', 'Calls from search', 'Direction requests'],
    faqs: [
      { q: 'How long does SEO take?', a: 'Technical quick wins land in days. Meaningful ranking gains usually build over two to four months.' },
      { q: 'Do you guarantee number one rankings?', a: 'No one honestly can. We guarantee the work, the reporting and steady movement on the terms that bring in customers.' },
      { q: 'Is local SEO different?', a: 'Yes. It focuses on Google Maps, reviews and location signals, and is usually the fastest win for local businesses.' },
    ],
  },
  {
    slug: 'web-design', name: 'Web design & dev', short: 'web design', speed: '1–2 weeks', speedLong: 'Live in 1–2 weeks',
    card: 'Fast, mobile-first sites and landing pages designed for one job: the enquiry.',
    blurb: 'Fast, mobile-first sites built for one job: the enquiry.',
    h1: 'Sites that turn visits into calls.',
    intro: 'Fast, mobile-first websites and landing pages designed around one job: getting the enquiry. Built, tested and launched in days.',
    deliverables: [['Conversion plan', 'Sitemap and page structure built around how your customers decide.'], ['Custom design', 'A distinctive design that fits your brand, not a template.'], ['Copywriting', 'Clear, persuasive copy for every page.'], ['Responsive build', 'Fast on every device, with clean code and accessibility built in.'], ['Forms and booking', 'Contact forms, booking tools and call tracking connected.'], ['Hosting and care', 'Hosting, SSL, backups and updates handled.']],
    timeline: [['Day 0', 'Brief and content gathering'], ['72 hours', 'Homepage design for review'], ['Week 1', 'Full build'], ['Week 2', 'Launch and testing']],
    metrics: ['Conversion rate', 'Page speed score', 'Form submissions', 'Calls from site'],
    faqs: [
      { q: 'Can I edit the site myself?', a: 'Yes. We build on platforms that are easy to update, and show you how.' },
      { q: 'What about hosting?', a: 'We handle hosting, SSL, backups and updates on a simple monthly plan.' },
      { q: 'Do you redesign existing sites?', a: 'Often. We keep what works, fix what does not and migrate content without losing your rankings.' },
    ],
  },
  {
    slug: 'branding', name: 'Branding', short: 'branding', speed: '1–2 weeks', speedLong: 'Delivered in 1–2 weeks',
    card: 'Identity, voice and visual system that make you look like the category leader.',
    blurb: 'Identity and voice that make you look like the category leader.',
    h1: 'Look like the obvious choice.',
    intro: 'Logo, identity and voice that make a local business look like the leader in its category, delivered in days and ready to use everywhere.',
    deliverables: [['Brand strategy', 'Positioning, audience and what makes you different, written down.'], ['Logo suite', 'Primary logo, marks and variations for every use.'], ['Colour and type', 'A palette and type system that works on screen and in print.'], ['Tone of voice', 'How your brand sounds, with examples to follow.'], ['Templates', 'Social, signage and stationery templates ready to use.'], ['Brand guidelines', 'One document that keeps everything consistent.']],
    timeline: [['Day 0', 'Brand workshop call'], ['72 hours', 'Three initial directions'], ['Week 1', 'Refined identity'], ['Week 2', 'Full toolkit delivered']],
    metrics: ['Brand recall', 'Enquiry quality', 'Social engagement', 'Consistency across channels'],
    faqs: [
      { q: 'How many logo options do I get?', a: 'Three distinct directions, then refinement rounds on the one you choose.' },
      { q: 'Do I own the files?', a: 'Yes. Full ownership, and every file format you need.' },
      { q: 'Can you refresh rather than rebrand?', a: 'Yes. Many clients need a sharper version of what they already have, not a new name.' },
    ],
  },
  {
    slug: 'email-crm', name: 'Email & CRM', short: 'email & CRM', speed: 'Always on', speedLong: 'Always on',
    card: 'Welcome flows, reminders and win-backs that turn one-time buyers into regulars.',
    blurb: 'Flows that turn first-time buyers into regulars.',
    h1: 'Follow-up that never forgets.',
    intro: 'Welcome flows, reminders and win-back sequences that turn first-time buyers into regulars, running quietly in the background.',
    deliverables: [['CRM setup', 'Your customer list organised, cleaned and connected.'], ['Welcome sequence', 'A warm introduction that turns new subscribers into customers.'], ['Booking reminders', 'Automatic reminders that cut no-shows.'], ['Review requests', 'Timed asks that build your reputation on autopilot.'], ['Win-back flows', 'Messages that bring lapsed customers back.'], ['Monthly campaigns', 'Newsletters and offers written and sent for you.']],
    timeline: [['Day 0', 'Tools and list audit'], ['72 hours', 'Welcome flow live'], ['Week 2', 'Reminder and review flows'], ['Ongoing', 'Monthly campaigns']],
    metrics: ['Open rate', 'Click rate', 'Repeat bookings', 'Revenue per subscriber'],
    faqs: [
      { q: 'Which platform do you use?', a: 'We work with Klaviyo, Mailchimp, HubSpot and most booking systems. If you have none, we set one up.' },
      { q: 'Will it feel spammy?', a: 'No. Every flow is triggered by real customer behaviour, so messages arrive when they are useful.' },
      { q: 'Do you do SMS too?', a: 'Yes. Appointment reminders and offers by SMS work well alongside email.' },
    ],
  },
  {
    slug: 'video', name: 'Video', short: 'video', speed: 'Live in 72h', speedLong: 'First cuts in 72 hours',
    card: 'Ad creative and short-form cut for every platform, built to convert.',
    blurb: 'Ad creative and short-form cut for every platform.',
    h1: 'Short-form that sells.',
    intro: 'Ad creative, reels and explainers made fast, cut for every platform and built to stop the scroll and drive action.',
    deliverables: [['Concepts and scripts', 'Ideas and hooks written around a single goal.'], ['Ad variations', 'Multiple hooks and lengths so we can test what performs.'], ['Reels and TikToks', 'Native-feeling vertical content made for reach.'], ['Explainer videos', 'Clear, short videos that show what you do.'], ['Captions', 'Subtitles on everything, because most people watch on mute.'], ['Platform cuts', 'Vertical, square and landscape versions for every placement.']],
    timeline: [['Day 0', 'Brief and assets'], ['24 hours', 'Scripts and concepts'], ['72 hours', 'First cuts delivered'], ['Ongoing', 'Fresh creative monthly']],
    metrics: ['Thumb-stop rate', 'View-through rate', 'Click-through rate', 'Cost per result'],
    faqs: [
      { q: 'Do you film on site?', a: 'We can, or we build videos from your existing footage, photos and product shots.' },
      { q: 'How many variations do I get?', a: 'Ad packages include multiple hooks and lengths so we can test what performs.' },
      { q: 'Which formats?', a: 'Vertical, square and landscape, cut for Reels, TikTok, Stories, YouTube and your website.' },
    ],
  },
  {
    slug: 'analytics', name: 'Analytics', short: 'analytics', speed: 'Day one', speedLong: 'Live dashboard on day one',
    card: 'Proper tracking, a live dashboard and plain-English weekly reports.',
    blurb: 'Proper tracking, a live dashboard and weekly reports.',
    h1: 'Know exactly what works.',
    intro: 'Proper tracking, a live dashboard and plain-English weekly reports. Every dollar and every lead, accounted for.',
    deliverables: [['Tracking audit', 'A full check of what is and is not being measured today.'], ['GA4 and tag setup', 'Analytics and tags configured correctly.'], ['Call and form tracking', 'Every phone call and enquiry attributed to its source.'], ['Live dashboard', 'Your key numbers, updated continuously, on any device.'], ['Weekly reports', 'What happened, why, and what we are doing next.'], ['Quarterly review', 'A strategy session to plan the next three months.']],
    timeline: [['Day 0', 'Audit existing tracking'], ['48 hours', 'Tracking fixed and verified'], ['72 hours', 'Live dashboard'], ['Ongoing', 'Weekly reports']],
    metrics: ['Cost per lead', 'Lead source', 'Customer lifetime value', 'Return on spend'],
    faqs: [
      { q: 'I already have Google Analytics. Why change?', a: 'Most setups miss calls, forms or bookings. We audit, fix and connect everything so the numbers are real.' },
      { q: 'Can I see results any time?', a: 'Yes. Your live dashboard updates continuously and works on any device.' },
      { q: 'Do you report on other agencies’ work?', a: 'Yes. We can track every channel you run, whoever manages it.' },
    ],
  },
];

export const combos = [
  { tag: 'Launch kit', title: 'New business, new offer, new location.', body: 'Everything you need to open with a bang: a brand that looks established, a site that converts and ads that bring the first customers in.', items: ['Branding', 'Web design', 'Paid ads'] },
  { tag: 'Always-on growth', title: 'Steady leads, every single week.', body: 'Paid and organic working together, with follow-up that brings customers back and reporting that shows exactly what is working.', items: ['Paid ads', 'Social', 'Email & CRM', 'Analytics'] },
  { tag: 'Local leader', title: 'Own your area on Google.', body: 'Rank in the map pack, turn searches into calls and build the reviews that keep you on top.', items: ['SEO', 'Web design', 'Email & CRM'] },
];

// Process: short version on the home page, full version on /process/.
export const steps = [
  {
    title: 'Brief', time: '15 minutes', short: 'Send the form or call, any hour. One conversation captures everything.',
    body: 'Send the quote form or call us, any hour of the day. One focused conversation captures your goals, budget, audience and deadlines. No discovery workshops, no week-long back and forth.',
    happens: ['We ask the right questions, once', 'We review your current channels and competitors', 'You receive a fixed quote within the hour'], get: ['Fixed quote', 'Clear scope'], yours: '15 minutes',
  },
  {
    title: 'Plan', time: 'Within 24h', short: 'Strategy, channel mix, budget and first creative, ready to approve.',
    body: 'Your strategy lands in your inbox the next day. It covers the channel mix, budget split, messaging and first creative concepts, all in one document you can approve in a single reply.',
    happens: ['Channel and budget strategy', 'Audience and keyword research', 'First creative concepts'], get: ['Strategy document', 'Creative concepts'], yours: 'One approval',
  },
  {
    title: 'Launch', time: 'Within 72h', short: 'Ads, pages and content go live, tracked from the first click.',
    body: 'Ads, pages and content go live across every channel, with tracking in place from the first click. You get your live dashboard the same day.',
    happens: ['Campaigns built and published', 'Tracking verified end to end', 'Dashboard connected'], get: ['Live campaigns', 'Live dashboard'], yours: 'None',
  },
  {
    title: 'Grow', time: 'Every hour after', short: 'Constant testing and reallocation, with a weekly report on what moved.',
    body: 'This is where most agencies slow down and we speed up. We test, adjust and reallocate continuously, and send a clear weekly report on what moved and what is next.',
    happens: ['Daily optimisation', 'New creative tested every week', 'Budget moved to what is working'], get: ['Weekly report', 'Monthly strategy call'], yours: 'Five minutes a week',
  },
];

export const never = [
  { v: '24/7', l: 'Phone line answered, every day of the year' },
  { v: '1 hour', l: 'From brief to fixed quote' },
  { v: 'Same day', l: 'Changes and edits turned around' },
  { v: 'Weekly', l: 'Plain-English reports, without asking' },
];

export const principles = [
  { t: 'No hand-offs', b: 'The same team plans, builds and runs your work, so nothing gets lost between departments.' },
  { t: 'Systems, not heroics', b: 'Templates, tracking and approvals are built once and reused, which is why every launch is fast.' },
  { t: 'Launch, then learn', b: 'Real data from a live campaign beats any forecast. We ship a strong first version and improve from there.' },
];

// Home page
export const industries = ['Dental clinics', 'Cafés', 'Gyms', 'Trades', 'Salons', 'Real estate', 'Restaurants', 'Physios', 'Retail', 'Law firms'];

export const statement =
  'Most agencies spend six weeks planning. We spend six minutes understanding your goal, seventy-two hours launching, and every hour after that making it perform better.';

// The hero dashboard is an illustration of the reporting clients get, not live data.
export const dashboard = {
  client: 'northside-dental',
  feed: [
    ['Meta campaign "Winter whitening" went live', '#7D96FF'], ['New lead · Sarah M. · Invisalign enquiry', '#7EE2A8'], ['Budget shifted +18% to top ad set', '#E8C77E'],
    ['Landing page v4 deployed · +11% conv.', '#7D96FF'], ['Inbound call answered · booking made', '#7EE2A8'], ['Google Ads keyword bids adjusted', '#E8C77E'],
    ['3 reels scheduled for this week', '#7D96FF'], ['New lead · James T. · check-up', '#7EE2A8'], ['Review request email sent to 42 patients', '#E8C77E'],
  ] as [string, string][],
};

// Case studies: replace the placeholders with real, verifiable client results before launch.
export const work = [
  { image: 'blank-digital/work-1', tag: 'Client · Industry', time: 'Live in 3 days', title: 'Project headline goes here', stats: [{ v: '0×', l: 'Result one' }, { v: '0%', l: 'Result two' }, { v: '$0', l: 'Result three' }] },
  { image: 'blank-digital/work-2', tag: 'Client · Industry', time: 'Live in 5 days', title: 'Project headline goes here', stats: [{ v: '0×', l: 'Result one' }, { v: '0%', l: 'Result two' }, { v: '$0', l: 'Result three' }] },
];

export const why = [
  { title: 'Fast', body: 'No hand-offs or bottlenecks. Work starts the moment you say go.' },
  { title: 'Always on', body: 'Calls answered and campaigns watched 24/7, weekends included.' },
  { title: 'Accountable', body: 'Live dashboards and weekly reports. Every dollar tracked.' },
];

export const faqs = [
  { q: 'How fast can you really launch?', a: 'Most ad campaigns, landing pages and content plans go live within 72 hours of your brief. Full websites and brand identities take one to two weeks.' },
  { q: 'What does it cost?', a: 'You get a fixed quote within the hour. Ongoing work runs on a flat monthly plan with no lock-in.' },
  { q: 'Who will I be dealing with?', a: 'A dedicated account lead who knows your business, plus a phone line answered any time, day or night.' },
  { q: 'Do I need to sign a long contract?', a: 'No. Plans roll month to month. We keep clients with results, not paperwork.' },
  { q: 'We are a small local business. Is this for us?', a: 'That is exactly who BLANK is built for. Clinics, cafés, trades, gyms, salons and retailers.' },
];

export const quote = {
  services: services.map((s) => s.name),
  budgets: ['Under $2k', '$2k – $5k', '$5k – $10k', '$10k +'],
  timings: ['ASAP', 'This month', 'Next 3 months', 'Just exploring'],
};

// Insights
export type Post = { slug: string; cat: string; read: string; title: string; excerpt: string; date: string; sections: [string, string][] };

export const postCats = ['All', 'SEO', 'Paid ads', 'Web', 'Social', 'Email', 'Strategy'];

export const posts: Post[] = [
  {
    slug: 'local-seo-72-hours', cat: 'SEO', read: '6 min read', date: '2026-10-01', title: 'The 72-hour local SEO checklist',
    excerpt: 'Seven fixes that move a local business up the map pack in three days, no new content required.',
    sections: [
      ['Start with your Google Business Profile', 'For most local searches, your Business Profile is the first thing people see. Make sure your primary category is specific, your hours are accurate and every service you offer is listed. Add at least ten recent, real photos.'],
      ['Fix the basics on your site', 'Your business name, address and phone number should match your profile exactly, on every page. Add LocalBusiness schema, compress large images and make sure the site loads in under three seconds on mobile.'],
      ['Ask for reviews, systematically', 'Review count and recency are strong ranking signals. Send a short review request after every job with a direct link, and reply to every review, good or bad, within a day.'],
    ],
  },
  {
    slug: 'meta-ads-small-budget', cat: 'Paid ads', read: '5 min read', date: '2026-10-01', title: 'Running Meta ads on under $2k a month',
    excerpt: 'Small budgets need tighter structure, fewer campaigns and faster decisions. Here is the setup we use.',
    sections: [
      ['One campaign, not five', 'Splitting a small budget across many campaigns starves each one of data. Start with a single conversion campaign and two or three ad sets at most.'],
      ['Let creative do the targeting', 'Broad audiences paired with strong, specific creative often outperform narrow interest targeting. Test three hooks at once and keep the winner.'],
      ['Judge on cost per lead, not clicks', 'Clicks are cheap and misleading. Set up proper conversion tracking from day one and make every decision against cost per lead or cost per booking.'],
    ],
  },
  {
    slug: 'landing-page-one-job', cat: 'Web', read: '4 min read', date: '2026-10-01', title: 'Why your landing page should do one job',
    excerpt: 'Every extra link is an exit. The highest-converting pages ask visitors to do exactly one thing.',
    sections: [
      ['Remove the menu', 'A landing page is not your homepage. Strip the navigation and keep visitors focused on a single action: call, book or enquire.'],
      ['Say the offer in five seconds', 'Your headline should state what you offer and who it is for. If a visitor has to scroll to understand it, most of them are already gone.'],
      ['Make the action obvious', 'One button style and one form, repeated down the page. Fewer fields mean more submissions, so ask only for what you need to follow up.'],
    ],
  },
  {
    slug: 'reels-that-sell', cat: 'Social', read: '5 min read', date: '2026-10-01', title: 'Short-form video that actually sells',
    excerpt: 'Views are easy. Enquiries are harder. What separates reels that entertain from reels that convert.',
    sections: [
      ['Hook in the first second', 'Open with the result, the problem or a bold claim. The first frame decides whether anyone watches the rest.'],
      ['Show the work', 'Before-and-after clips, behind the scenes and real customers beat polished brand films for local businesses. People buy what they can picture.'],
      ['End with one clear step', 'Tell viewers exactly what to do next: book, call or tap the link. A reel without a call to action is just content.'],
    ],
  },
  {
    slug: 'speed-is-strategy', cat: 'Strategy', read: '4 min read', date: '2026-10-01', title: 'Speed is a strategy',
    excerpt: 'Why the business that launches first usually wins, and how to move faster without cutting corners.',
    sections: [
      ['The cost of waiting', 'Every week spent planning is a week a competitor collects the customers you wanted. Most marketing decisions are reversible, so treat them that way.'],
      ['Launch, then learn', 'Real data from a live campaign beats any amount of forecasting. Launch a solid first version quickly and let the results guide the next move.'],
      ['Build systems, not one-offs', 'Speed comes from repeatable processes: templates, tracking and clear approval steps. Build them once and every launch after gets faster.'],
    ],
  },
  {
    slug: 'email-win-back', cat: 'Email', read: '5 min read', date: '2026-10-01', title: 'The win-back flow every local business needs',
    excerpt: 'Three emails that bring lapsed customers back, set up once and running for good.',
    sections: [
      ['Define what lapsed means', 'Pick a window that fits your business. For a café it might be 30 days; for a dentist, seven months. That window becomes your trigger.'],
      ['Three messages, spaced out', 'Start with a friendly check-in, follow with a reason to return and finish with a time-limited offer. Space them about a week apart.'],
      ['Measure returns, not opens', 'Track how many customers book or buy again after the flow. That is the only number that matters.'],
    ],
  },
];

// Legal (sample text: have a lawyer review it for the client's jurisdiction before launch)
export const legal = {
  updated: '30 Oct 2026',
  privacy: {
    title: 'Privacy policy',
    intro: 'This policy explains what personal information BLANK Digital collects, how we use it and the choices you have.',
    sections: [
      ['Information we collect', 'Details you give us when you request a quote, call, email or subscribe, such as your name, business name, email, phone number and project details. We also collect basic usage data from our website through cookies and analytics tools.'],
      ['How we use it', 'To respond to enquiries, prepare quotes, deliver and improve our services, send updates you have asked for and meet our legal obligations.'],
      ['Calls and messages', 'Calls, messages and form submissions may be recorded and processed by automated systems to route, transcribe and respond to your request, and to improve service quality.'],
      ['Sharing', 'We do not sell your information. We share it only with service providers who help us operate, such as hosting, email and analytics providers, under appropriate agreements, or where required by law.'],
      ['Retention and security', 'We keep personal information only as long as needed for the purposes above and protect it with reasonable technical and organisational measures.'],
      ['Your rights', 'Depending on where you live, you may have the right to access, correct, delete or export your information, or to object to certain processing. Contact us to make a request.'],
    ] as [string, string][],
  },
  terms: {
    title: 'Terms of service',
    intro: 'These terms govern your use of the BLANK Digital website and the services we provide. Project-specific terms in your quote or agreement take precedence.',
    sections: [
      ['Services', 'We provide the marketing services described in your quote. Scope, deliverables and timelines are confirmed in writing before work begins.'],
      ['Quotes and payment', 'Quotes are fixed for the agreed scope and valid for 30 days. Monthly plans are billed in advance. Ad spend is billed separately or paid directly by you to the platform.'],
      ['Your content and approvals', 'You confirm you have the rights to any material you provide. Timelines depend on timely access, information and approvals from you.'],
      ['Ownership', 'Once paid in full, you own the final deliverables created for you. We may show non-confidential work in our portfolio unless you ask us not to.'],
      ['Cancellation', 'Monthly plans roll month to month and can be cancelled with 30 days notice. Fixed projects can be cancelled at any time; completed work is billed.'],
      ['Liability', 'We work to agreed standards but cannot guarantee specific results from advertising, search or social platforms. Our total liability is limited to the fees paid in the three months before a claim.'],
    ] as [string, string][],
  },
};

export const pad2 = (n: number) => String(n).padStart(2, '0');
