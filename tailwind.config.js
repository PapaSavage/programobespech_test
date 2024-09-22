/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./assets/css/*.{css}",
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				primary_red: "#D90E32",
				primary_darkred: "#A60933",
				primary_pink: "#DE304E",
				primary_dark: "#282828",
				primary_gray: "#F3F6F8",

				secondary_green: "#7FC75E",
				secondary_lightred: "#E86E84",

				font_black: "#293148",

				phiolet: "#7895FF",
				light_phiolet: "#C9D4FF",
			},
		},
	},
	plugins: [],
};
