// Full article content for the Resources section, keyed by title (matching `posts` in data.ts).
// Written as general information for a fictional sample clinic. Have a registered physiotherapist
// review clinical content before publishing for a real practice.

import { base } from './config';

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] };

export interface Article {
  slug: string;
  /** ISO date */
  date: string;
  dateLabel: string;
  excerpt: string;
  imageAlt: string;
  body: Block[];
}

export const articles: Record<string, Article> = {
  'Why your desk setup matters less than you think': {
    slug: 'desk-setup-matters-less-than-you-think',
    date: '2026-10-07',
    dateLabel: '7 October 2026',
    excerpt: 'There is no single perfect sitting posture. What helps more is changing position often and staying strong.',
    imageAlt: 'Person working at a laptop on a standing desk beside a window',
    body: [
      { p: 'If you have neck or back pain and work at a desk, you have probably been told to fix your posture. Sit up straight, chin back, screen at eye level. It sounds sensible, and a comfortable setup is worth having. But the research on posture and pain is less clear-cut than most office ergonomics advice suggests.' },
      { h2: 'What the research says about posture' },
      { p: 'Large studies have looked for links between sitting posture and back or neck pain, and the links are weak. People who slump are not much more likely to have pain than people who sit upright, and there is no single posture that protects everyone. Bodies come in different shapes, and what feels comfortable varies.' },
      { p: 'What seems to matter more is how long you stay in one position, how much you move across the day, your general fitness, sleep and stress. Pain is influenced by many things, not just the angle of your spine.' },
      { h2: 'Your best posture is your next posture' },
      { p: 'Rather than holding one “correct” position for hours, aim to change position often. Some practical ways to build in movement:' },
      { ul: [
        'Set a gentle reminder to stand or shift position every 30 to 45 minutes.',
        'Take phone calls standing or walking.',
        'Alternate between sitting and standing if you have a sit-stand desk, rather than standing all day.',
        'Use the stairs, a printer in another room or a water bottle that needs refilling.',
        'Try a short walk at lunch, even 10 minutes.',
      ] },
      { h2: 'Desk setup still helps with comfort' },
      { p: 'None of this means your setup is irrelevant. A comfortable workstation makes it easier to work without straining. A few simple checks:' },
      { ul: [
        'Screen roughly at arm’s length, with the top near eye level.',
        'Keyboard and mouse close enough that your elbows can rest near your sides.',
        'Feet supported on the floor or a footrest.',
        'A chair you can adjust, with support that feels comfortable for your lower back.',
        'If you use a laptop for long periods, a separate keyboard and a laptop stand can help.',
      ] },
      { p: 'Think of these as ways to feel more comfortable, not as rules that prevent pain.' },
      { h2: 'Strength and activity make a difference' },
      { p: 'Regular exercise is one of the most consistent factors linked with fewer flare-ups of back and neck pain. It does not need to be complicated. Walking, strength training, swimming, Pilates or anything you enjoy and will keep doing all count. If you are starting from scratch, a physio can help you find a level that feels manageable.' },
      { h2: 'When to get it checked' },
      { p: 'Most desk-related aches settle with movement and time. It is worth booking an assessment if:' },
      { ul: [
        'Pain lasts more than a few weeks or keeps returning.',
        'You have pain, pins and needles or numbness spreading into an arm or leg.',
        'Pain is affecting your sleep, work or mood.',
      ] },
      { p: 'See a GP promptly if you have pain with fever, unexplained weight loss, or pain that is severe at night and not eased by changing position.' },
    ],
  },

  'Returning to running after a calf strain: a 6-week plan': {
    slug: 'returning-to-running-after-a-calf-strain',
    date: '2026-09-23',
    dateLabel: '23 September 2026',
    excerpt: 'A general guide to rebuilding calf strength and returning to running, with milestones to check before each step.',
    imageAlt: 'Runner’s lower legs and shoes on a park path',
    body: [
      { p: 'Calf strains are one of the most common running injuries, especially in runners over 35. They are also known for coming back if you return too quickly. The good news is that most calf strains recover well with a gradual, structured plan.' },
      { p: 'The timeline below is a general guide for a mild to moderate strain. Recovery depends on the severity of the injury, your training history and how your body responds, so use the milestones rather than the calendar to decide when to progress.' },
      { h2: 'Before you start' },
      { p: 'See a physio or doctor first if you felt a sudden pop or a sensation like being kicked in the back of the leg, if you can’t walk normally, or if there is significant swelling or bruising. These can be signs of a more significant injury, including an Achilles tendon problem.' },
      { p: 'If your calf is swollen, warm and painful without a clear injury, see a doctor promptly to rule out a blood clot.' },
      { h2: 'Weeks 1 and 2: settle and start loading' },
      { ul: [
        'Keep walking as comfortably as you can. Complete rest is rarely needed.',
        'Start double-leg calf raises, then progress to single-leg as pain allows.',
        'Add seated calf raises (with a weight on your knee) to target the deeper soleus muscle.',
        'Mild discomfort during exercise is usually fine if it settles within 24 hours.',
      ] },
      { p: 'Milestone: walking briskly without a limp, and 15 or more single-leg calf raises on the injured side.' },
      { h2: 'Weeks 2 to 4: build strength and spring' },
      { ul: [
        'Progress single-leg calf raises towards 25 or more, then add weight.',
        'Add low-level hopping on both legs, then single legs.',
        'Keep up cross-training such as cycling or swimming to maintain fitness.',
      ] },
      { p: 'Milestone: 25 single-leg calf raises with good control, and 20 comfortable single-leg hops.' },
      { h2: 'Weeks 3 to 6: walk-run return' },
      { p: 'Start with a walk-run session on a flat surface, every second day. For example:' },
      { ol: [
        'Session 1 and 2: 1 minute run, 2 minutes walk, repeated 6 times.',
        'Session 3 and 4: 2 minutes run, 1 minute walk, repeated 6 times.',
        'Session 5 and 6: 4 minutes run, 1 minute walk, repeated 4 times.',
        'Then continuous running for 20 minutes, building by about 10 percent a week.',
      ] },
      { p: 'Keep your calf strength work going two to three times a week throughout. Leave hills, speed work and spikes until you are running comfortably at your usual distance.' },
      { h2: 'How to judge each step' },
      { p: 'A simple rule many physios use: some discomfort up to about 3 out of 10 during a run is acceptable, as long as it settles by the next morning and doesn’t build week to week. If pain is higher, lasts into the next day or you start limping, drop back a step for a few sessions.' },
      { h2: 'Reducing the chance of it coming back' },
      { p: 'Strong calves tolerate running load better. Many runners keep a short calf strength routine going long after the injury has settled. Sudden jumps in training volume, intensity or hills are a common trigger, so build gradually.' },
      { p: 'If your calf keeps re-straining, a running assessment can help look at training load, strength and running technique together.' },
    ],
  },

  'Reformer vs. mat Pilates: which suits your injury?': {
    slug: 'reformer-vs-mat-pilates',
    date: '2026-09-09',
    dateLabel: '9 September 2026',
    excerpt: 'Both can help with rehab. Here is how they differ and how to choose.',
    imageAlt: 'Pilates reformer machines lined up in a bright studio',
    body: [
      { p: 'Pilates is often recommended during injury rehab, and people regularly ask us whether they should do reformer or mat classes. Both can be useful. The best choice depends on your injury, your goals and how much guidance you need.' },
      { h2: 'What is the difference?' },
      { p: 'Mat Pilates uses your body weight, sometimes with small equipment like balls, bands and rings. Reformer Pilates uses a sliding carriage with springs that can either add resistance or provide support.' },
      { p: 'Those springs are the key difference for rehab. On a reformer, an exercise can be made easier by using springs to support part of your body weight, or harder by adding resistance. That makes it easier to fine-tune exercises to what an injured area can tolerate.' },
      { h2: 'When a reformer may suit you better' },
      { ul: [
        'Early rehab, when you need support to move comfortably.',
        'After surgery, when load needs to be increased in small, controlled steps.',
        'If lying or kneeling on the floor is uncomfortable.',
        'If you find it hard to feel which muscles are working, as the springs give feedback.',
      ] },
      { h2: 'When mat Pilates may suit you better' },
      { ul: [
        'Building a routine you can continue at home without equipment.',
        'Later stages of rehab, when you are ready to control your own body weight.',
        'Fitting exercise around a busy schedule, since mat classes are widely available.',
      ] },
      { h2: 'Clinical vs. studio Pilates' },
      { p: 'Whichever equipment you use, the bigger question during rehab is who is running the class. Clinical Pilates is delivered by a physiotherapist and starts with an individual assessment, so exercises are chosen for your injury and adjusted as you progress. Studio classes are general fitness classes, which can be great once you have recovered.' },
      { p: 'If you are managing a current injury, a recent surgery, pregnancy or a condition like osteoporosis, it is worth starting with a clinician-led program and then moving to general classes when your physio agrees.' },
      { h2: 'What the evidence says' },
      { p: 'Studies suggest Pilates-based exercise can reduce pain and improve function for people with ongoing low back pain, with results similar to other forms of exercise therapy. In other words, Pilates is a good option, but not the only one. The most important factor is usually finding exercise you will do consistently.' },
      { h2: 'Questions to ask before you start' },
      { ul: [
        'Is the class run by a physiotherapist or by an instructor with rehab training?',
        'Will I have an individual assessment before joining a group?',
        'How many people are in each class?',
        'How will my program change as I improve, and who decides when to progress?',
        'Will I learn exercises I can keep doing at home?',
      ] },
      { p: 'Clear answers to these questions are a good sign that the program is set up for people recovering from injury, not just general fitness.' },
      { h2: 'Getting started' },
      { p: 'Our Clinical Pilates program begins with a one-on-one assessment, then small-group reformer classes of up to four people. Your physio will suggest how often to come and when you might be ready for mat work or independent exercise.' },
    ],
  },

  'Exercise in pregnancy: what’s safe in each trimester': {
    slug: 'exercise-in-pregnancy-each-trimester',
    date: '2026-08-26',
    dateLabel: '26 August 2026',
    excerpt: 'Staying active in pregnancy is generally safe and beneficial. A trimester-by-trimester guide, plus warning signs to know.',
    imageAlt: 'Pregnant woman doing a gentle stretch on an exercise mat',
    body: [
      { p: 'For most people with an uncomplicated pregnancy, regular exercise is safe and has real benefits. Australian guidelines encourage pregnant women to be active on most, preferably all, days, building up to 150 to 300 minutes of moderate-intensity activity a week, along with muscle-strengthening activities.' },
      { p: 'Always check with your GP, midwife or obstetrician before starting or continuing exercise in pregnancy, especially if you have a medical condition or pregnancy complication.' },
      { h2: 'Benefits of staying active' },
      { ul: [
        'Lower risk of gestational diabetes and high blood pressure in pregnancy.',
        'Help with back and pelvic pain for some women.',
        'Better mood, sleep and energy.',
        'Maintaining fitness and strength for birth and recovery.',
      ] },
      { h2: 'First trimester' },
      { p: 'If you were active before pregnancy, you can usually continue much of your routine, adjusting for nausea and fatigue. If you are new to exercise, start gently with walking, swimming or a pregnancy exercise class and build up gradually.' },
      { p: 'A useful guide to intensity is the talk test: you should be able to hold a conversation while exercising.' },
      { h2: 'Second trimester' },
      { p: 'Many women feel more energetic in the second trimester. Some changes to consider:' },
      { ul: [
        'From around 16 weeks, if lying flat on your back makes you feel dizzy or unwell, switch to side-lying or an inclined position.',
        'Your balance changes as your bump grows, so take care with activities that carry a risk of falls.',
        'Start or continue pelvic floor exercises if you haven’t already.',
      ] },
      { h2: 'Third trimester' },
      { p: 'You may need to reduce intensity and impact as your body changes. Walking, swimming, water aerobics, stationary cycling and modified strength work are popular choices. Listen to your body, and expect your routine to change week to week.' },
      { h2: 'Activities to avoid' },
      { ul: [
        'Contact sports and activities with a high risk of falls or impact to the abdomen.',
        'Scuba diving.',
        'Exercising in very hot or humid conditions, or overheating.',
        'Heavy lifting with breath-holding and straining.',
      ] },
      { h2: 'Stop and seek medical advice if you have' },
      { ul: [
        'Vaginal bleeding or fluid leaking from the vagina.',
        'Dizziness, feeling faint, chest pain or unusual shortness of breath.',
        'Calf pain or swelling.',
        'Regular, painful contractions.',
        'Reduced baby movements.',
      ] },
      { p: 'If symptoms are severe or you are worried, contact your maternity unit or call 000.' },
      { h2: 'After your baby arrives' },
      { p: 'Gentle walking and pelvic floor exercises can usually begin in the days after an uncomplicated vaginal birth, as you feel able. Return to higher-impact exercise such as running is usually best delayed until at least 12 weeks after birth, with a gradual build-up. After a caesarean, recovery takes longer and you should follow your medical team’s advice. A postnatal check with a women’s health physio can help you plan a safe return to the exercise you enjoy.' },
      { h2: 'How a physio can help' },
      { p: 'A women’s health physio can help with pregnancy-related pelvic and back pain, guide pelvic floor training, and tailor an exercise plan around your stage of pregnancy and any symptoms.' },
    ],
  },

  'Should you rest a sore back? What the evidence says': {
    slug: 'should-you-rest-a-sore-back',
    date: '2026-08-12',
    dateLabel: '12 August 2026',
    excerpt: 'For most back pain, staying gently active helps more than bed rest. What to do, and when to get checked.',
    imageAlt: 'Person walking along a tree-lined path',
    body: [
      { p: 'When your back suddenly hurts, lying still can feel like the safest option. But for most people with back pain, the evidence points the other way: staying gently active tends to lead to faster recovery than bed rest.' },
      { h2: 'Back pain is common and usually not serious' },
      { p: 'Most adults will have an episode of low back pain at some point. In the large majority of cases, there is no serious underlying cause, and pain improves significantly within a few weeks. Scans are rarely needed and often show changes that are common in people without pain too.' },
      { h2: 'Why movement helps' },
      { p: 'Australia’s Low Back Pain Clinical Care Standard recommends that people with acute back pain are encouraged to stay active and continue usual activities as much as possible. Bed rest is not recommended. Gentle movement helps maintain strength and mobility, and staying engaged with normal life is linked with better recovery.' },
      { h2: 'What staying active looks like' },
      { ul: [
        'Short, regular walks, building up as you can.',
        'Changing position often rather than sitting or lying for long periods.',
        'Continuing work and daily activities where possible, with adjustments.',
        'Using heat packs if they help you move more comfortably.',
      ] },
      { p: 'It is normal for movement to be uncomfortable at first. Hurt does not necessarily mean harm. Aim for activity that feels manageable and gradually do a little more.' },
      { p: 'If your job is physical, talk to your manager about temporary changes to your duties rather than stopping work altogether. Many people recover better when they stay connected with work and their usual routine, even in a modified way.' },
      { h2: 'What about pain relief?' },
      { p: 'Talk to your GP or pharmacist about pain relief options. Medicines can help you stay active but are generally best used for a short time. Some, like opioids, carry significant risks and are not recommended for most back pain.' },
      { h2: 'When to seek urgent care' },
      { p: 'A small number of people have back pain caused by something more serious. Go to an emergency department straight away if you have back pain with:' },
      { ul: [
        'New difficulty passing urine, or loss of bladder or bowel control.',
        'Numbness around the genitals, buttocks or inner thighs.',
        'New or worsening weakness in your legs.',
      ] },
      { p: 'See your GP promptly if you have back pain with fever, unexplained weight loss, a history of cancer, or after a significant fall or accident.' },
      { h2: 'Will it come back?' },
      { p: 'Back pain often recurs, and that can be discouraging. A flare-up does not usually mean something has been damaged. Many people find flare-ups become easier to manage once they know what helps them. Regular exercise is one of the best-supported ways to reduce the chance of future episodes, and the type matters less than doing it consistently.' },
      { h2: 'When a physio can help' },
      { p: 'If pain isn’t improving after a couple of weeks, keeps coming back or is affecting your work and sleep, a physio assessment can help. We look at what may be contributing, guide you on what to do and what to avoid, and build a plan to get you back to the things you want to do.' },
    ],
  },

  'Netball knees: preventing ACL injuries in junior players': {
    slug: 'preventing-acl-injuries-in-junior-netball',
    date: '2026-07-29',
    dateLabel: '29 July 2026',
    excerpt: 'ACL injuries are a concern in netball, especially for teenage girls. Warm-up programs and landing skills can help reduce the risk.',
    imageAlt: 'Junior netball players warming up on an outdoor court',
    body: [
      { p: 'Anterior cruciate ligament (ACL) injuries are among the most serious injuries in netball. They often happen without contact, during landing, sudden stopping or changing direction. Adolescent girls are at higher risk than boys of the same age, and the number of young people having ACL surgery in Australia has been rising.' },
      { p: 'The encouraging part is that research consistently shows injury-prevention warm-ups can reduce the risk of ACL and other knee injuries, particularly in young athletes, when they are done regularly.' },
      { h2: 'What prevention programs involve' },
      { p: 'Effective programs usually take 15 to 20 minutes and replace a standard warm-up. They combine:' },
      { ul: [
        'Running and change-of-direction drills.',
        'Strength exercises for hips, thighs and hamstrings, such as squats, lunges and Nordic hamstring curls.',
        'Balance and single-leg control exercises.',
        'Jumping and landing practice with a focus on technique.',
      ] },
      { p: 'Netball Australia’s KNEE program is designed specifically for netballers and is free for clubs and coaches to use.' },
      { h2: 'Landing technique matters' },
      { p: 'Coaches and players can practise landing skills that may reduce strain on the knee:' },
      { ul: [
        'Land softly, with bent knees and hips.',
        'Keep knees in line with toes, rather than letting them drop inward.',
        'Land on two feet where possible, and decelerate over several steps.',
        'Keep the chest up and control the landing rather than “sticking” it stiffly.',
      ] },
      { h2: 'Consistency is the key' },
      { p: 'Studies suggest the benefit depends on how often the program is done. Two or more sessions a week, continued through the season, appears more effective than occasional use. Making it the team’s standard warm-up at training and before games is the easiest way to keep it going.' },
      { p: 'It also helps when coaches explain the purpose of each exercise. Players who understand why they are doing a drill tend to put in more effort and keep doing it once they move up to senior teams.' },
      { h2: 'Other ways to protect young knees' },
      { ul: [
        'Manage training load, especially for players in multiple teams or sports.',
        'Build general strength in the off-season.',
        'Make sure players recover properly from ankle and other lower-limb injuries before returning.',
      ] },
      { h2: 'A note for parents' },
      { p: 'Junior players often play for a school team and a club, and sometimes another sport as well. That can add up to a lot of training, with little time for recovery. Watch for ongoing knee or heel pain, tiredness that doesn’t lift and a drop in enjoyment. These can be signs that the load needs adjusting. A short conversation with the coach about warm-ups and total weekly training can make a real difference.' },
      { h2: 'If a knee injury happens' },
      { p: 'Signs of a possible ACL injury include a pop at the time of injury, rapid swelling and the knee feeling unstable or giving way. Stop playing and see a doctor or physio for assessment. Early, accurate diagnosis helps guide the best treatment plan, whether that involves surgery or a structured rehab program.' },
      { p: 'We run injury-prevention sessions for junior clubs and can help coaches set up a warm-up program for their teams.' },
    ],
  },
};

/** Page URL for an article, by its title in data.ts. */
export const articleUrl = (title: string) => `${base}/resources/${articles[title].slug}/`;
