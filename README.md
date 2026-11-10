# Wrench Theory

Technical knowledge for millwrights, maintenance technicians, industrial mechanics and students.
A static site built with [Astro](https://astro.build), with articles in MDX, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321 — drafts and ad placeholders are visible
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Node 18.20.8 or newer.

## Deploy on Vercel

1. In Vercel, **Add New → Project** and import this repository. The Astro preset is detected (`vercel.json` sets the build command and output folder).
2. Add the environment variables from `.env.example` under **Settings → Environment Variables**. At minimum set `SITE_URL` to the final domain (no trailing slash).
3. Add the domain under **Settings → Domains**.
4. After the first deploy, submit `https://<domain>/sitemap-index.xml` in Google Search Console.

## Writing an article

Each article is one file in `src/content/articles/`. The file name is the URL:
`hydraulic-cavitation.mdx` → `/articles/hydraulic-cavitation/`.

```mdx
---
title: "Hydraulic Cavitation: Causes, Effects and Prevention"
shortTitle: "Hydraulic Cavitation"            # card title (optional)
description: "Standfirst under the title, also used on cards."
seoTitle: "..."                               # optional, ≤ 70 characters
metaDescription: "..."                        # optional, ≤ 170 characters
category: hydraulics                          # see src/data/taxonomy.ts
subtopic: Pumps
format: Technical Deep Dive                   # Technical Deep Dive | Failure Analysis | Maintenance Guide | Troubleshooting
tags: [cavitation, pumps]
publishedAt: 2026-12-01
updatedAt: 2026-12-15                         # optional, shown as "Updated"
docNumber: WT-015                             # drawing number on covers
featured: false                               # true = homepage "Featured" and category "Start here"
draft: false                                  # true = only visible with npm run dev
heroImage: ./images/cavitation.jpg            # optional photo or 3D render (optimized automatically)
heroAlt: "Cavitation erosion on a gear pump side plate"
heroCaption: "FIG. 1 — ..."
video: { title: "What is hydraulic cavitation?", url: "https://youtube.com/shorts/..." }
faq:
  - q: "Question?"
    a: "Answer."
sources: ["Manufacturer manual ...", "ISO ..."]
related: [hydraulic-pump-failure, fluid-contamination]   # slugs; filled up to 3 automatically
---

<p class="lead">Introduction paragraph.</p>

## First section          ← every H2 becomes a numbered section and a table-of-contents entry
```

Thirteen planned articles already exist as drafts (`draft: true`) with their outline. Write the text, set `draft: false`, update `publishedAt`, and push.

### Components available in articles (no import needed)

| Component | Use |
| --- | --- |
| `<Note title="On the floor">…</Note>` | Technical note (default title "Technical note") |
| `<Takeaway>…</Takeaway>` | Navy key-takeaway box |
| `<Danger stamp="DANGER">…</Danger>` | Safety warning. Stamps: `DANGER`, `DON'T`, `WARNING`, `WRONG` |
| `<Formula title="…" eq="F = P × A" vars={[["F","Force"]]}>example</Formula>` | Formula with variables and a worked example |
| `<Checklist>` markdown list `</Checklist>` | List with check marks |
| `<Figure name="cylinder-cutaway" caption="…" />` | Built-in technical drawings (`src/lib/figures.ts`) |
| `<TableCaption>…</TableCaption>` | Caption under a markdown table |
| `<InArticleAd />` | In-article ad slot. Place one between two major sections, near the middle |

Markdown tables scroll horizontally on phones automatically.

## Structure

```
src/
  config/site.ts          Site name, author, social links, ads and integrations (env vars)
  data/taxonomy.ts        The six categories (URL, name, intro, subtopics) and the four formats
  content/articles/       Articles (MDX)
  components/             Header, footer, cards, ad slot, newsletter…
  components/mdx/         Components used inside articles
  layouts/                BaseLayout (SEO head, JSON-LD, AdSense, GA) and LegalLayout
  pages/                  Routes (see below)
  styles/global.css       Brand tokens and all styles
public/brand/             Logos, avatar, banner from the Wrench Theory brand board
```

| URL | Page |
| --- | --- |
| `/` | Homepage |
| `/articles/`, `/articles/page/2/` | All articles |
| `/articles/{slug}/` | Article |
| `/hydraulics/`, `/mechanical-systems/`, `/bearings-lubrication/`, `/industrial-maintenance/`, `/troubleshooting/`, `/tools-techniques/` | Category pages (paginated: `/hydraulics/page/2/`) |
| `/search/?q=` | Search (client-side, from `/search-index.json`) |
| `/about/`, `/contact/` | Static pages |
| `/privacy-policy/`, `/terms-of-use/`, `/disclaimer/`, `/cookie-policy/` | Legal pages |
| `/sitemap-index.xml`, `/robots.txt`, `/ads.txt` | Generated at build time |

## SEO built in

- Title, meta description, canonical URL, Open Graph and Twitter tags on every page.
- Structured data: `Organization`, `WebSite` with search, `TechArticle`, `BreadcrumbList`, `FAQPage`.
- XML sitemap, robots.txt, trailing-slash URLs, a 404 page, `noindex` on search and drafts.
- Self-hosted fonts, optimized images (`heroImage`), no client framework.

## Google AdSense

Ad slots are already placed: under the header (`header`), inside articles (`<InArticleAd />`), in the article sidebar (`sidebar`), at the end of articles (`end`) and on the homepage (`home`).

- In development, the slots show as dashed placeholders. In production they render nothing until AdSense is configured, so the site can be reviewed and approved without empty boxes.
- To check the layout on a Vercel preview, set `PUBLIC_SHOW_AD_PLACEHOLDERS=true`.
- Once approved, set `PUBLIC_ADSENSE_CLIENT` (`ca-pub-…`) and the five `PUBLIC_ADSENSE_SLOT_*` ids, then redeploy. The AdSense script, the `google-adsense-account` meta tag and `ads.txt` are generated from these values.
- For visitors in the EEA, UK and Switzerland, Google requires a certified consent tool. The simplest option is to enable Google's own consent message in AdSense under **Privacy & messaging**.

Before applying: publish enough original articles, review the four legal pages (drafts written for a Canadian site that uses AdSense and Google Analytics), and connect the contact form.

## Forms

The newsletter and contact forms send a POST request to the URLs in `PUBLIC_NEWSLETTER_ENDPOINT` and `PUBLIC_CONTACT_ENDPOINT` (for example Formspree, Buttondown or Kit). Without them, the forms show a "not connected yet" message.

## Brand

Colours, type and logo follow the Wrench Theory brand board: Barlow Condensed 800 for titles, Barlow for text, JetBrains Mono for technical labels, navy ink, a cobalt technical line and one safety-orange accent per screen.
