import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node(),
		paths: {
			assets: "http://localhost:3000"
		}
	}
};

export default config;
