# Website templates (Astro)

Three industry website templates built with [Astro](https://astro.build), each with eight pages:
Home, About, Services, Service detail, Blog, FAQ, Booking/Quote and Contact.

| Template | Path | Style |
| --- | --- | --- |
| 01 Trades & home services | `/trades/` | Premium craftsman, editorial serif, warm neutrals |
| 02 Health & allied health | `/health/` | Calm and soft, rounded, sage and sand |
| 03 Professional services | `/professional/` | Modern minimal, Swiss grid, mono plus one accent |

The site root (`/`) is a gallery linking to all three.

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
    trades/ health/ professional/   one folder of routes per template
  templates/<name>/
    config.ts                brand name, accent colour, heading font, business details, toggles
    data.ts                  page content (services, FAQs, posts, team...)
    Layout.astro             head, header, footer, CTA band, demo bar
  components/JsonLd.astro    structured data helper
  scripts/interactions.ts    FAQ filters, chip selectors, form handling
```

## Customising a template for a client

Edit `src/templates/<name>/config.ts`:

- `brandName`, `accent`, `headingFont`: the client branding (these replace the old "Tweaks" panel).
- Business details (phone, email, address, hours, areas): used on the page and in the LocalBusiness schema, so keep them identical to the Google Business Profile.
- `showSeoNotes`: shows the SEO annotation badges (schema type, keyword placement). Keep `false` in production.
- `showDemoBar`: the dark page-switcher strip at the top. Turn off for a real client site.

Also set `site` in `astro.config.mjs` to the production domain so canonical URLs and schema are correct.

## Before launch

- **Forms do not send anywhere yet.** Every form shows a thank-you message on submit, but has no backend. Add an `action` URL (Formspree, Netlify Forms, a CRM webhook, etc.) to each `<form data-form>`; the shared script posts the form data to it.
- Replace the striped image placeholders with real photography.
- Replace the map placeholder on the Contact page with a Google Maps embed.
- Review all sample business details (licence numbers, ABNs, addresses, phone numbers). They are fictional placeholders.
