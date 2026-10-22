// Page content for the Coastline template: stays, tours, attractions, destinations, field notes, FAQs.
// Sample copy for a fictional travel brand. Places are real Australian regions, but every business,
// price and inclusion is a placeholder: replace with the client's own listings before launch.

export type DestKey = 'coast' | 'hinterland' | 'outback';
export type Kind = 'stay' | 'tour' | 'attraction';

export interface Listing {
  slug: string;
  kind: Kind;
  name: string;
  /** Stay type, tour style or attraction type, shown as the card kicker. */
  type: string;
  dest: DestKey;
  region: string;
  /** Google Maps search used for the embedded map. */
  mapQuery: string;
  summary: string;
  body: string[];
  /** Price in AUD: per night for stays, per person for tours, entry for attractions (0 = free). */
  price: number;
  unit: string;
  /** Stays: sleeps. Tours: max group size. */
  capacity?: number;
  duration?: string;
  /** Tour departure times (tours and paid attractions use these in the booking flow). */
  times?: string[];
  family: boolean;
  pets: boolean;
  features: string[];
  photos: { name: string; alt: string }[];
}

export const destinations: {
  slug: DestKey;
  name: string;
  short: string;
  title: string;
  blurb: string;
  intro: string[];
  photo: string;
  alt: string;
  best: string;
  regions: string[];
}[] = [
  {
    slug: 'coast',
    name: 'The coast',
    short: 'By the coast',
    title: 'By the coast',
    blurb: 'Turquoise waters, sandy shores and endless horizons.',
    intro: [
      'Australia has more than 10,000 beaches, and most of them never make the postcards. We look for the quieter bays: the ones with a holiday park behind the dunes, a kayak hire on the sand and a fish and chip shop that closes when the fish run out.',
      'Come for the water and stay for the pace. Mornings start with a swim, afternoons stretch out under a gum tree and evenings belong to the sunset.',
    ],
    photo: 'coastline/dest-coast',
    alt: 'Aerial view of a turquoise bay with a white sand beach and bush-covered headlands',
    best: 'September to May for swimming. June to October for whales on the east and west coasts.',
    regions: ['Whitsundays, QLD', 'Jervis Bay, NSW', 'Great Ocean Road, VIC', 'Bay of Fires, TAS', 'Yorke Peninsula, SA', 'Cape to Cape, WA'],
  },
  {
    slug: 'hinterland',
    name: 'The hinterland',
    short: 'In the hinterland',
    title: 'In the hinterland',
    blurb: 'Rainforests, waterfalls and a different pace of life.',
    intro: [
      'Head inland for half an hour and the air changes. The hinterland is rainforest walks, swimming holes, farm-gate stalls and cabins where the loudest thing is the rain on the roof.',
      'It is the easy escape: close enough for a long weekend, far enough to feel like you have been away for a week.',
    ],
    photo: 'coastline/dest-hinterland',
    alt: 'A walker on a rainforest trail between tree ferns, with sunlight filtering through',
    best: 'All year. Waterfalls are at their best after summer rain, walking is easiest from April to October.',
    regions: ['Springbrook, QLD', 'Atherton Tablelands, QLD', 'Murray River, VIC', 'Barrington Tops, NSW'],
  },
  {
    slug: 'outback',
    name: 'The outback',
    short: 'Under big skies',
    title: 'Under big skies',
    blurb: 'Ancient landscapes and unforgettable outback moments.',
    intro: [
      'Red earth, old ranges and a night sky so full it looks unreal. The outback asks for a bit more planning and pays it back every single evening.',
      'Stay on a working station, swim in a gorge, and learn the country from the people who know it best.',
    ],
    photo: 'coastline/dest-outback',
    alt: 'Red rocky outback ranges glowing at sunset above scrub and spinifex',
    best: 'April to October. Summer days are very hot, and some roads close after heavy rain.',
    regions: ['Flinders Ranges, SA', 'Karijini, WA', 'Red Centre, NT'],
  },
];

export const destBySlug = Object.fromEntries(destinations.map((d) => [d.slug, d])) as Record<DestKey, (typeof destinations)[number]>;

