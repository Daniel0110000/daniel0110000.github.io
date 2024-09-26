import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [alpinejs()],
  site: "https://daniel0110000.github.io"
});