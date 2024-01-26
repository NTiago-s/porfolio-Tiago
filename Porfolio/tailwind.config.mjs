/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		extend: {
			backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-focus', 'dark-group-focus'],
			borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
			textColor: ['dark', 'dark-hover', 'dark-active'],
		},
	},
}
