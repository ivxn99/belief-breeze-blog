
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			typography: {
				DEFAULT: {
					css: {
						'max-width': 'none',
						color: 'hsl(var(--foreground))',
						lineHeight: '1.75',
						fontFamily: 'Inter, system-ui, sans-serif',
						'[class~="lead"]': {
							color: 'hsl(var(--muted-foreground))',
							fontSize: '1.25rem',
							lineHeight: '1.6',
							marginTop: '1.2em',
							marginBottom: '1.2em',
						},
						strong: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						'h1, h2, h3, h4': {
							color: 'hsl(var(--foreground))',
							fontFamily: 'Playfair Display, serif',
							fontWeight: '700',
						},
						h1: {
							fontSize: '2.5rem',
							marginTop: '0',
							marginBottom: '1rem',
							lineHeight: '1.2',
						},
						h2: {
							fontSize: '1.875rem',
							marginTop: '2rem',
							marginBottom: '1rem',
							lineHeight: '1.3',
						},
						h3: {
							fontSize: '1.5rem',
							marginTop: '1.5rem',
							marginBottom: '0.75rem',
							lineHeight: '1.4',
						},
						p: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
						},
						'ul, ol': {
							marginTop: '1.25em',
							marginBottom: '1.25em',
						},
						li: {
							marginTop: '0.5em',
							marginBottom: '0.5em',
						},
					},
				},
				lg: {
					css: {
						fontSize: '1.125rem',
						lineHeight: '1.7',
						p: {
							marginTop: '1.3em',
							marginBottom: '1.3em',
						},
						'[class~="lead"]': {
							fontSize: '1.375rem',
							lineHeight: '1.6',
						},
						h1: {
							fontSize: '3rem',
							marginTop: '0',
							marginBottom: '1.25rem',
							lineHeight: '1.1',
						},
						h2: {
							fontSize: '2.25rem',
							marginTop: '2.5rem',
							marginBottom: '1.25rem',
							lineHeight: '1.2',
						},
						h3: {
							fontSize: '1.875rem',
							marginTop: '2rem',
							marginBottom: '1rem',
							lineHeight: '1.3',
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
	],
} satisfies Config;
