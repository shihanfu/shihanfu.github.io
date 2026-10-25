import { defineConfig } from 'astro/config';
import syncCv from './integrations/sync-cv.mjs';

export default defineConfig({
  site: 'https://shihanfu.com',
  integrations: [syncCv()],
});