export const stays: Listing[] = [
  {
    slug: 'saltbush-point-holiday-park',
    kind: 'stay',
    name: 'Saltbush Point Holiday Park',
    type: 'Holiday park',
    dest: 'coast',
    region: 'Jervis Bay, NSW',
    mapQuery: 'Jervis Bay NSW',
    summary: 'Beachfront cabins and powered sites a few steps from white sand.',
    body: [
      'A family-run holiday park tucked behind the dunes, with shady powered sites, two-bedroom cabins and a path straight onto the beach. The water here is famously clear and the bay is calm enough for little swimmers.',
      'Bring the bikes, the bucket and spade and the dog. There is a camp kitchen, a games room for rainy afternoons and a general store for the things you forgot.',
    ],
    price: 145,
    unit: 'night',
    capacity: 6,
    family: true,
    pets: true,
    features: ['Beach access', 'Powered sites and cabins', 'Camp kitchen and BBQs', 'Pet-friendly sites', 'Kids playground', 'Free Wi-Fi at reception'],
    photos: [
      { name: 'coastline/stay-beach-park', alt: 'Tents and caravans under coastal trees beside a beach' },
      { name: 'coastline/card-park', alt: 'Holiday park cabins among trees near the coast' },
      { name: 'coastline/stay-firepit', alt: 'Chairs around a fire pit at dusk' },
    ],
  },
  {
    slug: 'canopy-eco-cabins',
    kind: 'stay',
    name: 'Canopy Eco Cabins',
    type: 'Cabin',
    dest: 'hinterland',
    region: 'Springbrook, QLD',
    mapQuery: 'Springbrook QLD',
    summary: 'Off-grid timber cabins in the rainforest, built for two.',
    body: [
      'Four solar-powered cabins spread through the rainforest, each with a wood fire, a deep bath and a deck that looks straight into the canopy. You will hear whipbirds in the morning and rain on the roof at night.',
      'Walking tracks to three waterfalls start at the gate. Breakfast hampers are made with produce from farms down the hill.',
    ],
    price: 260,
    unit: 'night',
    capacity: 2,
    family: false,
    pets: false,
    features: ['Solar powered', 'Wood fire', 'Outdoor bath', 'Breakfast hamper', 'Walking tracks from the gate', 'Adults only'],
    photos: [
      { name: 'coastline/stay-eco-cabin', alt: 'A small timber cabin among forest trees' },
      { name: 'coastline/stay-cabin-interior', alt: 'A cosy cabin interior with a large window to the trees' },
      { name: 'coastline/dest-hinterland', alt: 'A rainforest walking trail between tree ferns' },
    ],
  },
  {
    slug: 'tidewater-glamping',
    kind: 'stay',
    name: 'Tidewater Glamping',
    type: 'Glamping',
    dest: 'coast',
    region: 'Bay of Fires, TAS',
    mapQuery: 'Bay of Fires TAS',
    summary: 'Safari tents on timber decks above a quiet bay.',
    body: [
      'Six canvas safari tents, each on its own deck in the coastal scrub, with a proper bed, linen, a private bathroom and a view across the water. It is camping without the packing.',
      'Spend the day on the orange-lichen rocks and white beaches, then come back to a fire pit and a sky full of stars.',
    ],
    price: 320,
    unit: 'night',
    capacity: 2,
    family: false,
    pets: false,
    features: ['Private deck with water view', 'King bed and linen', 'Ensuite bathroom', 'Fire pit', 'Breakfast included', 'Kayaks to borrow'],
    photos: [
      { name: 'coastline/card-glamping', alt: 'A safari tent on a raised timber deck among trees' },
      { name: 'coastline/stay-glamping-interior', alt: 'A made bed inside a canvas glamping tent' },
      { name: 'coastline/note-breakfast', alt: 'Coffee and breakfast on a deck overlooking the view' },
    ],
  },
  {
    slug: 'driftwood-beach-shack',
    kind: 'stay',
    name: 'Driftwood Beach Shack',
    type: 'Beach shack',
    dest: 'coast',
    region: 'Yorke Peninsula, SA',
    mapQuery: 'Yorke Peninsula SA',
    summary: 'A classic three-bedroom shack on the dunes. Dogs welcome.',
    body: [
      'The kind of shack Australians grew up in: sandy floors, a big kitchen table and a verandah facing the sea. It sleeps a whole family and the dog, with a fenced yard and an outdoor shower for after the beach.',
      'The jetty is a short walk for squid and whiting, and the local bakery does a good pasty.',
    ],
    price: 210,
    unit: 'night',
    capacity: 7,
    family: true,
    pets: true,
    features: ['Three bedrooms', 'Fenced yard for dogs', 'Outdoor shower', 'Full kitchen', 'Verandah with sea view', 'Linen included'],
    photos: [
      { name: 'coastline/stay-beach-shack', alt: 'A weathered beach shack on the dunes' },
      { name: 'coastline/note-sunrise', alt: 'Sunrise over a quiet beach with small waves' },
      { name: 'coastline/note-dog', alt: 'A happy dog running on the beach' },
    ],
  },
  {
    slug: 'river-red-campground',
    kind: 'stay',
    name: 'River Red Campground',
    type: 'Campsite',
    dest: 'hinterland',
    region: 'Murray River, VIC',
    mapQuery: 'Murray River Barmah VIC',
    summary: 'Unpowered riverside sites under the river red gums.',
    body: [
      'Big, flat, unpowered sites on a bend of the river, each with a fire ring and plenty of shade. Bring your own tent or book one of the pre-pitched bell tents.',
      'Canoe hire is on site, the swimming is gentle in late summer and the campfire stories are free.',
    ],
    price: 45,
    unit: 'night',
    capacity: 6,
    family: true,
    pets: true,
    features: ['River frontage', 'Fire rings (seasonal)', 'Hot showers and toilets', 'Canoe hire', 'Dogs on lead', 'Bell tents to book'],
    photos: [
      { name: 'coastline/stay-river-camp', alt: 'A tent pitched beside a river among gum trees' },
      { name: 'coastline/stay-firepit', alt: 'Chairs around a fire pit at dusk' },
      { name: 'coastline/stars-camp', alt: 'A glowing tent under the Milky Way' },
    ],
  },
  {
    slug: 'ochre-ridge-station',
    kind: 'stay',
    name: 'Ochre Ridge Station Stay',
    type: 'Station stay',
    dest: 'outback',
    region: 'Flinders Ranges, SA',
    mapQuery: 'Flinders Ranges SA',
    summary: 'Shearers’ quarters and homestead rooms on a working sheep station.',
    body: [
      'A working station of 30,000 hectares at the foot of the ranges. Stay in the restored shearers’ quarters or the old homestead, eat a hearty station dinner and watch the ridges turn red at sunset.',
      'Self-drive 4WD tracks, gorge walks and a night sky with almost no light pollution make it worth the drive.',
    ],
    price: 230,
    unit: 'night',
    capacity: 4,
    family: true,
    pets: false,
    features: ['Homestead and shearers’ quarters', 'Station dinners', 'Self-drive 4WD tracks', 'Gorge walks', 'Stargazing deck', 'Fuel on site'],
    photos: [
      { name: 'coastline/stay-outback-station', alt: 'An outback homestead under a wide sky on red earth' },
      { name: 'coastline/dest-outback', alt: 'Red outback ranges at sunset' },
      { name: 'coastline/exp-stargazing', alt: 'A person stargazing under a starry night sky' },
    ],
  },
  {
    slug: 'headland-cabins',
    kind: 'stay',
    name: 'Headland Cabins',
    type: 'Cabin',
    dest: 'coast',
    region: 'Great Ocean Road, VIC',
    mapQuery: 'Apollo Bay VIC',
    summary: 'Architect cabins with big decks and bigger ocean views.',
    body: [
      'Three timber cabins on the headland, with floor-to-ceiling glass, a wood heater and a deck that catches the late sun. Watch the weather roll in from the Southern Ocean without leaving the couch.',
      'The coastal walk passes the front gate, and the town is ten minutes away for dinner.',
    ],
    price: 295,
    unit: 'night',
    capacity: 4,
    family: true,
    pets: false,
    features: ['Ocean views', 'Wood heater', 'Large deck', 'Full kitchen', 'Walk to the coastal trail', 'Two-night minimum on weekends'],
    photos: [
      { name: 'coastline/weekend-cabin', alt: 'A modern timber cabin with a deck overlooking the water' },
      { name: 'coastline/note-breakfast', alt: 'Coffee and breakfast on a deck overlooking the view' },
      { name: 'coastline/story-hero', alt: 'Dramatic coastal cliffs above the ocean' },
    ],
  },
];

