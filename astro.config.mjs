// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Vercel (Project → Settings → Environment Variables) once the domain is known.
const site = process.env.SITE_URL || 'https://wrenchtheory.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !/\/search\/$|\/404\/?$/.test(page),
    }),
  ],
});
