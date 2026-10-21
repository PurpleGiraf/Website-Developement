// Detail-page content for every service, keyed by the service name in data.ts.
// Clinical Pilates reuses the copy from the original design file; the others follow the same structure.
// Image names (src/assets/images/health/...): Clinical Pilates uses detail-pilates; the remaining
// services use detail-2 to detail-6 in the order they appear in data.ts (see docs/image-shotlist.md).
import { whoFor, pilatesFees, pilatesFaqs } from './data';
import { base } from './config';

export interface ServiceDetail {
  slug: string;
  name: string;
  /** Page heading (service + suburb keyword). */
  h1: string;
  intro: string;
  /** Short pill beside the main button. */
  pill: string;
  cta: string;
  image: string;
  imageLabel: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  whoTitle: string;
  whoFor: { title: string; body: string }[];
  /** What happens in a session (not used for Clinical Pilates, matching the original design). */
  session?: { title: string; body: string }[];
  fees: { name: string; price: string; note: string }[];
  feesNote?: string;
  faqs: { q: string; a: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  Physiotherapy: {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    h1: 'Physiotherapy in Norwood',
    intro: 'A thorough assessment, hands-on treatment where it helps, and a clear plan you can follow at home. Initial appointments are 45 minutes, so there is time to understand what is going on.',
    pill: 'No referral needed',
    cta: 'Book an appointment',
    image: 'health/detail-2',
    imageLabel: 'photo, physio assessing a knee',
    imageAlt: 'Physiotherapist assessing a patient’s knee movement on a treatment table',
    metaTitle: 'Physiotherapy in Norwood, Adelaide',
    metaDescription: 'Physiotherapy on The Parade, Norwood. 45-minute initial consults, hands-on treatment and a clear rehab plan. No referral needed, health fund rebates via HICAPS.',
    whoTitle: 'Who it’s for',
    whoFor: [
      { title: 'Back and neck pain', body: 'Recent or long-standing pain that is getting in the way of work, sleep or exercise.' },
      { title: 'Joint and muscle injuries', body: 'Sprains, strains, and knee, hip or shoulder pain, whether it started suddenly or crept up.' },
      { title: 'After surgery', body: 'Rehab after joint replacements, arthroscopy, fractures or spinal surgery, working alongside your surgeon’s protocol.' },
      { title: 'Headaches and jaw pain', body: 'Assessment of neck-related headaches and jaw (TMJ) problems.' },
    ],
    session: [
      { title: 'Talk it through', body: 'We ask about your history, what makes things better or worse, and what you want to get back to.' },
      { title: 'Assess', body: 'We look at how you move, test strength and joint range, and screen for anything that needs a GP or specialist.' },
      { title: 'Treat', body: 'Hands-on treatment, exercise or education, depending on what your assessment shows.' },
      { title: 'Plan', body: 'You leave with a few exercises, an explanation of what is going on and an honest estimate of how many sessions may help.' },
    ],
    fees: [
      { name: 'Initial consultation', price: '$110', note: '45 min' },
      { name: 'Follow-up', price: '$95', note: '30 min' },
      { name: 'Extended follow-up', price: '$130', note: '45 min · complex or multiple areas' },
    ],
    feesNote: 'Claimable with private health extras. Medicare rebates apply under a GP Chronic Condition Management Plan.',
    faqs: [
      { q: 'Do I need a referral for physiotherapy?', a: 'No. You can book directly. A referral is only needed if you are claiming through Medicare, NDIS, DVA or ReturnToWorkSA.' },
      { q: 'How long is a physio appointment?', a: 'Initial consultations are 45 minutes and follow-ups are 30 minutes. We don’t double-book, so the time is yours.' },
      { q: 'Will I get exercises to do at home?', a: 'Usually, yes. We keep it to a small number of exercises you can realistically do, and send them to your phone with videos.' },
    ],
  },

  'Clinical Pilates': {
    slug: 'clinical-pilates',
    name: 'Clinical Pilates',
    h1: 'Clinical Pilates in Norwood',
    intro: 'Physio-led Pilates on reformers, in classes of no more than four. Every program starts with a one-on-one assessment so the exercises match your body and your goals.',
    pill: 'Health fund rebates apply',
    cta: 'Book an assessment',
    image: 'health/detail-pilates',
    imageLabel: 'photo — physio guiding reformer exercise',
    imageAlt: 'Physiotherapist guiding a patient through a Pilates reformer exercise',
    metaTitle: 'Clinical Pilates in Norwood',
    metaDescription: 'Physio-led Clinical Pilates on reformers in Norwood, Adelaide. Classes of four or fewer, a one-on-one assessment first, and health fund rebates.',
    whoTitle: 'Who it’s for',
    whoFor,
    fees: pilatesFees,
    faqs: pilatesFaqs,
  },

  'Sports injuries': {
    slug: 'sports-injuries',
    name: 'Sports injuries',
    h1: 'Sports injury physio in Norwood',
    intro: 'Treatment and rehab for runners, netballers, footy players and weekend athletes. We focus on getting you back to sport with the strength and confidence to stay there, using objective testing rather than guesswork.',
    pill: 'Return-to-sport testing',
    cta: 'Book an appointment',
    image: 'health/detail-3',
    imageLabel: 'photo, running gait analysis',
    imageAlt: 'Runner on a treadmill while a physiotherapist reviews their gait on a screen',
    metaTitle: 'Sports injury physio in Norwood, Adelaide',
    metaDescription: 'Sports physiotherapy in Norwood for running, netball and footy injuries. Rehab plans, running gait analysis and objective return-to-sport testing.',
    whoTitle: 'Who it’s for',
    whoFor: [
      { title: 'Runners', body: 'Calf, shin, knee and hip pain, plus gait analysis when training loads go up.' },
      { title: 'Court and field sports', body: 'Ankle sprains, knee injuries and hamstring strains in netball, basketball and football.' },
      { title: 'ACL and knee rehab', body: 'Structured rehab before and after surgery, with testing at each stage.' },
      { title: 'Junior athletes', body: 'Growth-related pain and injury-prevention programs for young players.' },
    ],
    session: [
      { title: 'Assess the injury', body: 'We work out what has been injured, how severely, and whether imaging or a sports doctor review is needed.' },
      { title: 'Settle symptoms', body: 'Load advice, hands-on treatment and early exercise so you can stay as active as is safe.' },
      { title: 'Rebuild', body: 'Progressive strength, power and sport-specific drills, adjusted as you improve.' },
      { title: 'Test and return', body: 'Strength, hop and agility testing so the decision to return is based on numbers, not just the calendar.' },
    ],
    fees: [
      { name: 'Initial consultation', price: '$110', note: '45 min' },
      { name: 'Follow-up', price: '$95', note: '30 min' },
      { name: 'Return-to-sport testing', price: '$150', note: '60 min · includes written report' },
    ],
    feesNote: 'Claimable with private health extras via HICAPS.',
    faqs: [
      { q: 'When should I see a physio after a sports injury?', a: 'Ideally within a few days. Early advice on load and movement can make the first weeks of recovery smoother. If you can’t bear weight, have significant swelling or a deformity, see a doctor or go to an emergency department first.' },
      { q: 'Do you do running assessments?', a: 'Yes. Our gait analysis uses slow-motion video on a treadmill, combined with a strength and movement assessment, to look at what might be contributing to pain.' },
      { q: 'How do you decide when I can return to sport?', a: 'We use a combination of time since injury, strength tests compared to your other side, hop and agility tests, and how confident you feel. Your physio will talk you through the criteria for your injury.' },
    ],
  },

  'Women’s health': {
    slug: 'womens-health',
    name: 'Women’s health',
    h1: 'Women’s health physio in Norwood',
    intro: 'Pregnancy, postnatal and pelvic floor care with a physio who has advanced training in pelvic health. Appointments are private, unhurried, and you are always in control of what happens.',
    pill: 'Private, one-on-one',
    cta: 'Book a women’s health consult',
    image: 'health/detail-4',
    imageLabel: 'photo, calm consult room',
    imageAlt: 'Calm, private consult room with a treatment table and soft natural light',
    metaTitle: 'Women’s health and pelvic floor physio, Norwood',
    metaDescription: 'Women’s health physiotherapy in Norwood for pregnancy pain, postnatal recovery and pelvic floor concerns. Private 60-minute initial consults with a pelvic health physio.',
    whoTitle: 'Who it’s for',
    whoFor: [
      { title: 'Pregnancy', body: 'Pelvic girdle pain, back pain and advice on staying active through each trimester.' },
      { title: 'After birth', body: 'A postnatal check, abdominal separation (DRAM), and a safe return to exercise.' },
      { title: 'Pelvic floor', body: 'Bladder leakage, urgency, prolapse symptoms and pelvic pain.' },
      { title: 'Menopause and beyond', body: 'Pelvic floor changes, bone health and strength training.' },
    ],
    session: [
      { title: 'A conversation first', body: 'Your first appointment starts with a detailed chat about your symptoms, history and goals.' },
      { title: 'Your choice of assessment', body: 'We explain each option, including whether an internal assessment may help. It is always optional, and you can stop at any time.' },
      { title: 'A practical plan', body: 'Pelvic floor training, exercise advice or bladder strategies that fit into daily life.' },
      { title: 'Ongoing support', body: 'Follow-ups to check progress, with referral to your GP or specialist when needed.' },
    ],
    fees: [
      { name: 'Initial consultation', price: '$140', note: '60 min' },
      { name: 'Follow-up', price: '$120', note: '45 min' },
      { name: 'Postnatal check', price: '$140', note: '60 min · from 6 weeks after birth' },
    ],
    feesNote: 'Claimable with private health extras. Medicare rebates apply under a GP Chronic Condition Management Plan.',
    faqs: [
      { q: 'Is an internal examination required?', a: 'No. It can give useful information, but it is always optional. We explain what it involves, and many people are helped without one.' },
      { q: 'When should I book a postnatal check?', a: 'Usually from six weeks after birth, once you have had your GP or obstetric check. You can see us earlier if you have pain or bladder concerns.' },
      { q: 'Can I bring my baby?', a: 'Yes. Babies are welcome, and our consult room has space for a pram.' },
    ],
  },

  'Dry needling': {
    slug: 'dry-needling',
    name: 'Dry needling',
    h1: 'Dry needling in Norwood',
    intro: 'Dry needling uses fine, single-use needles in muscle to help with pain and tension. We use it as one part of treatment, alongside exercise and hands-on care, and only when it suits you.',
    pill: 'No extra charge',
    cta: 'Book an appointment',
    image: 'health/detail-5',
    imageLabel: 'photo, treatment close-up',
    imageAlt: 'Close-up of a physiotherapist’s hands treating a patient’s shoulder',
    metaTitle: 'Dry needling in Norwood, Adelaide',
    metaDescription: 'Dry needling by trained physiotherapists in Norwood, used alongside exercise and hands-on treatment for muscle pain and tension. Included in your session fee.',
    whoTitle: 'When it may help',
    whoFor: [
      { title: 'Muscle pain and tightness', body: 'Neck, shoulder, back and hip muscles that feel tight or tender.' },
      { title: 'Tension-type headaches', body: 'When neck and upper back muscles are part of the picture.' },
      { title: 'Sports recovery', body: 'Short-term relief that can make it easier to keep training and rehab going.' },
      { title: 'Alongside exercise', body: 'Research suggests needling works best combined with an active exercise program.' },
    ],
    session: [
      { title: 'Check it suits you', body: 'We screen your health history, including pregnancy, bleeding disorders and needle anxiety.' },
      { title: 'Explain and consent', body: 'We explain what it involves and the possible side effects, and only go ahead with your agreement.' },
      { title: 'Needling', body: 'Fine sterile needles are placed for a short time. You may feel a brief twitch or ache.' },
      { title: 'Follow with movement', body: 'We usually follow with exercise, so any short-term relief is put to good use.' },
    ],
    fees: [
      { name: 'Within a physio session', price: 'Included', note: 'No extra charge' },
      { name: 'Initial consultation', price: '$110', note: '45 min' },
      { name: 'Follow-up', price: '$95', note: '30 min' },
    ],
    feesNote: 'Dry needling is part of a physiotherapy session and claimable as physiotherapy with private health extras.',
    faqs: [
      { q: 'Does dry needling hurt?', a: 'Most people feel a small prick and sometimes a brief muscle twitch or ache. Some soreness for a day or two afterwards is common.' },
      { q: 'Is dry needling the same as acupuncture?', a: 'They use similar needles but are based on different reasoning. Dry needling targets muscles and tissues identified in your physiotherapy assessment.' },
      { q: 'Are there any risks?', a: 'Common side effects are soreness and minor bruising. Serious complications are rare. Your physio will explain the risks and check it is suitable for you before starting.' },
    ],
  },

  Hydrotherapy: {
    slug: 'hydrotherapy',
    name: 'Hydrotherapy',
    h1: 'Hydrotherapy classes in Norwood',
    intro: 'Small-group exercise classes in warm water at the Norwood Swimming Centre, run by our physios. The water supports your body weight, which can make movement easier when land-based exercise is painful.',
    pill: 'Small groups',
    cta: 'Book an assessment',
    image: 'health/detail-6',
    imageLabel: 'photo, hydrotherapy pool',
    imageAlt: 'Warm indoor hydrotherapy pool with handrails and steps',
    metaTitle: 'Hydrotherapy classes in Norwood, Adelaide',
    metaDescription: 'Physio-led hydrotherapy classes at the Norwood Swimming Centre. Small groups in warm water for arthritis, back pain and rehab after surgery.',
    whoTitle: 'Who it’s for',
    whoFor: [
      { title: 'Arthritis', body: 'Gentle strengthening and range of motion with less load through sore joints.' },
      { title: 'After surgery', body: 'Early rehab after hip and knee replacements, once your wound has healed and your surgeon agrees.' },
      { title: 'Back pain', body: 'A comfortable way to rebuild movement and confidence.' },
      { title: 'Balance and confidence', body: 'Practising balance and walking where a fall is softened by water.' },
    ],
    session: [
      { title: 'Land assessment first', body: 'A one-on-one physio assessment at the clinic so we can tailor your pool program.' },
      { title: 'Warm-up', body: 'Walking and gentle movement to get used to the water.' },
      { title: 'Your program', body: 'Strength, balance and mobility exercises set by your physio, in a group of up to six.' },
      { title: 'Progress', body: 'We review regularly and help you move towards land-based or independent exercise.' },
    ],
    fees: [
      { name: 'Initial assessment', price: '$110', note: '45 min at the clinic' },
      { name: 'Group class', price: '$38', note: '45 min · up to 6 people · pool entry included' },
      { name: '8-class pass', price: '$280', note: 'Valid 3 months' },
    ],
    feesNote: 'Physio-led classes are claimable as physiotherapy with most private health extras.',
    faqs: [
      { q: 'Do I need to be able to swim?', a: 'No. Classes are in water at about waist to chest height, and you won’t need to put your face in the water.' },
      { q: 'How warm is the pool?', a: 'The program pool is heated to around 33 to 34 degrees, warmer than a standard lap pool.' },
      { q: 'Is hydrotherapy safe after surgery?', a: 'Usually, once your wound has fully healed and your surgeon has cleared you for water. We confirm this at your initial assessment.' },
    ],
  },
};

/** Page URL for a service, by its name in data.ts. */
export const serviceUrl = (name: string) => `${base}/services/${serviceDetails[name].slug}/`;