export const experiences: Listing[] = [
  {
    slug: 'turquoise-bay-kayak-tour',
    kind: 'tour',
    name: 'Turquoise Bay Kayak Tour',
    type: 'Guided tour',
    dest: 'coast',
    region: 'Whitsundays, QLD',
    mapQuery: 'Airlie Beach QLD',
    summary: 'A half-day paddle to a hidden beach with a local guide.',
    body: [
      'Paddle stable sea kayaks across a sheltered bay to a beach you can only reach by water. Your guide grew up here and knows where the turtles feed and which rocks hide the best snorkelling.',
      'No experience needed. We stop for morning tea on the sand and a swim before paddling back.',
    ],
    price: 129,
    unit: 'person',
    capacity: 10,
    duration: '4 hours',
    times: ['7:30am', '12:30pm'],
    family: true,
    pets: false,
    features: ['Local guide', 'Kayaks and safety gear', 'Snorkel set', 'Morning tea', 'Ages 8+', 'Small groups (max 10)'],
    photos: [
      { name: 'coastline/card-kayak', alt: 'Two people kayaking in clear turquoise water near a rocky shore' },
      { name: 'coastline/exp-snorkel', alt: 'A snorkeller swimming over a coral reef' },
    ],
  },
  {
    slug: 'clifftop-coastal-walk',
    kind: 'tour',
    name: 'Clifftop Coastal Walk',
    type: 'Guided walk',
    dest: 'coast',
    region: 'Cape to Cape, WA',
    mapQuery: 'Cape Naturaliste WA',
    summary: 'A guided day on one of the country’s great coastal tracks.',
    body: [
      'Walk 14 kilometres of limestone cliffs, granite headlands and empty beaches with a guide who knows the plants, the birds and the stories of the coast.',
      'Lunch is a picnic on the cliffs. Transfers to and from the trailheads are included, so all you carry is water and a camera.',
    ],
    price: 95,
    unit: 'person',
    capacity: 12,
    duration: '6 hours',
    times: ['8:00am'],
    family: false,
    pets: false,
    features: ['Guide and transfers', 'Picnic lunch', '14 km, moderate', 'Ages 12+', 'Runs September to May'],
    photos: [
      { name: 'coastline/card-coastwalk', alt: 'A small group walking a clifftop coastal trail' },
      { name: 'coastline/story-hero', alt: 'Dramatic coastal cliffs above the ocean' },
    ],
  },
  {
    slug: 'rainforest-waterfall-walk',
    kind: 'tour',
    name: 'Rainforest Waterfall Walk',
    type: 'Guided walk',
    dest: 'hinterland',
    region: 'Atherton Tablelands, QLD',
    mapQuery: 'Atherton Tablelands QLD',
    summary: 'Three waterfalls, two swimming holes and a lot of ferns.',
    body: [
      'An easy half-day loop through World Heritage rainforest to three waterfalls, with time to swim at the two best holes. Your guide will point out tree kangaroos if they are about.',
      'Finish with a farm-gate morning tea of local cheese and fruit.',
    ],
    price: 110,
    unit: 'person',
    capacity: 12,
    duration: '5 hours',
    times: ['8:30am'],
    family: true,
    pets: false,
    features: ['Guide and transfers', 'Swimming stops', 'Farm-gate morning tea', 'Easy grade', 'Family friendly'],
    photos: [
      { name: 'coastline/card-waterfall', alt: 'A hiker standing near a rainforest waterfall' },
      { name: 'coastline/dest-hinterland', alt: 'A rainforest trail between tree ferns' },
    ],
  },
  {
    slug: 'whale-watching-cruise',
    kind: 'tour',
    name: 'Whale Watching Cruise',
    type: 'Cruise',
    dest: 'coast',
    region: 'Hervey Bay, QLD',
    mapQuery: 'Hervey Bay QLD',
    summary: 'Humpbacks, calm water and a marine biologist on board.',
    body: [
      'Every winter thousands of humpback whales rest in the sheltered water here on their way south. Our small boat gets you close (but never too close) with a marine biologist explaining what you are seeing.',
      'Runs July to early November. If you do not see a whale, you can come again for free.',
    ],
    price: 139,
    unit: 'person',
    capacity: 40,
    duration: '4 hours',
    times: ['8:00am', '1:00pm'],
    family: true,
    pets: false,
    features: ['Marine biologist on board', 'Morning or afternoon tea', 'Whale sighting promise', 'Runs July to November', 'All ages'],
    photos: [{ name: 'coastline/exp-whale', alt: 'A humpback whale breaching out of the ocean' }],
  },
  {
    slug: 'outback-stargazing-night',
    kind: 'tour',
    name: 'Outback Stargazing Night',
    type: 'Night tour',
    dest: 'outback',
    region: 'Flinders Ranges, SA',
    mapQuery: 'Flinders Ranges SA',
    summary: 'Telescopes, a campfire and the darkest skies you will ever see.',
    body: [
      'Out here the Milky Way casts a shadow. Spend an evening with an astronomer and big telescopes, learn the southern constellations and hear how First Nations people have read this sky for tens of thousands of years.',
      'Damper and hot chocolate by the fire are included.',
    ],
    price: 85,
    unit: 'person',
    capacity: 16,
    duration: '2.5 hours',
    times: ['8:00pm'],
    family: true,
    pets: false,
    features: ['Astronomer guide', 'Large telescopes', 'Campfire with damper', 'Warm blankets', 'All ages'],
    photos: [
      { name: 'coastline/exp-stargazing', alt: 'A person stargazing under a starry night sky' },
      { name: 'coastline/stars-camp', alt: 'A glowing tent under the Milky Way' },
    ],
  },
  {
    slug: 'beach-4wd-adventure',
    kind: 'tour',
    name: 'Beach 4WD Adventure',
    type: 'Day tour',
    dest: 'coast',
    region: 'Cooloola Coast, QLD',
    mapQuery: 'Rainbow Beach QLD',
    summary: 'A full day on the sand: coloured cliffs, lakes and dunes.',
    body: [
      'Ride the beach highway in a comfortable 4WD to coloured sand cliffs, a freshwater lake for a swim and dunes big enough to slide down.',
      'Your driver-guide handles the tides, the sand and the lunch.',
    ],
    price: 189,
    unit: 'person',
    capacity: 11,
    duration: '9 hours',
    times: ['7:00am'],
    family: true,
    pets: false,
    features: ['4WD transport', 'Driver-guide', 'Lunch', 'Lake swim', 'Ages 4+'],
    photos: [{ name: 'coastline/exp-4wd', alt: 'A 4WD vehicle driving on beach sand' }],
  },
  {
    slug: 'learn-to-surf',
    kind: 'tour',
    name: 'Learn to Surf Morning',
    type: 'Lesson',
    dest: 'coast',
    region: 'Byron Bay, NSW',
    mapQuery: 'Byron Bay NSW',
    summary: 'Small-group lessons on a gentle beach break.',
    body: [
      'Two hours in the water with an accredited coach, a soft board and a wetsuit. Most people stand up in the first lesson, and everyone laughs.',
      'Lessons run on a protected beach that suits beginners, with no more than six students per coach.',
    ],
    price: 79,
    unit: 'person',
    capacity: 12,
    duration: '2 hours',
    times: ['7:00am', '9:30am', '12:00pm'],
    family: true,
    pets: false,
    features: ['Accredited coaches', 'Board and wetsuit', 'Max six per coach', 'Ages 8+'],
    photos: [{ name: 'coastline/exp-surf', alt: 'People with surfboards on the beach' }],
  },
  {
    slug: 'oyster-farm-tour',
    kind: 'tour',
    name: 'Oyster Farm Wade & Taste',
    type: 'Food tour',
    dest: 'coast',
    region: 'Coffin Bay, SA',
    mapQuery: 'Coffin Bay SA',
    summary: 'Pull on waders, walk out to the racks, shuck your own.',
    body: [
      'Wade out to the oyster leases in the shallow bay with a third-generation farmer, learn how oysters grow and shuck a dozen straight from the water.',
      'Finish with a glass of local white on the shore.',
    ],
    price: 99,
    unit: 'person',
    capacity: 14,
    duration: '1.5 hours',
    times: ['10:00am', '2:00pm'],
    family: false,
    pets: false,
    features: ['Waders supplied', 'A dozen oysters', 'Local wine (18+)', 'Tide dependent'],
    photos: [{ name: 'coastline/exp-seafood', alt: 'Fresh oysters on a platter outdoors' }],
  },
  {
    slug: 'cape-lighthouse',
    kind: 'attraction',
    name: 'Cape Lighthouse & Lookout',
    type: 'Lookout',
    dest: 'coast',
    region: 'Byron Bay, NSW',
    mapQuery: 'Cape Byron Lighthouse',
    summary: 'A short walk to the light, with whales in season.',
    body: [
      'The walking loop to the lighthouse takes about an hour, with lookouts over the most easterly point of the mainland. Bring binoculars from June to October for passing whales.',
      'Parking fills early, so arrive before 9am or walk up from town.',
    ],
    price: 0,
    unit: 'entry',
    duration: '1 hour',
    family: true,
    pets: false,
    features: ['Free entry (parking fee)', 'Walking loop', 'Whale lookouts', 'Café at the top'],
    photos: [{ name: 'coastline/exp-lighthouse', alt: 'A white lighthouse on a green headland above the ocean' }],
  },
  {
    slug: 'red-gorge-swim',
    kind: 'attraction',
    name: 'Red Gorge Swimming Hole',
    type: 'National park',
    dest: 'outback',
    region: 'Karijini, WA',
    mapQuery: 'Karijini National Park WA',
    summary: 'Banded red walls and a cold, clear pool at the bottom.',
    body: [
      'A steep but short track drops into a gorge of banded red rock, ending at a deep, cold pool. It is one of the most remarkable swims in the country.',
      'Park entry passes are required. Check track and road conditions before you go, especially after rain.',
    ],
    price: 15,
    unit: 'vehicle',
    duration: 'Half day',
    times: ['Any time, sunrise to sunset'],
    family: true,
    pets: false,
    features: ['Park pass required', 'Steep track', 'Swimming hole', 'Carry plenty of water'],
    photos: [{ name: 'coastline/exp-gorge', alt: 'A red rock gorge with a pool of water' }],
  },
  {
    slug: 'wildlife-sanctuary',
    kind: 'attraction',
    name: 'Bush Wildlife Sanctuary',
    type: 'Wildlife',
    dest: 'coast',
    region: 'Kangaroo Island, SA',
    mapQuery: 'Kangaroo Island SA',
    summary: 'Kangaroos, koalas and a dusk walk with a ranger.',
    body: [
      'A not-for-profit sanctuary caring for injured and orphaned wildlife. Walk among kangaroos, see koalas up close and join the keepers for feeding time.',
      'Entry fees go straight to wildlife care. The dusk ranger walk is the best time to see nocturnal animals.',
    ],
    price: 35,
    unit: 'adult',
    duration: '2 hours',
    times: ['10:00am', '1:00pm', 'Dusk walk 5:30pm'],
    family: true,
    pets: false,
    features: ['Not-for-profit', 'Keeper talks', 'Dusk ranger walk', 'Accessible paths'],
    photos: [{ name: 'coastline/exp-wildlife', alt: 'Kangaroos in the wild' }],
  },
  {
    slug: 'hidden-lagoon-lookout',
    kind: 'attraction',
    name: 'Hidden Lagoon Lookout',
    type: 'Lookout',
    dest: 'coast',
    region: 'Whitsundays, QLD',
    mapQuery: 'Whitsunday Islands QLD',
    summary: 'The swirl of white sand and blue water everyone photographs.',
    body: [
      'A short climb through coastal bush leads to a lookout over a lagoon where tides swirl white silica sand through blue water. Reach it by boat or on a day tour.',
      'Go at low tide for the best patterns, and wear reef shoes for the walk down to the beach.',
    ],
    price: 0,
    unit: 'entry',
    duration: '1 hour',
    family: true,
    pets: false,
    features: ['Free entry', 'Boat access', 'Short climb', 'Best at low tide'],
    photos: [{ name: 'coastline/card-lookout', alt: 'View from a headland lookout over a lagoon and beach' }],
  },
];

