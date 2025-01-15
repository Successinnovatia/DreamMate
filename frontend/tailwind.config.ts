import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				// DEFAULT: 'hsl(var(--primary))',
				DEFAULT:'#F58634',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: '#3D2D3D',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		keyframes: {
			marquee:{
				'0%':{transform: 'translateX(0)'},
				'100%':{transform:'translateX(-50%)'},
			}, 

			slideInRight:{
				'0%':{transform:'translateX(100%)'},
				'100%':{transform:'translateX(0)'}
			}, 

			slideInLeft:{
				'0%':{transform:'translateX(-100%)'},
				'100%':{transform:'translateX(0)'}
			}
		},
		animation:{
			marquee:'marquee 15s linear infinite',
			'marquee-reverse': 'marquee 15s linear infinite reverse',
			slideInRight: 'slideInRight 0.7s forwards',
			slideInLeft: 'slideInLeft 0.7s forwards'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;