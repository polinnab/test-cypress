import { defineConfig } from 'cypress';

export default defineConfig({
	defaultBrowser: 'chrome',
	e2e: {
		baseUrl: 'http://localhost:3001/',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
	component: {
		viewportWidth: 1400,
		viewportHeight: 1080,
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