export const tours = experiences.filter((e) => e.kind === 'tour');
export const attractions = experiences.filter((e) => e.kind === 'attraction');
export const allListings = [...stays, ...experiences];

/** Home page "Find your kind of elsewhere" tab cards (the design's first three are the All tab). */
export const homeCards = {
  all: [
    { kicker: 'Stay', title: 'Stay a little longer', body: 'Holiday parks, cabins and campsites in incredible places.', photo: 'coastline/card-glamping', alt: 'A glamping tent on a timber deck among trees', href: 'stays' },
    { kicker: 'Explore', title: 'Take the scenic route', body: 'Guided adventures with a local soul.', photo: 'coastline/card-kayak', alt: 'Two people kayaking in turquoise water', href: 'experiences' },
    { kicker: 'Discover', title: 'Feel the wonder', body: 'Attractions worth the detour.', photo: 'coastline/card-waterfall', alt: 'A hiker at a rainforest waterfall', href: 'attractions' },
  ],
};

export const notes = [
  {
    slug: 'the-art-of-doing-a-little-less',
    cat: 'Places to stay',
    title: 'The art of doing a little less.',
    summary: 'Slow days, simple pleasures and stays that recharge.',
    photo: 'coastline/note-sunrise',
    alt: 'Sunrise over a quiet beach',
    date: '2026-09-18',
    read: '5 min',
    body: `
<p>Most of us plan holidays the way we plan work weeks: a list, a schedule and a quiet sense that we are falling behind. The best trips we have taken were the opposite. One place, three nights, no plan beyond the tide chart.</p>
<h2>Pick one base, not four</h2>
<p>Every move costs half a day of packing, driving and checking in. Choose one stay you love and let the area come to you. A cabin near a walking track, a holiday park on the beach, a shack with a verandah. You will notice more in three slow days than in a week of driving.</p>
<h2>Leave the mornings empty</h2>
<p>Do not book anything before 10am. Swim, walk, sit with a coffee and watch what the light does. The mornings are when a place shows you what it is really like, before the day-trippers arrive.</p>
<h2>Plan one thing a day</h2>
<p>A single anchor keeps a slow trip from turning into a lost one. A kayak tour, a lookout at sunset, lunch at the bakery everyone mentions. Do that one thing well and let the rest of the day fill itself.</p>
<h2>Choose stays that make it easy</h2>
<ul>
<li>A deck or verandah you will actually sit on.</li>
<li>A kitchen, so dinner can be fish from the co-op and whatever is at the farm gate.</li>
<li>Walking distance to water or a track, so you can leave the car parked.</li>
</ul>
<p>Doing less is not lazy. It is how you come home rested instead of needing another holiday.</p>`,
  },
  {
    slug: 'small-adventures-big-little-memories',
    cat: 'Experiences',
    title: 'Small adventures. Big little memories.',
    summary: 'Ideas for family days out in extraordinary places.',
    photo: 'coastline/note-family',
    alt: 'A family walking together on a forest trail',
    date: '2026-08-29',
    read: '4 min',
    body: `
<p>Kids do not remember the itinerary. They remember the crab under the rock, the waterfall that was freezing, the night they saw a wombat by torchlight. Here is how to plan days that make those moments more likely.</p>
<h2>Keep walks short and rewarding</h2>
<p>Choose tracks under five kilometres that end at something: a swimming hole, a lookout, a beach. Little legs go further when there is a reward in sight. Rainforest loops in the hinterland are perfect, with shade, boardwalks and plenty to spot.</p>
<h2>Go guided once</h2>
<p>A good guide turns a beach into a treasure hunt. Family-friendly kayak tours, whale cruises and wildlife sanctuaries are run by people who are brilliant with kids and know exactly where to look.</p>
<h2>Build in downtime</h2>
<p>One big outing a day is plenty. Afternoons at the holiday park pool or on the sand are where friendships with the kids next door happen.</p>
<h2>Pack for the unplanned</h2>
<ul>
<li>A spare set of clothes, because someone will get wet.</li>
<li>A head torch each, for the after-dark walk.</li>
<li>A small notebook for drawing what they find.</li>
</ul>`,
  },
  {
    slug: 'your-first-holiday-park-escape',
    cat: 'Travel tips',
    title: 'Your first holiday park escape.',
    summary: 'Everything you need to know for a memorable stay.',
    photo: 'coastline/note-breakfast',
    alt: 'Coffee and breakfast on a deck overlooking the view',
    date: '2026-08-07',
    read: '6 min',
    body: `
<p>Holiday parks have changed. Many now have architect cabins, glamping tents and camp kitchens nicer than our own. If you have never stayed in one, here is what to expect.</p>
<h2>Choose your type of site</h2>
<ul>
<li><strong>Cabins</strong> come with beds, a bathroom and usually a kitchen. Bring food and clothes, little else.</li>
<li><strong>Powered sites</strong> suit caravans, campervans and campers who like a fridge and lights.</li>
<li><strong>Unpowered sites</strong> are cheaper, quieter and often closer to the water.</li>
<li><strong>Glamping</strong> sits in between: canvas walls, a real bed and someone else did the setting up.</li>
</ul>
<h2>Book early for school holidays</h2>
<p>Beachfront parks book out months ahead for summer and Easter. Outside those dates you can often book a week or two out, and prices drop too.</p>
<h2>Know the etiquette</h2>
<p>Quiet hours usually start at 10pm. Keep to your site, wash up at the camp kitchen as you go, and keep dogs on a lead where they are allowed. A friendly wave goes a long way.</p>
<h2>What to pack</h2>
<p>Thongs for the shower block, a headlamp, a picnic blanket, insect repellent and a bag for rubbish. Check whether linen is included in cabins; many parks charge for it.</p>`,
  },
  {
    slug: 'pet-friendly-coastal-escapes',
    cat: 'Places to stay',
    title: 'Coastal escapes the dog will love too.',
    summary: 'How to find pet-friendly stays and beaches that welcome dogs.',
    photo: 'coastline/note-dog',
    alt: 'A dog running happily on a beach',
    date: '2026-07-16',
    read: '4 min',
    body: `
<p>Leaving the dog at home can take the shine off a getaway. More stays welcome pets than you might think, as long as you plan a little.</p>
<h2>Check the fine print</h2>
<p>"Pet friendly" can mean anything from a fenced yard to one small dog on a lead. Look for the size limit, whether dogs can be left alone, and any extra cleaning fee. Our listings show a pets welcome tag only when the host has confirmed it.</p>
<h2>Know your beaches</h2>
<p>Off-leash beaches are usually signposted at the access track, and many only allow dogs at certain times of day. National parks generally do not allow dogs at all, so check before you head out.</p>
<h2>Bring a home kit</h2>
<ul>
<li>Their bed, bowls and a familiar toy.</li>
<li>A long lead and poo bags (more than you think).</li>
<li>A towel for sandy paws before they jump on the couch.</li>
</ul>`,
  },
  {
    slug: 'outback-road-trip-checklist',
    cat: 'Travel tips',
    title: 'The outback road trip checklist.',
    summary: 'Fuel, water, phone coverage and the rules of long roads.',
    photo: 'coastline/note-roadtrip',
    alt: 'A vehicle on a long straight outback road',
    date: '2026-06-24',
    read: '7 min',
    body: `
<p>The outback is the trip of a lifetime, and it rewards preparation. Distances are long, services are few and the weather can close roads. Use this list before you go.</p>
<h2>Fuel and water</h2>
<p>Fill up at every chance, even if you are half full. Carry at least seven litres of water per person per day, plus extra in the vehicle.</p>
<h2>Communication</h2>
<p>Mobile coverage disappears quickly beyond the towns. Consider hiring a satellite phone or personal locator beacon, and tell someone your route and when you expect to arrive.</p>
<h2>Road conditions</h2>
<p>Check state road reports every morning. Unsealed roads can close after rain, and driving on a closed road can bring heavy fines and damage the track.</p>
<h2>Wildlife and timing</h2>
<p>Avoid driving at dawn, dusk and night, when kangaroos and cattle are most active. Plan shorter driving days than you think you need; the stops are the point.</p>
<h2>Respect country</h2>
<p>Some areas need permits to visit Aboriginal land. Stay on marked tracks, take all rubbish with you and ask before photographing people or sites.</p>`,
  },
  {
    slug: 'how-to-plan-a-long-weekend',
    cat: 'Itineraries',
    title: 'How to plan a long weekend that feels like a week.',
    summary: 'A simple three-day shape for any escape.',
    photo: 'coastline/note-map',
    alt: 'Trip planning with a map and coffee',
    date: '2026-06-02',
    read: '5 min',
    body: `
<p>Three nights is the sweet spot: long enough to switch off, short enough to fit around work. Here is the shape we use.</p>
<h2>Friday: arrive, do nothing</h2>
<p>Leave early afternoon so you arrive in daylight. Unpack, walk to the water, eat simply. Resist the urge to do anything else.</p>
<h2>Saturday: one big thing</h2>
<p>This is the day for the tour, the long walk or the drive to the lookout. Book it before you leave home so it is locked in.</p>
<h2>Sunday: local and slow</h2>
<p>Markets, the bakery, a swim, a long lunch. Ask your host where they would go on their day off.</p>
<h2>Monday: one more morning</h2>
<p>Check out as late as you can and take the scenic way home. One more night under the stars makes all the difference.</p>`,
  },
];

