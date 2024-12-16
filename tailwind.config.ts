import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#14b8a6",

				backgroundWhite: "#f1f5f9",
				backgroundDark: "#0f172a",

				backgroundLight: "#f9f9f9",
				backgroundDarken: "#020617",

				baseText: "#030712",
				lightText: "#f1f5f9",

				secondaryText: "#6b7280",
				secondaryTextLight: "#9ca3af",
				secondaryTextDark: "#4b5563",
			},
		},
	},
	plugins: [],
} satisfies Config;
