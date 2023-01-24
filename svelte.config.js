import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	vitePlugin: {
		experimental: {
			inspector: {
				// change shortcut
				toggleKeyCombo: 'shift-z', // 'meta-shift', --> original
				// hold and release key to toggle inspector mode
				holdMode: false,
				// show or hide the inspector option
				showToggleButton: 'never',
				// inspector position
				toggleButtonPos: 'top-right'
			}
		}
	}
};

export default config;
