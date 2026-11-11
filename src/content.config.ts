import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS, FORMAT_NAMES } from './data/taxonomy';

const articles = defineCollection({
  // The file name is the URL slug: src/content/articles/hydraulic-cylinder-wear.mdx → /articles/hydraulic-cylinder-wear/
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(), // used on cards
      description: z.string(), // the standfirst under the title and the card excerpt
      seoTitle: z.string().max(70).optional(),
      metaDescription: z.string().max(170).optional(),
      category: z.enum(CATEGORY_IDS),
      subtopic: z.string(),
      format: z.enum(FORMAT_NAMES),
      tags: z.array(z.string()).default([]),
      author: z.string().optional(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      docNumber: z.string(), // drawing number shown on covers, e.g. WT-014
      featured: z.boolean().default(false),
      draft: z.boolean().default(false), // drafts are only built in `npm run dev`
      heroImage: image().optional(),
      heroFigure: z.enum(['cylinder-cutaway', 'bearing-section']).optional(),
      heroAlt: z.string().optional(),
      heroCaption: z.string().optional(),
      // Required for third-party photos (e.g. Wikimedia Commons): shown under the image and on /image-credits/
      heroCredit: z
        .object({ author: z.string(), license: z.string(), licenseUrl: z.string().url().optional(), source: z.string().url(), site: z.string().default('Wikimedia Commons'), title: z.string().optional() })
        .optional(),
      video: z.object({ title: z.string(), url: z.string().url().optional(), length: z.string().default('0:60') }).optional(),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      sources: z.array(z.string()).default([]),
      related: z.array(z.string()).default([]),
      outline: z.array(z.string()).default([]), // planned sections for drafts
    }),
});

export const collections = { articles };