export const noteCats = ['All', ...Array.from(new Set(notes.map((n) => n.cat)))];

export const values = [
  { icon: 'feather', title: 'Nature first', body: 'We choose stays and tours that care for the places they are in, and we say so only when we have checked.' },
  { icon: 'people', title: 'Local soul', body: 'Most of our partners are small, local and family run. Your money stays in the community you visit.' },
  { icon: 'mountain', title: 'Lasting memories', body: 'Fewer, better moments over packed itineraries. The trip should feel like a holiday, not a project.' },
];

export const story = {
  milestones: [
    { year: '2017', title: 'A weekend that went further', body: 'Two friends get lost on a back road, find a beach with no one on it and start keeping a list of places like it.' },
    { year: '2019', title: 'The list goes online', body: 'The first 20 stays and tours, all small, all visited in person. Bookings are taken by email.' },
    { year: '2022', title: 'Partners, not listings', body: 'We start working directly with hosts and guides, with a simple partner promise around care for country and community.' },
    { year: 'Today', title: 'Still small on purpose', body: 'Hundreds of escapes across the coast, hinterland and outback, and we still visit every one before it goes live.' },
  ],
  principles: [
    'Leave no trace: take everything out that you bring in.',
    'Stay on marked tracks and respect closures.',
    'Ask before photographing people, and learn whose Country you are on.',
    'Buy local: fill up, eat out and shop in the towns you pass through.',
    'Give wildlife space, and never feed it.',
    'Book with operators who hold eco or cultural accreditation where available.',
  ],
};

