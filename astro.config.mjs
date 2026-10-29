// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://garmin.devjoe.app',
  output: 'static',
  trailingSlash: 'always',
  // The public CSP permits same-origin files, not inline script/style blocks.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap()],
});
