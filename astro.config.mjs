import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';
import image from '@astrojs/image';

const publicPath = import.meta.env.PUBLIC_PATH

export default defineConfig({
  base: publicPath === 'production' ? 'resume' : '',
  integrations: [
    image(),
    solid(),
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    })],
});