export const faqs = [
  { cat: 'Planning', q: 'What kind of escape can I find?', a: 'Places to stay (holiday parks, cabins, glamping, beach shacks, campsites and station stays), guided tours and lessons, and attractions such as lookouts, gorges and wildlife sanctuaries across coastal, hinterland and outback Australia.' },
  { cat: 'Families & pets', q: 'Can I bring the whole family?', a: 'Yes. Look for the family-friendly tag on any stay or tour. Each listing shows its minimum ages, how many people a stay sleeps and whether cots or bunks are available.' },
  { cat: 'Families & pets', q: 'Are there pet-friendly places to stay?', a: 'Plenty. Filter by "Pets welcome" on the places to stay page. Each host sets their own rules on size, number of pets and whether dogs can be left alone, so check the listing before you book.' },
  { cat: 'Planning', q: 'How do I plan my visit?', a: 'Choose a destination, pick one stay as your base and add one or two experiences nearby. Our field notes have itineraries and checklists, and you can call or email us for help putting a trip together.' },
  { cat: 'Booking', q: 'How does booking work?', a: 'Choose your dates and guests on any listing and send a booking request. We confirm availability with the host or operator and email you within one business day. You only pay once your booking is confirmed.' },
  { cat: 'Booking', q: 'What if my plans change?', a: 'Each listing shows its cancellation policy before you book. Most stays offer a full refund up to 14 days before arrival, and most tours up to 48 hours before departure. If a tour is cancelled for weather, you can rebook or get a full refund.' },
  { cat: 'Booking', q: 'Are prices per person or per booking?', a: 'Stays are priced per night for the whole stay (up to the number of guests shown). Tours are priced per person. Attractions show the entry price per adult or per vehicle. All prices are in Australian dollars and include GST.' },
  { cat: 'On the road', q: 'Do I need a 4WD?', a: 'Not for most escapes. Where a stay or attraction needs a 4WD or a high-clearance vehicle, we say so on the listing. For outback trips, always check road conditions before you set off.' },
  { cat: 'On the road', q: 'Will I have phone coverage?', a: 'Coastal and hinterland stays usually have coverage, but some remote cabins and station stays do not. Listings mention it where coverage is limited. That is often part of the appeal.' },
  { cat: 'Travel respectfully', q: 'How do you choose your partners?', a: 'We visit every stay and tour before it goes live, and partners agree to a simple promise around care for the environment, fair treatment of staff and respect for Traditional Owners. We say "eco-certified" only when an operator holds a recognised accreditation.' },
  { cat: 'Travel respectfully', q: 'How can I travel more responsibly?', a: 'Stay longer in one place, book local operators, keep to marked tracks, take your rubbish home and learn about the Traditional Owners of the land you visit. Our "Travel respectfully" guide has more ideas.' },
];

