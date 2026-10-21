// Journal article bodies, keyed by slug. Slugs, titles, dates and categories live in data.ts.
// Bodies are trusted HTML written for this template and rendered with set:html.

export interface Article {
  author: string;
  role: string;
  imageAlt: string;
  body: string;
}

export const articles: Record<string, Article> = {
  'kitchen-renovation-budget-brisbane': {
    author: 'Tom Hartley',
    role: 'Founder & licensed builder',
    imageAlt: 'Kitchen renovation in progress with new cabinetry being installed',
    body: `
<p>The first question almost everyone asks us is “what will it cost?” It’s a fair question, and the honest answer is a range. So rather than a single number, here’s how kitchen budgets actually break down in Brisbane right now, based on the kitchens we’ve finished most recently and the quotes we’ve written this year.</p>

<h2>The three price bands</h2>
<p>Most kitchens we build fall into one of three bands. All prices include GST.</p>
<ul>
  <li><strong>Refresh, from about $28,000.</strong> Same layout. New cabinetry, benchtops, splashback, sink, tapware and appliance installation. Plumbing and power stay roughly where they are.</li>
  <li><strong>Full renovation, about $45,000 to $70,000.</strong> Layout changes, an island, moved plumbing, a new lighting plan and usually some wall or floor work.</li>
  <li><strong>Bespoke, $75,000 and up.</strong> Solid timber or veneer cabinetry, stone islands, butler’s pantries, integrated appliances and more complex joinery.</li>
</ul>
<p>Most of our clients land somewhere between $35,000 and $70,000.</p>

<h2>Where the money goes</h2>
<p>Here’s an example: a full renovation in an older Brisbane home that came in at about $50,000, not counting appliances. The proportions shift from job to job, but this shape is typical.</p>
<table>
  <thead><tr><th>Item</th><th>Approx. cost</th></tr></thead>
  <tbody>
    <tr><td>Cabinetry and installation</td><td>$21,000</td></tr>
    <tr><td>Stone benchtops and splashback</td><td>$9,000</td></tr>
    <tr><td>Plumbing and electrical, including new lighting</td><td>$6,500</td></tr>
    <tr><td>Design, drawings and project management</td><td>$4,000</td></tr>
    <tr><td>Plastering, painting and floor patching</td><td>$4,000</td></tr>
    <tr><td>Demolition, waste and site protection</td><td>$3,000</td></tr>
    <tr><td>Sink, tapware and hardware</td><td>$2,500</td></tr>
  </tbody>
</table>
<p>Cabinetry is nearly always the biggest line. That’s where finish choice matters most: 2-pac, timber veneer and solid timber can swing the total by thousands.</p>

<h2>The costs most quotes leave out</h2>
<p>When two quotes look very different, it’s usually because one includes things the other doesn’t. Check for these:</p>
<ul>
  <li><strong>Provisional sums.</strong> Allowances for items not yet priced, such as electrical work. If the real cost comes in higher, you pay the difference.</li>
  <li><strong>Asbestos.</strong> Many homes built before 1990 have it somewhere. Testing before demolition is cheap. Discovering it halfway through is not.</li>
  <li><strong>Electrical upgrades.</strong> Older switchboards sometimes need work before new circuits can be added.</li>
  <li><strong>Making good.</strong> Patching walls and floors where old cabinets used to be.</li>
  <li><strong>Appliance installation.</strong> Especially ducted rangehoods and plumbed fridges.</li>
</ul>

<h2>How to keep your budget on track</h2>
<p>A few decisions make the biggest difference:</p>
<ol>
  <li><strong>Choose appliances early.</strong> Cabinetry is built around them, and late changes cost money.</li>
  <li><strong>Keep the sink where it is, if you can.</strong> Moving plumbing is one of the quickest ways to add cost.</li>
  <li><strong>Spend where you touch.</strong> Good drawer runners and a durable benchtop matter more than premium finishes on the inside of cupboards.</li>
  <li><strong>Hold a contingency.</strong> We suggest setting aside around 10% for surprises, especially in older homes.</li>
</ol>

<h2>Comparing quotes fairly</h2>
<p>Ask every builder for a fixed-price quote with the same inclusions, and ask what is provisional. In Queensland, for residential contracts of $20,000 or more, the deposit is capped at 5% of the contract price. Your builder should also hold the right QBCC licence, and work over $3,300 should be covered by the QBCC Home Warranty Scheme.</p>
<p>If you’d like a number for your own kitchen, the quickest way is a free site visit. We’ll measure up, talk through options and give you a fixed price you can plan around.</p>
`,
  },

  'timber-vs-2-pac-cabinetry': {
    author: 'Sam O’Brien',
    role: 'Lead cabinetmaker',
    imageAlt: 'Timber and painted 2-pac cabinet door samples side by side',
    body: `
<p>Every week someone stands in our workshop holding a timber sample in one hand and a 2-pac sample in the other, trying to picture ten years of family life. Both are good choices. They just age differently, and it helps to know how before you decide.</p>

<h2>What each one actually is</h2>
<p><strong>2-pac</strong> is a two-part polyurethane paint, sprayed in several coats over MDF. It gives you a smooth, seamless finish in almost any colour, in matt, satin or gloss.</p>
<p><strong>Timber</strong> comes in two forms. <strong>Veneer</strong> is a thin layer of real timber bonded to a stable board. <strong>Solid timber</strong> is exactly that, usually used for doors, drawer fronts, trims or a statement island.</p>

<h2>How they wear in a busy kitchen</h2>
<p>2-pac is tough on flat surfaces, but edges and corners can chip if they’re knocked by pots, prams or vacuum cleaners. Chips can be repaired by touching up or respraying, though matching an older colour exactly can be tricky.</p>
<p>Timber hides wear better. Small marks blend into the grain, and the surface picks up a gentle patina over time. Solid timber can be sanded and refinished. Veneer can be lightly cut back and recoated, but only so many times because the timber layer is thin.</p>

<h2>Brisbane humidity</h2>
<p>Timber moves as it takes on and loses moisture, and our wet summers make that more noticeable. That’s why we use veneer on stable boards for large panels and keep solid timber to frames and smaller parts. 2-pac on moisture-resistant MDF is very stable, which suits tall pantry doors and areas near the sink.</p>

<h2>Side by side</h2>
<table>
  <thead><tr><th></th><th>2-pac</th><th>Timber veneer</th><th>Solid timber</th></tr></thead>
  <tbody>
    <tr><td>Look</td><td>Smooth, any colour</td><td>Natural grain, consistent</td><td>Natural grain, varied</td></tr>
    <tr><td>Daily wear</td><td>Edges can chip</td><td>Hides small marks</td><td>Hides marks well</td></tr>
    <tr><td>Repair</td><td>Touch up or respray</td><td>Light recoat</td><td>Sand and refinish</td></tr>
    <tr><td>Relative cost</td><td>Mid</td><td>Mid to high</td><td>Highest</td></tr>
  </tbody>
</table>

<h2>Our usual recommendation</h2>
<p>Many of our favourite kitchens mix the two. 2-pac for tall cabinets and overheads, where a calm, flat colour makes the room feel bigger. Timber for the island or the base cabinets, where hands and feet meet the joinery and a bit of character helps.</p>
<p>If budget is tight, a good-quality laminate is worth considering for internal carcasses and less visible areas, so you can spend more on the doors people actually see and touch.</p>

<h2>Caring for each finish</h2>
<p>Both finishes are easy to live with if you look after them from day one.</p>
<ul>
  <li><strong>2-pac:</strong> wipe with a soft damp cloth and mild detergent. Avoid abrasive pads and harsh cleaners, which dull the surface. Report chips early so they can be touched up before moisture gets in.</li>
  <li><strong>Timber:</strong> wipe spills promptly, especially around the sink and dishwasher. Oiled finishes benefit from a light re-oil every year or two. Lacquered timber just needs a damp cloth.</li>
  <li><strong>Both:</strong> run the rangehood when cooking and avoid hanging damp tea towels over doors, which can mark either finish over time.</li>
</ul>

<h2>Questions to ask any cabinetmaker</h2>
<ul>
  <li>What board is under the finish, and is it moisture resistant near the sink?</li>
  <li>How many coats of 2-pac, and is the edge sprayed or banded?</li>
  <li>What happens if a door chips in the first year?</li>
  <li>Which timber species and finish, and how should I care for it?</li>
</ul>
<p>Come and see both finishes in the workshop. Samples are useful, but nothing beats opening a real drawer and running your hand along the edge.</p>
`,
  },

  'queenslander-restoration-keep-or-replace': {
    author: 'Tom Hartley',
    role: 'Founder & licensed builder',
    imageAlt: 'Restored Queenslander with timber verandah and fretwork',
    body: `
<p>Queenslanders were built from good timber by people who knew what they were doing. After a hundred years, most of that timber is still worth saving. The trick is knowing which parts to repair, which to replace, and where to put your money first.</p>

<h2>Usually worth keeping</h2>
<h3>VJ walls</h3>
<p>Vertical-joint boards give a Queenslander much of its character. Loose or damaged boards can usually be refixed or replaced with matching profiles. Be careful with old paint, though. Layers on older homes often contain lead, so test before you sand.</p>
<h3>Fretwork, brackets and balustrades</h3>
<p>These decorative pieces are easy to repair. Where a section is missing or rotten, we trace the original and make a new one in the workshop so it matches the rest.</p>
<h3>Timber windows and doors</h3>
<p>Casements, sashes and French doors can almost always be repaired: new putty, a replaced sill, freed-up hinges. Repair is usually cheaper than good-quality replacements and keeps the original look.</p>
<h3>Floors</h3>
<p>Hoop pine and other original floors often come up beautifully with a careful sand and recoat, even under old carpet or lino.</p>

<h2>Usually needs replacing</h2>
<ul>
  <li><strong>Old wiring.</strong> Original wiring and old switchboards are a safety risk. Have a licensed electrician inspect early.</li>
  <li><strong>Galvanised water pipes.</strong> They corrode from the inside and reduce water pressure.</li>
  <li><strong>Rotten stumps.</strong> Timber stumps are commonly replaced with concrete or steel when the house is re-levelled.</li>
  <li><strong>Asbestos sheeting.</strong> Often found in enclosed verandahs, bathrooms and eaves. Homes built before 1990 may contain asbestos, so test before any work and use licensed removalists.</li>
</ul>

<h2>Check the rules first</h2>
<p>Many Queenslanders in Brisbane sit within Brisbane City Council’s character overlay, which generally applies to houses built before 1947. It mostly protects how the house looks from the street. Demolition and changes to the front are restricted, while work at the rear is often more flexible. Heritage-listed homes have stricter rules again. Ask your builder or a town planner before you commit to a design.</p>

<h2>Where to spend first</h2>
<p>When budget is limited, we suggest this order:</p>
<ol>
  <li><strong>Structure.</strong> Stumps, bearers and joists. Nothing else matters if the house is moving.</li>
  <li><strong>Weatherproofing.</strong> Roof, gutters, flashings and windows that keep water out.</li>
  <li><strong>Services.</strong> Wiring and plumbing, while walls and floors are open.</li>
  <li><strong>Character details.</strong> Fretwork, verandahs, VJs and finishes.</li>
</ol>
<p>Working in this order means you won’t pay to restore a beautiful verandah, only to pull it apart later to fix a stump.</p>

<h2>Making new work fit in</h2>
<p>Most restorations involve some new work too: a kitchen, a bathroom or an extension at the back. The best results come from respecting the original house without copying it badly. A few principles we follow:</p>
<ul>
  <li>Match ceiling heights, floor levels and window proportions where the old and new meet.</li>
  <li>Reuse salvaged boards, doors and hardware in the new spaces where you can.</li>
  <li>Keep the old house readable. A modern extension that is clearly new often sits better than a fake old one.</li>
  <li>Choose materials that age well alongside a century-old house, such as timber, painted weatherboards and corrugated iron.</li>
</ul>

<h2>Plan it in stages</h2>
<p>Most of our restoration clients don’t do everything at once. A written repair plan, with priorities and rough costs, lets you tackle the house over a few years without redoing work. We start every heritage project with a condition inspection for exactly this reason.</p>
`,
  },

  'how-long-bathroom-renovation-takes': {
    author: 'Priya Nair',
    role: 'Design & project lead',
    imageAlt: 'Bathroom mid-renovation with waterproofing and new tiles',
    body: `
<p>A typical bathroom renovation takes us 4 to 6 weeks on site. That can sound long for one small room, but a lot has to happen in the right order, and some steps simply need time to dry or cure. Here’s what a typical job looks like week by week.</p>

<h2>Before we start: ordering</h2>
<p>The countdown really begins before demolition. Tiles, tapware, the bath and the vanity all need to be chosen and ordered so they arrive on time. Some imported fixtures can take weeks to land, so we lock in selections early and check stock before booking your start date.</p>

<h2>Week 1: demolition and rough-in</h2>
<p>We protect floors and the path to the bathroom, then strip the room back to the frame. In older homes we test for asbestos before anything comes out.</p>
<p>Once the room is bare, the plumber and electrician move pipes, drains and wiring to suit the new layout. This is also when we find out what’s hiding behind the old tiles.</p>

<h2>Week 2: framing, sheeting and waterproofing</h2>
<p>We repair any damaged framing and add noggins for the vanity, towel rails and shower screen. New wall sheeting goes up, and the floor is set with the right fall to the drain.</p>
<p>Then comes waterproofing, done to AS 3740 by a licensed waterproofer. The membrane needs time to cure according to the manufacturer’s instructions before tiling, and we never rush it. This is the most important step in the whole job, even though you’ll never see it.</p>

<h2>Week 3: tiling</h2>
<p>Tiling usually takes several days, longer for small mosaics, feature walls or large-format tiles. We check falls again as the floor tiles go down, so water heads to the drain rather than the door.</p>

<h2>Week 4: fit-off</h2>
<p>Grout and silicone go in. The plumber returns to fit tapware, the toilet and the bath, and the electrician fits lights, the exhaust fan and heated towel rail. We install the vanity and shaving cabinet from our workshop.</p>

<h2>Weeks 5 and 6: shower screen and handover</h2>
<p>Frameless shower screens are made to measure once tiling is finished, which is why there is often a short gap here. Once the screen is installed, we do a final clean, walk you through everything and hand over your waterproofing certificate and care guide.</p>

<h2>What can slow things down</h2>
<ul>
  <li><strong>Hidden water damage.</strong> Rotten framing or flooring behind old tiles needs fixing before we go further.</li>
  <li><strong>Late selections.</strong> A tile or tap that’s out of stock can hold up the next trade.</li>
  <li><strong>Layout changes mid-job.</strong> Moving a drain after rough-in means redoing work.</li>
  <li><strong>Custom glass.</strong> Shower screens can take longer to make in busy periods.</li>
</ul>

<h2>Living through it</h2>
<p>If you have a second bathroom, most people stay put. If it’s your only one, talk to us early. We can plan the work so the toilet is out of action for as few days as possible, or arrange a hire unit.</p>
<p>Every Ashgrove bathroom comes with a written schedule before we start, so you know which week is which and when the noisy days are.</p>
`,
  },

  'council-approval-deck-brisbane': {
    author: 'Priya Nair',
    role: 'Design & project lead',
    imageAlt: 'Raised timber deck with balustrade at the back of a Brisbane home',
    body: `
<p>“Do I need approval for my deck?” is one of the most common questions we hear. The short answer: often yes, sometimes no, and it depends on your site. Here’s how it works in Brisbane, so you know what to ask before you build.</p>
<p>This is general information, not advice for your property. A building certifier confirms what your deck needs.</p>

<h2>Two kinds of approval</h2>
<p><strong>Building approval</strong> checks that the deck is structurally safe and meets the building rules. In Queensland, building approvals are usually issued by a private building certifier rather than by council.</p>
<p><strong>Planning approval</strong> is a separate council process. Most decks don’t need it, but some sites do, for example homes in a character overlay or certain flood areas.</p>

<h2>When a deck might be exempt</h2>
<p>Some small, low, unroofed decks close to the ground can be exempt from building approval. The exemptions depend on things like the deck’s height above the ground, its floor area and whether it has a roof. Because the details matter, we always confirm with a certifier rather than assuming a deck is exempt.</p>

<h2>What usually triggers approval</h2>
<ul>
  <li><strong>Height.</strong> Raised decks, such as those off the back of a Queenslander.</li>
  <li><strong>A roof.</strong> Adding a roof or pergola cover usually changes the requirements.</li>
  <li><strong>Boundary setbacks.</strong> Decks close to a boundary must meet the boundary clearance rules in the Queensland Development Code, or get a siting variation.</li>
  <li><strong>Overlays.</strong> Character, heritage and flood overlays can bring in extra requirements.</li>
  <li><strong>Pools.</strong> A deck near a pool can affect pool barrier compliance.</li>
</ul>

<h2>Balustrades and stairs</h2>
<p>Under the National Construction Code, a barrier is generally required where someone could fall 1 metre or more. Balustrade heights, the gaps between balusters and stair dimensions are all set out in the rules. A certifier will check these, and they affect your design and budget.</p>

<h2>How the process usually runs</h2>
<ol>
  <li><strong>Site visit.</strong> We look at height, setbacks, overlays and how the deck connects to the house.</li>
  <li><strong>Design and engineering.</strong> Drawings and structural details for footings, framing and fixings.</li>
  <li><strong>Certifier lodgement.</strong> The certifier reviews the plans, and asks council for any referral if needed.</li>
  <li><strong>Inspections.</strong> The certifier or an inspector checks key stages, such as footings and framing.</li>
  <li><strong>Final sign-off.</strong> You receive the final certificate. Keep it, because buyers will ask for it when you sell.</li>
</ol>
<p>Approval timeframes vary. A straightforward deck often takes a few weeks, while sites with overlays or siting variations take longer. Build this into your plans if you want the deck finished before summer or a special event.</p>

<h2>What to have ready</h2>
<p>To speed things up, gather your property address and lot plan details, any existing house plans and surveys, and photos of where the deck will go. If you know of easements, sewer lines or stormwater pipes in the area, mention them early, because building over them can need extra approvals.</p>

<h2>Why it matters</h2>
<p>An unapproved deck can cause problems when you sell or make an insurance claim, and fixing it later usually costs more than doing it properly the first time. More importantly, the approval process checks the parts that keep people safe: footings, fixings and balustrades.</p>
<p>When you book a site visit with us, we check your approval requirements as part of the quote and manage the certifier for you.</p>
`,
  },

  'choosing-decking-timber': {
    author: 'Tom Hartley',
    role: 'Founder & licensed builder',
    imageAlt: 'Spotted gum, blackbutt and merbau decking boards side by side',
    body: `
<p>Spotted gum, blackbutt and merbau are the three decking timbers we’re asked about most. All three are hard, durable and suited to Brisbane’s weather. The differences come down to colour, how they behave, where they come from and how they’ll look in ten years.</p>

<h2>Spotted gum</h2>
<p>Our most popular choice. Spotted gum is an Australian hardwood with a wide colour range, from pale cream through to deep brown, often with a subtle wavy figure. It’s very hard-wearing and is also one of the species that can be used on many bushfire-prone sites.</p>
<p>The colour variation is part of its charm. If you want a uniform look, ask for a select grade.</p>

<h2>Blackbutt</h2>
<p>Blackbutt is lighter and more even in colour, ranging from pale straw to light brown. It suits coastal and contemporary designs and weathers to a soft silver-grey if left unoiled. Like spotted gum, it’s an Australian hardwood and suitable for many bushfire-prone sites.</p>

<h2>Merbau</h2>
<p>Merbau is an imported hardwood, usually from South-East Asia, with a rich reddish-brown colour. It’s stable and durable, but it’s known for heavy tannin bleed in its early life. Rain can wash brown stains onto concrete, paving and render below the deck, so plan for that.</p>
<p>Sustainability is a real consideration with merbau. If you choose it, ask for certified timber from a responsibly managed source.</p>

<h2>At a glance</h2>
<table>
  <thead><tr><th></th><th>Spotted gum</th><th>Blackbutt</th><th>Merbau</th></tr></thead>
  <tbody>
    <tr><td>Origin</td><td>Australian</td><td>Australian</td><td>Imported</td></tr>
    <tr><td>Colour</td><td>Cream to dark brown, varied</td><td>Pale straw to light brown</td><td>Reddish brown</td></tr>
    <tr><td>Tannin bleed</td><td>Some</td><td>Some</td><td>Heavy at first</td></tr>
    <tr><td>Bushfire-prone sites</td><td>Often suitable</td><td>Often suitable</td><td>Check with your certifier</td></tr>
  </tbody>
</table>

<h2>What about price?</h2>
<p>Timber prices move with supply, grade and board width, so we don’t publish a fixed comparison. At your site visit we’ll quote current rates for each option, so you can compare properly.</p>

<h2>The parts that matter as much as the boards</h2>
<ul>
  <li><strong>Ventilation.</strong> Decks close to the ground need airflow underneath, or boards can cup and the frame can rot.</li>
  <li><strong>Fixings.</strong> Use stainless or hot-dip galvanised fixings, especially near the coast.</li>
  <li><strong>Gaps.</strong> Boards need room to expand in summer humidity.</li>
  <li><strong>Coating.</strong> Oil the deck before or soon after installation, then recoat regularly. North and west-facing decks need it most often.</li>
</ul>

<h2>Grades and board sizes</h2>
<p>Within each species you’ll usually choose a grade. Select grades have fewer natural features such as gum veins and knots, and cost more. Standard or feature grades show more character for less money. Board width matters too. Wider boards look generous but move more with humidity, while narrower boards like 86mm are more stable and a little more forgiving in our climate.</p>
<p>Ask to see a few full-length boards of the grade you’re quoted, not just a sanded offcut, so there are no surprises when the delivery arrives.</p>

<h2>Our take</h2>
<p>For most Brisbane homes we recommend spotted gum: it’s local, tough and looks good with or without regular oiling. Choose blackbutt for a lighter, calmer look. Choose merbau only if you love the colour and can source it responsibly.</p>
<p>We bring offcuts of all three to every deck site visit. Seeing them in your own light, next to your house, makes the decision much easier.</p>
`,
  },

  'walnut-sideboard-workshop': {
    author: 'Sam O’Brien',
    role: 'Lead cabinetmaker',
    imageAlt: 'Four-metre walnut sideboard on the bench in the Ashgrove workshop',
    body: `
<p>Most of what we build is fitted: kitchens, wardrobes, bookshelves. Every so often, someone asks for a piece of furniture. This year it was a four-metre sideboard in American black walnut, for a long dining room in a Wilston Queenslander. Here’s how it came together.</p>

<h2>Starting with the boards</h2>
<p>A piece this long starts at the timber yard. We hand-picked rough-sawn walnut boards, matching colour and grain so the top would read as one continuous surface. Walnut has creamy sapwood along its edges, and we decided early to keep a little of it on the drawer fronts as a subtle detail.</p>
<p>The boards then sat in the workshop for a couple of weeks to settle to our local conditions before we cut anything. Rushing this step is how furniture ends up cracking or twisting later.</p>

<h2>Designing for movement</h2>
<p>Solid timber expands and contracts across its width as humidity changes, and Brisbane’s humidity swings a lot through the year. A four-metre top made from solid boards will move noticeably from summer to winter.</p>
<p>So the top isn’t glued down. It’s held with timber buttons that sit in grooves and let it move. The back panels float in their frames rather than being fixed. These details are invisible once the piece is finished, but they’re the difference between furniture that lasts a lifetime and furniture that splits within a couple of years.</p>

<h2>Joinery</h2>
<p>The carcass is joined with mortise and tenons, and the drawers are hand-cut dovetails at the front and through dovetails at the back. The drawer bottoms are solid walnut, set in grooves so they can move too.</p>
<p>The four doors are frame-and-panel, with the panels resawn from a single board so the grain flows across the whole front. It took some careful planning to get enough clear timber for that, but it’s the detail people notice first.</p>

<h2>Built in sections</h2>
<p>Four metres won’t fit through most front doors, let alone round a Queenslander’s hallway. We built the sideboard as two cases joined invisibly on site, with a single top that we carried in through the French doors.</p>

<h2>Finishing</h2>
<p>We finished it with a hardwax oil, which soaks into the timber, brings out walnut’s depth and can be spot-repaired if it gets a scratch. A lacquer would have been more stain resistant, but harder to fix and less pleasant to touch. For a dining room piece that will collect marks over the years, we think repairability wins.</p>

<h2>The numbers</h2>
<ul>
  <li>Length: 4 metres, in two cases with a single top</li>
  <li>Timber: American black walnut, with solid walnut drawer bottoms</li>
  <li>Joinery: mortise and tenon, hand-cut dovetails</li>
  <li>Finish: hardwax oil</li>
  <li>Workshop time: roughly six weeks</li>
</ul>

<h2>What it means for your joinery</h2>
<p>The same principles go into every piece we make, from a window seat to a full kitchen: choose timber carefully, let it settle, allow it to move and choose finishes you can repair. If you’re thinking about a one-off piece or built-ins with real timber, we’d love to show you around the workshop.</p>
`,
  },
};

/** Reading time from the article body, at about 220 words a minute. */
export const readTime = (slug: string) => {
  const words = (articles[slug]?.body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} MIN READ`;
};
