// About page content (from the redesign proposal's About page; bios and photos from purplegiraffe.com.au/our-team).
import type { ImageMetadata } from 'astro';
import lynda from '../assets/pg/team/lynda.png';
import kelly from '../assets/pg/team/kelly.png';
import suba from '../assets/pg/team/suba.jpg';
import simone from '../assets/pg/team/simone.jpg';
import ariani from '../assets/pg/team/ariani.png';
import coco from '../assets/pg/team/coco.jpg';

export interface Person {
  id: string;
  name: string;
  role: string;
  photo?: ImageMetadata;
  isAI?: boolean;
  phone?: string;
  email?: string;
  bio: string[];
}

export const team: Person[] = [
  { id: 'lynda', name: 'Lynda Schenk', role: 'Head Giraffe', photo: lynda, phone: '08 8425 2970 (ext. 1)', email: 'lynda@purplegiraffe.com.au',
    bio: ['For almost three decades, Lynda has worked across a diverse range of industries including wine, hospitality, transport, medical devices, construction and not-for-profit. She has a deep understanding of the marketing needs of companies, small and large.', 'Lynda has a natural ability to talk to people, understand their business and objectives, and work with them on plans and strategies that build brand equity, growth and profitability.', "She is the 2018 Wine Marketer of the Year, a 2019 Telstra Business Women's Awards finalist, and a finalist in the 2023 and 2024 Australian Small Business Champion Awards."] },
  { id: 'kelly', name: 'Kelly Wagner', role: 'General Manager', photo: kelly, phone: '08 8425 2970 (ext. 2)',
    bio: ['Kelly has set up and managed both eCommerce and services businesses herself, and brings qualifications and experience as a business coach and mentor.', 'She has senior leadership experience across the private and public sector, including business development, sales and marketing, project management and strategic planning, and has mastered building and managing multiple social media platforms within a single campaign.'] },
  { id: 'suba', name: 'Suba Thiyagarajah', role: 'AI & Digital Solutions Consultant', photo: suba, phone: '08 8425 2970 (ext. 108)',
    bio: ['Suba brings over eight years of experience across digital project management, operations and AI. He has built and scaled delivery teams across the UK, Sri Lanka and Australia, with depth in the health and medical sector.', 'At Purple Giraffe, Suba leads the way on AI and digital solutions for both the team and our clients, turning complex challenges into simple, practical solutions, whether that is implementing AI, delivering website projects or improving systems.', 'He once restored a 35-year-old classic motorbike from the ground up and rode it the length of Sri Lanka.'] },
  { id: 'simone', name: 'Simone Davis', role: 'Graphic Designer', photo: simone, phone: '08 8425 2970 (ext. 117)',
    bio: ['Our quiet achiever, Simone loves designing everything and anything. She has been creating down-to-earth, professional visual communication, advertising and photography for over 17 years.', 'Her work spans logos, style guides, packaging, platform templates, social media collateral, brochures and merchandise.'] },
  { id: 'ariani', name: 'Ariani Santos', role: 'Graphic Designer', photo: ariani, phone: '08 8425 2970 (ext. 115)',
    bio: ['With over a decade of experience in marketing and a degree in Communications – Advertising, Ari brings a strong blend of strategy, creativity and design to the team.', 'She is passionate about crafting meaningful customer journeys through graphic and web design, digital marketing, social media, EDMs and paid campaigns.', "Outside work, you'll find her painting, doing pottery or jumping out of planes."] },
  { id: 'ai', name: 'Claude, ChatGPT & Grok', role: 'Catalysts', isAI: true,
    bio: ['Our AI catalysts help the team research faster, surface insights sooner and get to a first draft quicker.', 'They never work alone. Every output is reviewed, shaped and signed off by a person on our team, applying the critical thinking, creativity and industry expertise that clients rely on.'] },
  { id: 'coco', name: 'Coco Schenk', role: 'Wellness Consultant', photo: coco,
    bio: ['Coco is the youngest member of our Tower, with extensive experience in sitting, fetching, cuddling, barking at delivery people and rolling over for belly rubs.', 'She is usually first to greet newcomers, and is always available when the team needs cheering up.'] },
];

export const values = [
  { l: 'W', t: 'We genuinely care' },
  { l: 'I', t: 'Integrity' },
  { l: 'S', t: 'Solutions focused' },
  { l: 'S', t: 'Stay tuned' },
  { l: 'H', t: 'Have fun' },
];

export const awards = [
  { year: '2025', title: "Founder's Family Business Award", org: 'Family Business Excellence Awards' },
  { year: '2025', title: 'Runner-Up, Business & Professional Services', org: 'Fremantle Chamber of Commerce' },
  { year: '2023 & 2024', title: 'Finalist, Marketing Services', org: 'Australian Small Business Champion Awards' },
  { year: '2019', title: 'South Australian Finalist', org: "Telstra Business Women's Awards" },
  { year: '2018', title: 'Marketer of the Year', org: 'Australian Women in Wine Awards' },
];