export const faqCats = ['All', ...Array.from(new Set(faqs.map((f) => f.cat)))];
export const homeFaqs = faqs.slice(0, 4);

/** Gallery: every photo, tagged by destination. */
export const gallery: { name: string; alt: string; dest: DestKey; caption: string }[] = [
  { name: 'coastline/home-hero', alt: 'Aerial view of a turquoise bay and white sand beach', dest: 'coast', caption: 'A bay you can only reach by water' },
  { name: 'coastline/dest-hinterland', alt: 'A rainforest trail with tree ferns', dest: 'hinterland', caption: 'Morning light in the rainforest' },
  { name: 'coastline/dest-outback', alt: 'Red ranges at sunset', dest: 'outback', caption: 'The ranges at last light' },
  { name: 'coastline/card-kayak', alt: 'Kayakers in turquoise water', dest: 'coast', caption: 'Paddling to the hidden beach' },
  { name: 'coastline/card-waterfall', alt: 'A hiker at a rainforest waterfall', dest: 'hinterland', caption: 'The third waterfall' },
  { name: 'coastline/stars-camp', alt: 'A tent under the Milky Way', dest: 'outback', caption: 'Lights out, stars on' },
  { name: 'coastline/card-glamping', alt: 'A glamping tent on a deck', dest: 'coast', caption: 'Canvas walls, ocean view' },
  { name: 'coastline/exp-gorge', alt: 'A red gorge with a pool', dest: 'outback', caption: 'The swim at the bottom of the gorge' },
  { name: 'coastline/weekend-cabin', alt: 'A cabin deck overlooking the water', dest: 'coast', caption: 'One more night on the headland' },
  { name: 'coastline/exp-whale', alt: 'A humpback whale breaching', dest: 'coast', caption: 'Winter visitors' },
  { name: 'coastline/stay-eco-cabin', alt: 'A timber cabin in the forest', dest: 'hinterland', caption: 'Rain on the roof' },
  { name: 'coastline/exp-wildlife', alt: 'Kangaroos', dest: 'coast', caption: 'Locals at dusk' },
  { name: 'coastline/card-lookout', alt: 'A lagoon from a headland lookout', dest: 'coast', caption: 'Low tide patterns' },
  { name: 'coastline/stay-outback-station', alt: 'An outback homestead', dest: 'outback', caption: 'Station life' },
  { name: 'coastline/stay-river-camp', alt: 'A tent by the river', dest: 'hinterland', caption: 'River bend camp' },
  { name: 'coastline/exp-lighthouse', alt: 'A lighthouse on a headland', dest: 'coast', caption: 'The walk to the light' },
];
