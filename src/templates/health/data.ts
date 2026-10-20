// Page content for Template 02 (Health & allied health), copied from the design file.

export const services = [
  ['Physiotherapy', 'Assessment, hands-on treatment and a clear rehab plan.', 'From $95', 'treatment — knee assessment'],
  ['Clinical Pilates', 'Physio-led reformer sessions, max four per class.', 'From $42', 'reformer studio'],
  ['Sports injuries', 'Return-to-sport testing for runners, netballers and footy players.', 'From $95', 'running gait analysis'],
  ['Women’s health', 'Pregnancy, postnatal and pelvic floor care with a specialist physio.', 'From $120', 'consult room'],
  ['Dry needling', 'Used alongside treatment for muscle pain and tension.', 'Included', 'treatment close-up'],
  ['Hydrotherapy', 'Small-group pool sessions at the Norwood Swimming Centre.', 'From $38', 'hydrotherapy pool'],
].map((r, i) => ({ num: String(i + 1).padStart(2, '0'), name: r[0], blurb: r[1], from: r[2], img: r[3] }));

export const faqs = [
  ['First visit', 'Do I need a referral to see a physio?', 'No. You can book directly. If you’re on a GP Chronic Condition Management Plan, NDIS, DVA or ReturnToWorkSA claim, bring your paperwork to your first visit.'],
  ['First visit', 'What happens at my first appointment?', 'Your first session is 45 minutes: we talk through your history, assess how you move, start treatment and leave you with a plan and a few exercises.'],
  ['Fees', 'Can I claim through my health fund?', 'Yes. We claim on the spot with HICAPS, so you only pay the gap. Rebates depend on your level of extras cover.'],
  ['Fees', 'Do you bulk bill Medicare?', 'Sessions under a GP Chronic Condition Management Plan receive a Medicare rebate of around $60. There is a gap fee; ask us for the current amount.'],
  ['First visit', 'What should I wear?', 'Something comfortable you can move in. For knee or hip issues, shorts are helpful; for shoulders, a singlet.'],
  ['Fees', 'What is your cancellation policy?', 'Please give us 24 hours’ notice. Late cancellations and no-shows may be charged 50% of the appointment fee.'],
  ['Treatment', 'How many sessions will I need?', 'Most people notice a difference within 2–3 sessions. We’ll give you an honest estimate at your first visit and review it as you progress.'],
  ['Treatment', 'Is Clinical Pilates suitable for beginners?', 'Yes. Every program starts with a one-on-one assessment, and classes are capped at four so your physio can tailor every exercise.'],
].map((r) => ({ cat: r[0], q: r[1], a: r[2] }));

export const faqCats = ['All', 'First visit', 'Fees', 'Treatment'];

export const pilatesFaqs = [
  { q: 'What is the difference between Clinical Pilates and regular Pilates?', a: 'Clinical Pilates is run by physiotherapists and built from an individual assessment, so it can target an injury or condition. Studio Pilates is a general fitness class.' },
  { q: 'Can I claim Clinical Pilates on my health fund?', a: 'Yes. Because sessions are delivered by a registered physiotherapist, they’re claimable under most extras policies as physiotherapy.' },
  { q: 'How often should I come?', a: 'Twice a week for the first six weeks gives the best results for most people, then once a week to maintain.' },
];

export const apptList = [
  ['Initial consultation', '45 min · $110'],
  ['Follow-up', '30 min · $95'],
  ['Clinical Pilates assessment', '60 min · $130'],
  ['Women’s health initial', '60 min · $140'],
];
export const pracList = ['Any available', 'Hannah Lee', 'Josh Patel', 'Mei Tran'];
export const dayList = [['Mon', '26'], ['Tue', '27'], ['Wed', '28'], ['Thu', '29'], ['Fri', '30'], ['Sat', '31']];
export const timeList = ['7:30am', '8:15am', '9:45am', '11:00am', '1:30pm', '3:15pm', '4:45pm', '6:00pm'];
export const fundingOptions = ['Paying privately / health fund', 'Medicare GP plan', 'NDIS', 'DVA', 'ReturnToWorkSA'];

export const blogCats = ['All', 'Back & neck', 'Sport', 'Pilates', 'Women’s health'];

export const posts = [
  ['Back & neck', 'Why your desk setup matters less than you think', '5 min read', 'Hannah Lee, APA Musculoskeletal Physio'],
  ['Sport', 'Returning to running after a calf strain: a 6-week plan', '7 min read', 'Josh Patel, Sports Physio'],
  ['Pilates', 'Reformer vs. mat Pilates: which suits your injury?', '4 min read', 'Mei Tran, Physio & Pilates Instructor'],
  ['Women’s health', 'Exercise in pregnancy: what’s safe in each trimester', '6 min read', 'Dr Ruth Ellis, Women’s Health Physio'],
  ['Back & neck', 'Should you rest a sore back? What the evidence says', '5 min read', 'Hannah Lee, APA Musculoskeletal Physio'],
  ['Sport', 'Netball knees: preventing ACL injuries in junior players', '6 min read', 'Josh Patel, Sports Physio'],
].map((r) => ({ cat: r[0], title: r[1], mins: r[2], author: r[3] }));

export const conditions = ['Lower back pain', 'Neck & headaches', 'Knee pain', 'Shoulder injuries', 'Sprained ankles', 'Running injuries', 'Post-surgery rehab', 'Pelvic floor', 'Pregnancy pain', 'Arthritis', 'Tennis elbow', 'Hip pain'];

export const team = [
  { name: 'Hannah Lee', role: 'Principal physiotherapist', bio: 'APA titled musculoskeletal physio with 14 years’ experience.' },
  { name: 'Josh Patel', role: 'Sports physiotherapist', bio: 'Former SANFL club physio; loves a complicated knee.' },
  { name: 'Mei Tran', role: 'Physio & Pilates lead', bio: 'Runs our Clinical Pilates program and hydro classes.' },
  { name: 'Dr Ruth Ellis', role: 'Women’s health physio', bio: 'PhD in pelvic health; pregnancy and postnatal care.' },
];

export const values = [
  { title: 'Time to listen', body: 'Initial consults are 45 minutes, follow-ups 30. Never double-booked.' },
  { title: 'Explain the why', body: 'You’ll leave every session understanding what’s going on and what to do next.' },
  { title: 'Evidence first', body: 'We use treatments with good research behind them, and tell you when the evidence is thin.' },
];

export const whoFor = [
  { title: 'Ongoing back pain', body: 'Build strength and confidence through controlled movement.' },
  { title: 'After surgery', body: 'A safe, progressive return after knee, hip or spinal surgery.' },
  { title: 'Pregnancy & postnatal', body: 'Adapted programs for each trimester and recovery after birth.' },
  { title: 'Athletes', body: 'Core control, mobility and injury prevention for sport.' },
];

export const pilatesFees = [
  { name: 'Assessment', price: '$130', note: '60 min one-on-one' },
  { name: 'Small-group class', price: '$42', note: 'Max 4 people · 55 min' },
  { name: '10-class pass', price: '$380', note: 'Valid 4 months' },
];
