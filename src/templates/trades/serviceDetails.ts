// Detail-page content for each service, keyed by slug (see `services` in data.ts).
// The kitchen entry is the original design's copy; the others follow the same structure.
import { inclusions, tiers, kitchenFaqs } from './data';

export interface ServiceDetail {
  h1: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  serviceType: string;
  image: { name: string; alt: string; label: string };
  includedIntro: string;
  inclusions: string[];
  tiers: { name: string; price: string; body: string }[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'kitchen-renovations': {
    h1: 'Kitchen renovations in Brisbane',
    breadcrumb: 'Kitchen renovations',
    metaTitle: 'Kitchen Renovations in Brisbane',
    metaDescription: 'Kitchen renovations in Brisbane with design, custom cabinetry and building from one team. 8 to 12 weeks on site, from $28,000 inc. GST, fixed-price quotes.',
    intro: 'Design, cabinetry and building from one team. A typical Ashgrove kitchen takes 8–12 weeks on site and starts from $28,000 including GST.',
    serviceType: 'Kitchen renovation',
    image: { name: 'trades/detail-kitchen-wide', alt: 'Renovated kitchen with a central island and timber cabinetry', label: 'wide photo — kitchen with island, timber cabinetry' },
    includedIntro: 'Every kitchen is quoted as a fixed price, with one point of contact from first sketch to final clean.',
    inclusions,
    tiers,
    faqHeading: 'Kitchen renovation FAQs',
    faqs: kitchenFaqs,
  },
  'bathroom-renovations': {
    h1: 'Bathroom renovations in Brisbane',
    breadcrumb: 'Bathrooms & ensuites',
    metaTitle: 'Bathroom & Ensuite Renovations in Brisbane',
    metaDescription: 'Bathroom and ensuite renovations in Brisbane, waterproofed to AS 3740 and finished with custom vanities from our workshop. From $22,000 inc. GST, usually 4 to 6 weeks on site.',
    intro: 'Bathrooms and ensuites stripped back, waterproofed properly and finished with a vanity made in our workshop. Most take 4 to 6 weeks on site and start from $22,000 including GST.',
    serviceType: 'Bathroom renovation',
    image: { name: 'trades/detail-bathrooms-wide', alt: 'Renovated bathroom with a freestanding bath and timber vanity', label: 'wide photo: bathroom, freestanding bath, timber vanity' },
    includedIntro: 'Wet areas are where shortcuts show up years later, so we do the hidden work carefully and document it.',
    inclusions: [
      'Design consultation, layout drawings and a fixtures schedule',
      'Demolition, asbestos testing where needed, and waste removal',
      'Licensed plumbing and electrical, including exhaust fan and lighting',
      'Waterproofing to AS 3740 by a licensed applicator, with certificate',
      'Tiling by our regular crew, with falls checked before tiles go down',
      'Custom vanity and shaving cabinet made in our Northgate workshop',
    ],
    tiers: [
      { name: 'Ensuite or powder room', price: 'From $22k', body: 'Same layout, new waterproofing, tiles, fixtures and a custom vanity.' },
      { name: 'Family bathroom', price: '$30–45k', body: 'Bath and separate shower, layout changes, niches and full-height tiling.' },
      { name: 'Statement bathroom', price: '$50k+', body: 'Freestanding bath, stone, heated towel rails and bespoke joinery.' },
    ],
    faqHeading: 'Bathroom renovation FAQs',
    faqs: [
      { q: 'How much does a bathroom renovation cost in Brisbane?', a: 'Our ensuites start from about $22,000 including GST, and most family bathrooms land between $30,000 and $45,000. The biggest variables are layout changes, tile choice and whether plumbing has to move.' },
      { q: 'How long does a bathroom renovation take?', a: 'Usually 4 to 6 weeks on site. Waterproofing needs time to cure before tiling, and we never rush that step. You get a written schedule before we start.' },
      { q: 'Can we keep using the house during a bathroom renovation?', a: 'Yes, if you have a second toilet and shower. If it is your only bathroom, we can arrange a hire unit or plan the work so the toilet is out of action for as few days as possible.' },
    ],
  },
  'custom-joinery': {
    h1: 'Custom joinery in Brisbane',
    breadcrumb: 'Custom joinery',
    metaTitle: 'Custom Joinery & Built-ins in Brisbane',
    metaDescription: 'Built-in wardrobes, libraries, entertainment units and window seats, designed for your home and made in our Northgate workshop. From $4,500 inc. GST.',
    intro: 'Wardrobes, bookshelves, entertainment units and window seats, measured on site and made in our Northgate workshop. Smaller pieces start from $4,500 including GST, and most are installed within 6 to 8 weeks of sign-off.',
    serviceType: 'Custom joinery and cabinetry',
    image: { name: 'trades/detail-joinery-wide', alt: 'Floor-to-ceiling built-in timber shelving in a living room', label: 'wide photo: built-in shelving, living room' },
    includedIntro: 'Built-ins should look like they came with the house. We scribe to your walls, match existing trims and finish everything by hand.',
    inclusions: [
      'On-site measure and design drawings you sign off before we cut',
      'Timber, veneer or 2-pac finishes, with samples to take home',
      'Construction in our workshop, not flat-packed from a supplier',
      'Soft-close hardware, internal lighting and power points as needed',
      'Installation, scribing to walls and ceilings, and trim matching',
      'A care guide for your finish and a check-in after 12 months',
    ],
    tiers: [
      { name: 'Single piece', price: 'From $4.5k', body: 'A window seat, desk nook or built-in bookshelf.' },
      { name: 'Room package', price: '$9–18k', body: 'Walk-in or built-in wardrobes, or a full entertainment wall.' },
      { name: 'Whole home', price: '$25k+', body: 'Matching joinery across several rooms, often alongside a renovation.' },
    ],
    faqHeading: 'Custom joinery FAQs',
    faqs: [
      { q: 'How much do custom built-ins cost?', a: 'A single piece such as a window seat or bookshelf starts from about $4,500 including GST. A pair of built-in wardrobes or an entertainment wall is usually $9,000 to $18,000, depending on size, finish and hardware.' },
      { q: 'How long does custom joinery take?', a: 'Allow 2 to 3 weeks for design and sign-off, then 4 to 6 weeks in the workshop. Installation is usually one to three days per room.' },
      { q: 'Is custom joinery better than flat-pack?', a: 'It costs more, but it is built from heavier materials, fitted to your walls rather than to standard sizes, and can be repaired or refinished later. For awkward spaces and older homes, it is often the only way to get a clean fit.' },
    ],
  },
  'extensions-renovations': {
    h1: 'Extensions & renovations in Brisbane',
    breadcrumb: 'Extensions & renovations',
    metaTitle: 'House Extensions & Renovations in Brisbane',
    metaDescription: 'Rear extensions, raise-and-builds and whole-home renovations across Brisbane, managed from approvals to handover by one licensed builder. From $120,000 inc. GST.',
    intro: 'Rear extensions, raise-and-builds and whole-home renovations, run by one licensed builder from approvals to handover. Projects start from around $120,000 including GST and usually take 4 to 8 months on site.',
    serviceType: 'Home extension and renovation',
    image: { name: 'trades/detail-extensions-wide', alt: 'Rear extension with large sliding doors opening onto a timber deck', label: 'wide photo: rear extension opening onto deck' },
    includedIntro: 'Bigger projects live or die on planning. We spend the time upfront so the build itself runs to a schedule you can plan your life around.',
    inclusions: [
      'Feasibility visit and an honest budget conversation before drawings',
      'Coordination with your architect or our designer, engineer and certifier',
      'Building approval, plus town planning where the site needs it',
      'Structural work, framing, roofing and cladding by our own team',
      'Kitchen, bathroom and joinery packages from our workshop',
      'Home warranty insurance and a written construction schedule',
    ],
    tiers: [
      { name: 'Rear extension', price: 'From $120k', body: 'A new living area or bedroom wing tied into the existing house.' },
      { name: 'Raise and build in', price: '$250–450k', body: 'Lift the house, build in underneath and reconfigure both levels.' },
      { name: 'Whole-home renovation', price: '$350k+', body: 'A full reworking of layout, services and finishes.' },
    ],
    faqHeading: 'Extension & renovation FAQs',
    faqs: [
      { q: 'How much does a house extension cost in Brisbane?', a: 'Our rear extensions start from around $120,000 including GST. Raise-and-build-in projects are commonly $250,000 to $450,000. Site access, slope, structural work and finishes move the number most, which is why we price from drawings rather than per square metre.' },
      { q: 'Do I need approval for an extension?', a: 'Almost always. You will need building approval from a private certifier, and some sites also need a town planning approval, for example homes in Brisbane City Council’s character overlay. We work this out at the feasibility stage so it is in your timeline from the start.' },
      { q: 'Should I use an architect or a design-and-build builder?', a: 'Both work. Architects are worth it for complex sites or when design is the priority. If you want one team responsible for design, cost and build, we can bring in our designer. Around a third of our projects are architect-led.' },
    ],
  },
  'decks-outdoor-rooms': {
    h1: 'Decks & outdoor rooms in Brisbane',
    breadcrumb: 'Decks & outdoor rooms',
    metaTitle: 'Hardwood Decks & Outdoor Rooms in Brisbane',
    metaDescription: 'Hardwood decks, pergolas and outdoor kitchens built for Queensland weather, with approvals handled. From $18,000 inc. GST, usually 3 to 6 weeks on site.',
    intro: 'Hardwood decks, roofed outdoor rooms and outdoor kitchens built for Queensland sun and storms. Decks start from $18,000 including GST and most take 3 to 6 weeks on site.',
    serviceType: 'Deck and outdoor room construction',
    image: { name: 'trades/detail-decks-wide', alt: 'Spotted gum deck with a roofed outdoor living area', label: 'wide photo: spotted gum deck, roofed outdoor room' },
    includedIntro: 'A good deck is mostly about what you cannot see: footings, ventilation, fixings and flashing. We build those to last as long as the boards.',
    inclusions: [
      'Design, engineering and approvals, including certifier sign-off',
      'Concrete footings and a treated pine or steel subframe',
      'Class 1 or class 2 hardwood decking, chosen with you',
      'Stainless or hot-dip galvanised fixings for our coastal climate',
      'Balustrades, stairs, and roof or pergola where specified',
      'First coat of oil and a maintenance guide at handover',
    ],
    tiers: [
      { name: 'Ground-level deck', price: 'From $18k', body: 'A low deck off the living area, no roof.' },
      { name: 'Raised deck', price: '$30–55k', body: 'Elevated deck with balustrade and stairs, often off a Queenslander.' },
      { name: 'Outdoor room', price: '$60k+', body: 'Roofed deck with lighting, fans and an outdoor kitchen.' },
    ],
    faqHeading: 'Deck & outdoor room FAQs',
    faqs: [
      { q: 'How much does a hardwood deck cost in Brisbane?', a: 'Our ground-level decks start from about $18,000 including GST. Raised decks with balustrades and stairs are typically $30,000 to $55,000, and roofed outdoor rooms start around $60,000.' },
      { q: 'Do I need council approval for a deck?', a: 'Often, yes. Building approval is usually needed for raised or roofed decks, and boundary setbacks can apply. Some low, unroofed decks are exempt. We check your site and handle approvals with a certifier. Our journal has a fuller guide.' },
      { q: 'Which timber is best for a Brisbane deck?', a: 'Spotted gum is our most popular choice for its durability and colour. Blackbutt is a lighter-coloured alternative. Both are also suitable for many bushfire-prone sites. We will bring samples to your site visit.' },
    ],
  },
  'heritage-restoration': {
    h1: 'Heritage restoration in Brisbane',
    breadcrumb: 'Heritage restoration',
    metaTitle: 'Queenslander & Heritage Restoration in Brisbane',
    metaDescription: 'Restoration of Queenslanders and workers’ cottages in Brisbane: VJ walls, fretwork, verandahs and timber windows, repaired by builders and joiners. Quoted per project.',
    intro: 'Queenslanders and workers’ cottages repaired with the same materials and joinery details they were built with. Every heritage project is different, so we quote after a detailed inspection.',
    serviceType: 'Heritage home restoration',
    image: { name: 'trades/detail-heritage-wide', alt: 'Restored Queenslander verandah with timber balustrade and fretwork', label: 'wide photo: restored Queenslander verandah' },
    includedIntro: 'We repair before we replace, and when something has to go, we remake it in our workshop to match the original profile.',
    inclusions: [
      'Condition inspection and a written repair plan with priorities',
      'Advice on Brisbane City Council character and heritage requirements',
      'Lead paint and asbestos testing before any sanding or demolition',
      'Restoration of VJ walls, fretwork, brackets and verandah balustrades',
      'Timber window and door repair, including new sashes made to match',
      'Stump, floor and verandah repairs by our carpentry team',
    ],
    tiers: [
      { name: 'Repairs', price: 'From $8k', body: 'Targeted fixes such as windows, a verandah section or rotted boards.' },
      { name: 'Facade restoration', price: '$40–90k', body: 'Verandahs, fretwork, windows and front stairs brought back together.' },
      { name: 'Full restoration', price: 'Quoted', body: 'A staged plan for the whole house, often alongside a renovation.' },
    ],
    faqHeading: 'Heritage restoration FAQs',
    faqs: [
      { q: 'Can I renovate a Queenslander in a character overlay?', a: 'Yes, but some changes need approval. Brisbane City Council’s character overlay generally protects how a pre-1947 house looks from the street, so demolition and front changes are restricted while rear changes are often more flexible. We help you plan within those rules.' },
      { q: 'Is it cheaper to repair or replace old timber windows?', a: 'Repair is usually cheaper and keeps the character, provided the frames are sound. Where a sash is beyond saving, we make a new one in our workshop to match the original profile.' },
      { q: 'Do old houses have asbestos or lead paint?', a: 'Many do. Homes built before 1990 may contain asbestos, and older paint layers often contain lead. We test before disturbing anything and use licensed removalists where needed.' },
    ],
  },
};
