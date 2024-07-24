import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';
import image from '@astrojs/image';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'resume' : '',
  integrations: [
    image(),
    solid(),
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    })],
});
