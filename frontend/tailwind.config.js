/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			colors: {
				'custom-color': '#006180',
			  },
		}, 
	}, 
	plugins: [], 
}