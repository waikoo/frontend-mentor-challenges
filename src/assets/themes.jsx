export default {
	base: {
		font: {
			family: 'Inter, system-ui, sans-serif',
			weight: {
				regular: 400,
				bold: 700
			},
			size: {
				h1: '1.6rem',
				totalDark: '',
				number: '3.5rem'
			}
		},
		color: {
			positive: 'hsl(163, 72%, 41%)',
			negative: 'hsl(356, 69%, 56%)'
		}
	},
	dark: {
		white: 'white',
		toggleSingle: 'rgb(62, 218, 130)',
		toggle: 'linear-gradient(218deg, rgba(62, 218, 130, 1) 42%, rgba(55, 143, 230, 1) 100%)',
		bg: 'hsl(230, 17%, 14%)',
		topPattern: 'hsl(232, 19%, 15%)',
		cardBg: 'hsl(228, 28%, 20%)',
		textDark: 'hsl(228, 34%, 66%)',
		textLight: 'hsl(0, 0%, 100%)'
	},
	light: {
		black: 'black',
		toggle: 'hsl(230, 22%, 74%)',
		bg: 'hsl(0, 0%, 100%)',
		topPattern: 'hsl(225, 100%, 98%)',
		cardBg: 'hsl(227, 47%, 96%)',
		textDark: 'hsl(230, 17%, 14%)',
		textLight: 'hsl(228, 12%, 44%)'
	}
};
