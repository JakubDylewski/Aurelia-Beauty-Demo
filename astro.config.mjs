// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: podmień na docelową domenę po wdrożeniu (np. własną domenę klienta).
  // Domyślny adres Cloudflare Pages dla projektu "aurelia-demo" z sekcji 1 specyfikacji.
  site: 'https://aurelia-demo.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
