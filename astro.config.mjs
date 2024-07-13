import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    solid(),
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    })],
});
