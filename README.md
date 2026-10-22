# Website templates (Astro)

Five industry website templates built with [Astro](https://astro.build). Templates 01 to 03 have eight pages each:
Home, About, Services, Service detail, Blog, FAQ, Booking/Quote and Contact. Template 04 is a motion-led winery site:
Home, Our story, Wines, a page per wine, Visit & Dine, Events, Weddings & functions, Club, FAQ and Contact (plus Privacy and Terms),
with tasting bookings and a cart in overlays. Template 05 is a tourism site for holiday parks, tours and attractions:
Home, Places to stay (plus a page per stay), Tours & experiences (plus a page per tour or attraction), Destinations (plus a page per
destination), Explore the map, Gallery, Field notes (plus articles), Our story, FAQ, Contact and a three-step booking request (plus Privacy and Terms).

| Template | Path | Style |
| --- | --- | --- |
| 01 Trades & home services | `/trades/` | Premium craftsman, editorial serif, warm neutrals |
| 02 Health & allied health | `/health/` | Calm and soft, rounded, sage and sand |
| 03 Professional services | `/professional/` | Modern minimal, Swiss grid, mono plus one accent |
| 04 Wine & hospitality (Cellar Door) | `/cellar-door/` | Editorial Bodoni, scroll-driven parallax, scroll-driven pour sequence and wine carousel |
| 05 Tourism (Coastline) | `/coastline/` | Warm travel-magazine look, Hanken Grotesk with Instrument Serif italics, sunset orange and forest green |

The site root (`/`) is the Purple Giraffe Digital homepage, and `/templates/` showcases the templates with live previews of all five.

## Getting started

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into ./dist
npm run preview  # serve the build
```

## Project structure

```
src/
  pages/
    index.astro              gallery
    trades/ health/ professional/ cellar-door/ coastline/   one folder of routes per template
  templates/<name>/
    config.ts                brand name, accent colour, heading font, business details, toggles
    data.ts                  page content (services, FAQs, posts, team...)
    Layout.astro             head, header, footer, CTA band, demo bar
  components/JsonLd.astro    structured data helper
  scripts/interactions.ts    FAQ filters, chip selectors, form handling
  scripts/cellar-door.ts     Cellar Door scroll motion, page wipe, booking, cart
  scripts/coastline.ts       Coastline tabs, filters, map explorer, gallery lightbox, booking request flow
```

## Customising a template for a client

Edit `src/templates/<name>/config.ts`:

- `brandName`, `accent`, `headingFont`: the client branding (these replace the old "Tweaks" panel).
- Business details (phone, email, address, hours, areas): used on the page and in the LocalBusiness schema, so keep them identical to the Google Business Profile.
- `showSeoNotes`: shows the SEO annotation badges (schema type, keyword placement). Keep `false` in production.
- `showDemoBar`: the dark page-switcher strip at the top. Turn off for a real client site.

Also set `site` in `astro.config.mjs` to the production domain so canonical URLs and schema are correct.

## Before launch

- **Cellar Door bookings and checkout are demos.** The booking dialog and cart confirm on screen only; connect them to the client's booking system and wine store (see the TODOs in `src/scripts/cellar-door.ts`). Wines, event dates and prices live in `src/templates/cellar-door/config.ts`; story, team, venues and FAQs in `data.ts`.
- **Coastline bookings are requests only.** The booking widget and `/coastline/book/` show a confirmation on screen; connect them to the client's booking system or channel manager (see the TODO in `src/scripts/coastline.ts`). Stays, tours, attractions, prices and FAQs live in `src/templates/coastline/data.ts`; branding and business details in `config.ts`. The businesses, prices and phone number are fictional placeholders (the number is in the ACMA range reserved for fiction).
- **Forms do not send anywhere yet.** Every form shows a thank-you message on submit, but has no backend. Add an `action` URL (Formspree, Netlify Forms, a CRM webhook, etc.) to each `<form data-form>`; the shared script posts the form data to it.
- Add photos: drop files into `src/assets/images/<site>/` using the names in `docs/image-shotlist.md`. Any slot without a file keeps its striped placeholder.
- Have a lawyer review each site's privacy and terms pages (they are samples).
- Review all sample business details (licence numbers, ABNs, addresses, phone numbers). They are fictional placeholders.
