// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lifeissad21.github.io",
  base: "/UnderageProsecutionWebsite/",

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});