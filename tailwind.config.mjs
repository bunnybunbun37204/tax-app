/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			violet: '#371C48',
    			jelly: '#932550',
    			grape: '#A24182',
    			blood: '#C34E5E',
    			sandy: '#D47A67',
    			sakura: '#E4B0B9',
    			gold: '#BFAD89'
    		},
    		boxShadow: {
    			sakuraeffect: '2px 2px 12px 8px rgba(228, 176, 185, 0.5)'
    		},
    		fontFamily: {
    			notosansthai: ['Noto Sans Thai', 'sans-serif']
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
}
