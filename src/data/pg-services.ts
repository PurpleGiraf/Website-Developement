// Content for the four Purple Giraffe service pages (copy from the "Service" design).
import { PG_SITE, services, type ServiceKey } from './pg';

const cs = (slug: string) => `${PG_SITE}/case_studies/${slug}/`;

export const people = {
  lynda: { name: 'Lynda Schenk', role: 'Head Giraffe' },
  kelly: { name: 'Kelly Wagner', role: 'General Manager' },
  suba: { name: 'Suba Thiyagarajah', role: 'AI & Digital Solutions Consultant' },
  simone: { name: 'Simone Davis', role: 'Graphic Designer' },
  ariani: { name: 'Ariani Santos', role: 'Graphic Designer' },
};
type PersonKey = keyof typeof people;

export const work = {
  prdt: { client: 'Positive Response Dog Training', sector: 'Email automation', date: '2025', outcome: 'Over $135,000 in revenue from one automated sequence, after a 62% lift in open rates.', href: cs('positive-response-dog-training') },
  minge: { client: 'Minge Funerals', sector: 'Website & UX', date: '2024–25', outcome: 'A modern, functional website that reflects over 90 years of community service.', href: cs('minge-funerals') },
  rent: { client: 'Rent Busters Bunbury', sector: 'Paid social', date: '2025', outcome: 'High-quality leads through a structured Meta Ads campaign and technical fixes.', href: cs('rent-busters-bunbury') },
  ael: { client: 'Adelaide Eye & Laser Centre', sector: 'Digital product', date: '2020', outcome: 'An online eye suitability test, designed and launched for prospective patients.', href: cs('adelaide-eye-laser-centre') },
  vitalis: { client: 'Vitalis Legal', sector: 'Brand & website', date: '2024–25', outcome: 'A new identity and website, launched with a 10-year anniversary campaign.', href: cs('vitalis-legal') },
  bussa: { client: 'BusSA', sector: 'Video & web', date: '2024–26', outcome: 'Educational videos and a new website promoting bus safety to students.', href: cs('bussa') },
  langley: { client: 'Langley & Co', sector: 'Website', date: '2020', outcome: 'A refreshed website for a rural advisory firm.', href: cs('langleyandco') },
  oneills: { client: "O'Neills Sportswear", sector: 'Social media', date: 'Since 2018', outcome: 'Brand development and a growing social audience, reach and engagement.', href: cs('oneills') },
  warrina: { client: 'Warrina Homes', sector: 'Content design', date: '2025', outcome: 'Resident guides with simpler language and a clear, accessible design.', href: cs('warrina-homes') },
};
type WorkKey = keyof typeof work;

export const steps = [
  { n: '01', t: 'Discover', b: 'We learn your business, goals, customers and competitors.' },
  { n: '02', t: 'Plan', b: 'A clear strategy, scope and timeline, agreed with you.' },
  { n: '03', t: 'Create', b: 'Our specialists design, build and test, with you involved throughout.' },
  { n: '04', t: 'Grow', b: 'We launch, measure, report and keep improving.' },
];

export const palette = [
  ['#f6f2ec', '#2b1745'],
  ['#b7a6cc', '#2b1745'],
  ['#5a3a82', '#f6f2ec'],
];

interface ServiceData {
  num: string;
  t1: string;
  t2: string;
  img: 'team-laptop' | 'team';
  imgPos: string;
  intro: string;
  cta: string;
  alt?: { label: string; href: string };
  contextLabel: string;
  context: string;
  caps: [string, string][];
  work: WorkKey[];
  people: PersonKey[];
  faqs: [string, string][];
  /** Meta description (new copy). */
  meta: string;
}

