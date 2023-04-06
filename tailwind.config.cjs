/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				sans: ['Mulish', 'sans-serif']
			},
			colors: {
				primary: '#006AFF',
				black: '#141516',
				green: '#40ba21',
				LightGray: '#1111',
				brightRed: 'red',
				purple: '#572B9C'
			}
		}
	},
	plugins: []
}

