/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", `[data-theme="dark"]`],
  content: [
    "./core/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/easylib-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'worksans-x-light': [
  				'Work Sans Extra Light',
  				'sans-serif'
  			],
  			'worksans-light': [
  				'Work Sans Light',
  				'sans-serif'
  			],
  			'worksans-thin': [
  				'Work Sans Thin',
  				'sans-serif'
  			],
  			'worksans-medium': [
  				'Work Sans Medium',
  				'sans-serif'
  			],
  			worksans: [
  				'Work Sans',
  				'sans-serif'
  			],
  			'worksans-semibold': [
  				'Work Sans Semibold',
  				'sans-serif'
  			],
  			'worksans-bold': [
  				'Work Sans Bold',
  				'sans-serif'
  			],
  			'worksans-x-bold': [
  				'Work Sans Extra Bold',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 3px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xs: 'calc(var(--radius) - 5px)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: {
  				DEFAULT: '#3b82f6',
  				foreground: '#fff',
  				dark: '#2563eb'
  			},
  			secondary: {
  				DEFAULT: '#6366f1',
  				foreground: '#fff',
  				dark: '#4f46e5'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: '#93c5fd',
  				foreground: '#1e3a8a'
  			},
  			destructive: {
  				DEFAULT: '#ef4444',
  				foreground: '#fff',
  				dark: '#dc2626'
  			},
  			dark: {
  				DEFAULT: '#27272a',
  				foreground: '#fff'
  			},
  			light: {
  				DEFAULT: '#fff',
  				foreground: '#000'
  			},
  			warning: {
  				DEFAULT: '#eab308',
  				foreground: '#713f12',
  				dark: '#ca8a04'
  			},
  			gray: {
  				DEFAULT: '#6b7280',
  				foreground: '#fff',
  				dark: '#52525b'
  			},
  			success: {
  				DEFAULT: '#16a34a',
  				foreground: '#fff',
  				dark: '#15803d'
  			},
  			border: '#93c5fd',
  			input: '#d4d4d8',
  			ring: 'var(--ring)'
  		},
  		padding: {
  			xs: '0.25rem',
  			sm: '0.5rem',
  			md: '1rem',
  			lg: '1.5rem',
  			xl: '2rem',
  			'2xl': '3rem',
  			section: '4.5rem'
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