export const serviceData: Record<ServiceKey, ServiceData> = {
  web: {
    num: '01', t1: 'Website', t2: 'development', img: 'team-laptop', imgPos: '50% 30%',
    intro: 'Whether you need a simple landing page, a website update, a completely new website or a complex web application, our digital team can help.',
    cta: 'Start a website project', alt: { label: 'Browse templates', href: '/templates/' },
    contextLabel: 'Why it matters',
    context: 'Your website is often the first conversation a customer has with your business. We plan and write content that improves that experience, then design, build and maintain a site that keeps working long after launch.',
    caps: [['Website strategy', 'Goals, audiences, site structure and content plan, agreed before anything is designed.'], ['Design and build', 'Custom websites and template-based builds, designed in house and developed to perform.'], ['Web applications', 'Bookings, online tools, portals and electronic business transactions.'], ['E-commerce', 'Online stores that are easy to manage and built to convert.'], ['Performance and optimisation', 'Page speed, image optimisation and the search foundations that help you get found.'], ['Management and maintenance', 'Updates, security and ongoing content changes, so your site stays current.']],
    work: ['minge', 'vitalis', 'bussa'], people: ['suba', 'ariani', 'simone'],
    faqs: [['How long does a new website take?', 'It depends on scope. A template-based site can launch in a matter of weeks; a custom build or web application takes longer. We agree a timeline with you during planning.'], ['Can you work with our existing website?', 'Yes. We regularly update, optimise and maintain existing websites as well as building new ones.'], ['Will my website be optimised for search and AI?', 'Every site we build includes SEO foundations, and we can extend that to GEO and AEO so your business can be found in AI-driven search.']],
    meta: 'Website development from Purple Giraffe: landing pages, new websites, e-commerce and web applications, planned, built and maintained by our in-house digital team.',
  },
  marketing: {
    num: '02', t1: 'Digital', t2: 'marketing', img: 'team', imgPos: '50% 30%',
    intro: 'Strategy-led digital marketing across search, social, email and paid media, measured and integrated with your overall marketing strategy.',
    cta: 'Talk to our digital team',
    contextLabel: 'Our approach',
    context: 'Posting alone doesn’t equal impact. We look at how content, timing, messaging and channels work together to guide your audience from awareness to action.',
    caps: [['Content strategy and creation', 'Engaging content aligned with your key messages, written to resonate with your target market.'], ['Social media management', 'Campaigns, social listening and community engagement across Facebook, Instagram, LinkedIn and YouTube.'], ['Paid advertising', 'Meta and Google Ads campaigns designed, executed and measured to reach the right people.'], ['SEO and Google Business Profile', 'Audits, strategy and listing management to improve your ranking and searchability.'], ['Email marketing and remarketing', 'Automations, responsive templates and targeted remarketing that bring customers back.'], ['Measuring and reporting', 'Ongoing monitoring and a quarterly report with results and recommendations.']],
    work: ['prdt', 'rent', 'oneills'], people: ['kelly', 'suba', 'ariani'],
    faqs: [['Is digital marketing suitable for small and growing businesses?', 'Yes. It is particularly valuable for businesses that don’t have the time or internal resources to manage multiple digital channels. Our support scales with your business.'], ['How do you measure success?', 'Through meaningful performance indicators, including engagement quality, audience growth and how digital channels contribute to your business objectives. Our focus is on effectiveness, not just activity.'], ['Should I use Google Ads or Meta ads?', 'Google Ads captures people already searching for what you offer, while Meta ads build awareness and demand. We recommend a mix based on your goals.']],
    meta: 'Strategy-led digital marketing from Purple Giraffe: SEO, social media, Meta and Google Ads, email and remarketing, measured and reported quarterly.',
  },
  ai: {
    num: '03', t1: 'AI', t2: 'solutions', img: 'team-laptop', imgPos: '60% 35%',
    intro: 'Practical, human-focused AI for your business, from making sure AI tools can find you to the workflows that save your team time.',
    cta: 'Talk to Suba', alt: { label: 'AI Visibility Review', href: '/ai-visibility-review/' },
    contextLabel: 'How we use AI',
    context: 'We use AI to enhance our research, accelerate insights and improve outcomes, and we pass those time savings on to you. The real value comes from our experienced team, who apply critical thinking, creativity and industry expertise to every project.',
    caps: [['AI visibility', 'SEO, GEO and AEO, so tools like ChatGPT, Gemini and Perplexity can find, understand and recommend your business.'], ['AI implementation', 'Choosing and setting up the right AI tools for your business, responsibly.'], ['Workflow automation', 'Automated sequences and processes that free up your team for higher-value work.'], ['Content systems', 'AI-assisted content processes with human review, keeping your brand voice consistent.'], ['Team upskilling', 'Training and mentoring so your people can use AI confidently and effectively.'], ['Systems improvement', 'Simplifying the tools and systems that keep your business running smoothly.']],
    work: ['prdt'], people: ['suba', 'kelly', 'lynda'],
    faqs: [["What's the difference between SEO, AEO and GEO?", 'SEO helps search engines understand and rank your website. GEO supports your visibility in generative AI results. AEO focuses on how well your website answers the questions customers are asking.'], ['Will AI replace the people working on my account?', 'No. We use AI to work faster and smarter, but strategy, creativity and judgement come from our team.'], ['Where should we start with AI?', 'Our AI Visibility Review is a practical first step. It shows what AI tools currently know about your business and where to focus.']],
    meta: 'Practical AI solutions from Purple Giraffe: AI visibility (SEO, GEO and AEO), AI implementation, workflow automation and team upskilling.',
  },
  ux: {
    num: '04', t1: 'UI/UX', t2: 'design', img: 'team-laptop', imgPos: '50% 60%',
    intro: 'Interfaces and customer journeys designed around the people who use them, so every website and digital product is clear, accessible and easy to use.',
    cta: 'Start a design project',
    contextLabel: 'Design that works',
    context: 'Good design is how customers decide whether to trust you. We combine strategy, research and craft to create digital experiences that look right and work even better.',
    caps: [['Research and discovery', 'Understanding your customers, their needs and where your current experience lets them down.'], ['Customer journeys', 'Mapping the path from first visit to enquiry, booking or purchase.'], ['Wireframes and prototypes', 'Testing structure and flow early, before anything is built.'], ['Interface design', 'Polished, on-brand screens for websites, apps and online tools.'], ['Accessibility', 'Clear language, readable layouts and inclusive design for every user.'], ['Design systems', 'Reusable components and guidelines that keep your brand consistent across every touchpoint.']],
    work: ['ael', 'minge', 'warrina'], people: ['ariani', 'simone', 'suba'],
    faqs: [['What is the difference between UI and UX?', 'UX (user experience) is how a product works and feels to use. UI (user interface) is how it looks. We design both together.'], ['Can you redesign part of our website rather than all of it?', 'Yes. We often start with the pages or journeys that matter most, such as enquiry or booking flows.'], ['Do you design for accessibility?', 'Yes. Accessible, easy-to-read design is part of every project.']],
    meta: 'UI/UX design from Purple Giraffe: research, customer journeys, prototypes, interface design and accessible design systems for websites and digital products.',
  },
};

export const slugOf = (key: ServiceKey) => services.find((s) => s.key === key)!.href.split('/').filter(Boolean).pop()!;
export const resolveWork = (keys: WorkKey[]) => keys.map((k, i) => ({ ...work[k], bg: palette[i % 3][0], fg: palette[i % 3][1] }));
export const resolvePeople = (keys: PersonKey[]) => keys.map((k) => ({ key: k, ...people[k] }));
