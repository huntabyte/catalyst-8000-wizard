/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Source Sans Pro', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#ffb500',
					secondary: '#0dcdff',
					accent: '#0a837f',
					neutral: '#ffffff',
					'base-100': '#212A32',
					info: '#8BE8FD',
					success: '#52FA7C',
					warning: '#F1FA89',
					error: '#FF5757'
				}
			}
		]
	}
};
