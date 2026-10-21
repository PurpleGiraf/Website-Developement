// Page content for the Cellar Door template (story, team, venues, FAQs).
// Sample copy for a fictional winery: replace with the client's own before launch.

export const timeline = [
  { year: '1994', title: 'First vines on the ridge', body: 'Tom and Ruth Marlow plant four hectares of Chardonnay and Pinot Noir on an old apple orchard above Lenswood.' },
  { year: '1999', title: 'The first vintage', body: 'Eight barrels, made in the shed with borrowed equipment. Most of it is poured for friends and neighbours.' },
  { year: '2008', title: 'The cellar door opens', body: 'The original packing shed becomes a tasting room, with a stone bar built from rock cleared from the vineyard.' },
  { year: '2016', title: 'The next generation', body: 'Daughter Claire Marlow returns from vintages in Burgundy and the Mornington Peninsula to take over the winemaking.' },
  { year: '2019', title: 'The Verandah', body: 'We open a small restaurant on the verandah, cooking from the kitchen garden and producers across the Hills.' },
  { year: 'Today', title: 'Fourteen hectares, still by hand', body: 'Six wines, a restaurant and a barrel hall for celebrations, and every row still picked by hand.' },
];

export const vineyard = [
  { k: 'Elevation', v: '490 – 540 m' },
  { k: 'Area', v: '14 hectares' },
  { k: 'Soils', v: 'Ironstone over clay' },
  { k: 'Varieties', v: 'Chardonnay, Pinot Noir, Shiraz, Sauvignon Blanc' },
  { k: 'Harvest', v: 'By hand, March to April' },
  { k: 'Farming', v: 'No herbicides, cover crops and composted marc' },
];

export const team = [
  { name: 'Claire Marlow', role: 'Winemaker', bio: 'Grew up on the ridge and came home in 2016 after vintages in Burgundy. Makes every wine on site.', photo: 'cellar-door/about-winemaker', alt: 'A winemaker holding a bunch of black grapes' },
  { name: 'Ruth Marlow', role: 'Co-founder & viticulturist', bio: 'Planted the first vines with Tom in 1994 and still walks every row before harvest, usually with Claire.', photo: 'cellar-door/about-family', alt: 'Ruth and Claire Marlow tending young vines' },
  { name: 'Sam Okafor', role: 'Head chef, The Verandah', bio: 'Builds the menu each week around the kitchen garden and what the Hills growers bring in.', photo: 'cellar-door/visit-dish', alt: 'A dish from the Verandah kitchen' },
];

export const venues = [
  { name: 'The Barrel Hall', cap: '90 seated · 140 standing', body: 'Timber trusses, candlelight and the barrels lining the walls. Our wet-weather option and the room for dinner and dancing.', photo: 'cellar-door/visit-barrel-hall' },
  { name: 'The Lawn', cap: '150 for ceremonies', body: 'An open lawn on the crest of the ridge, looking east over the vines to the Lenswood valley.', photo: 'cellar-door/weddings-ceremony' },
  { name: 'The Verandah', cap: '60 seated', body: 'For smaller weddings, rehearsal dinners and long lunches, with the kitchen garden at your back.', photo: 'cellar-door/home-verandah' },
];

export const packages = [
  { name: 'Ceremony', price: 'From $2,500', body: 'Exclusive use of the Lawn for one hour, chairs for up to 150, a sparkling toast and a wet-weather plan in the Barrel Hall.' },
  { name: 'Long Table', price: 'From $165 pp', body: 'Canapés, a shared three-course menu and five hours of Hillside wines. Minimum 60 guests, Saturday evenings.' },
  { name: 'Weekday Celebration', price: 'From $135 pp', body: 'The same menu and drinks for Thursday, Friday and Sunday events. Ideal for birthdays, rehearsal dinners and work functions.' },
];

export const weddingSteps = [
  { n: '01', title: 'Enquire', body: 'Tell us your date, numbers and the feel you are after. We reply within two business days with availability.' },
  { n: '02', title: 'Visit the ridge', body: 'Walk the spaces with our events team over a tasting, and talk through menus and timings.' },
  { n: '03', title: 'Plan the day', body: 'We build the run sheet, menu and wine list with you, and introduce trusted local suppliers.' },
];

