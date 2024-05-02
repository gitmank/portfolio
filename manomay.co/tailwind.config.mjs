/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Geologica", ...defaultTheme.fontFamily.sans],
				code: ["Space Mono", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				'mank-lime': '#b2ff4e',
				'light-black': '#171717',
			},
		},
	},
	plugins: [],
}
