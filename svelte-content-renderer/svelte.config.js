import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, './');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    preserve: ['json'],
    postcss: true
  }),
  kit: {
    adapter: node(),
    paths: {
      assets: env.VITE_ASSETS_BASE_URL
    }
  }
};

export default config;