export const clubSteps = [
  { n: '01', title: 'Choose a tier', body: 'Cellar or Reserve. No joining fee and no minimum term.' },
  { n: '02', title: 'We choose the wines', body: 'Each March and September our winemaker selects the release. You can swap or add wines before it ships.' },
  { n: '03', title: 'Enjoy the perks', body: 'Member pricing, free tastings and first access to small-batch wines and events.' },
];

export const faqCats = ['All', 'Visiting', 'Tastings & lunch', 'Wine orders', 'Club', 'Events & weddings'];

export const faqs = [
  { cat: 'Visiting', q: 'When is the cellar door open?', a: 'Thursday to Monday, 11am to 5pm. Lunch on the Verandah is served from noon to 3pm on the same days. We are closed Tuesdays, Wednesdays, Christmas Day and Good Friday.' },
  { cat: 'Visiting', q: 'How far is Hillside from Adelaide?', a: 'About forty minutes from the CBD via the South Eastern Freeway and Lobethal Road. There is free parking on site, including accessible bays near the entrance.' },
  { cat: 'Visiting', q: 'Are children and dogs welcome?', a: 'Children are welcome with an adult and there is space on the lawn to run around. Well-behaved dogs on a lead are welcome on the lawn and verandah, but not inside the tasting room or restaurant.' },
  { cat: 'Visiting', q: 'Is the cellar door accessible?', a: 'Yes. The tasting room, verandah and bathrooms are step-free, and there is an accessible parking bay at the door. Let us know when you book if you need anything else.' },
  { cat: 'Tastings & lunch', q: 'Do I need to book a tasting?', a: 'Walk-ins are welcome when there is room, but we recommend booking on weekends and public holidays. Groups of eight or more must book ahead.' },
  { cat: 'Tastings & lunch', q: 'Is the tasting fee refunded if I buy wine?', a: 'The $20 Cellar Door Tasting fee is waived when you buy three or more bottles. Hillside Club members taste for free.' },
  { cat: 'Tastings & lunch', q: 'Can you cater for dietary requirements?', a: 'Yes. Vegetarian, vegan, gluten-free and most allergy requirements can be catered for at lunch with notice. Add them to your booking notes or call us.' },
  { cat: 'Tastings & lunch', q: 'What is your cancellation policy?', a: 'Tastings can be cancelled or changed free of charge up to 24 hours before. For Verandah Lunch and the Vineyard Walk, please give 48 hours notice or a $30 per person fee applies.' },
  { cat: 'Wine orders', q: 'Do you deliver?', a: 'Yes, across Australia. Delivery is free on six bottles or more, otherwise a flat $15. Orders ship from the cellar within three business days. Someone 18 or over must sign for the delivery.' },
  { cat: 'Wine orders', q: 'Can I mix a six-pack?', a: 'Yes. Any six bottles qualify for free delivery, in any combination.' },
  { cat: 'Wine orders', q: 'What if a bottle arrives damaged or faulty?', a: 'Send us a photo within seven days and we will replace it or refund you. If a wine is faulty, return the bottle with at least two thirds remaining and we will replace it.' },
  { cat: 'Club', q: 'Is there a minimum membership term?', a: 'No. There is no joining fee and you can pause or cancel any time, as long as you tell us before the release ships.' },
  { cat: 'Club', q: 'Can I choose my own wines?', a: 'Yes. We email the winemaker\'s selection two weeks before each release, and you can swap or add any wines before it ships.' },
  { cat: 'Events & weddings', q: 'How far ahead should I book a wedding?', a: 'Saturdays from October to April are usually booked twelve to eighteen months ahead. Weekday and winter dates are often available at shorter notice.' },
  { cat: 'Events & weddings', q: 'Can we bring our own caterer or wine?', a: 'All food is prepared by our kitchen and all drinks are served from our licensed bar. This keeps the day simple and within our liquor licence.' },
];
