// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the production domain before launch (used for canonical URLs and schema).
  site: 'https://example.com',
  trailingSlash: 'always',
  // Overridable so parallel builds don't collide.
  outDir: process.env.ASTRO_OUT_DIR || './dist',
  cacheDir: process.env.ASTRO_CACHE_DIR || './node_modules/.astro',
});
