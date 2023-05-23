import fb from './icon-facebook.svg';
import twtr from './icon-twitter.svg';
import ig from './icon-instagram.svg';
import yt from './icon-youtube.svg';

export const socials = [
	{
		id: 1,
		src: fb,
		handle: '@nathanf',
		followers: '1987',
		today: '12',
		borderTop: 'hsl(208, 92%, 53%)'
	},
	{
		id: 2,
		src: twtr,
		handle: '@nathanf',
		followers: '1044',
		today: '99',
		borderTop: 'hsl(203, 89%, 53%)'
	},
	{
		id: 3,
		src: ig,
		handle: '@realnathanf',
		followers: '11k',
		today: '1099',
		borderTopBackup: 'rgb(253,196,104)',
		borderTop: 'linear-gradient(72deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%)'
	},
	{
		id: 4,
		src: yt,
		handle: 'Nathan F.',
		followers: '8239',
		today: '144',
		borderTop: 'hsl(348, 97%, 39%)'
	}
];

// export const overviewLikes = [
//   {

//   }
// ]

export const overviewData = [
	{
		id: 1,
		icon: fb,
		data: {
			text: 'Page Views',
			number: 87,
			percent: 3,
			increase: true
		},
		likes: {
			text: 'Likes',
			number: 52,
			percent: 2,
			increase: false
		}
	},
	{
		id: 2,
		icon: ig,
		data: {
			text: 'Profile Views',
			number: 52,
			percent: 1375,
			increase: true
		},
		likes: {
			text: 'Likes',
			number: 5462,
			percent: 2257,
			increase: true
		}
	},
	{
		id: 3,
		icon: twtr,
		data: {
			text: 'Retweets',
			number: 117,
			percent: 303,
			increase: true
		},
		likes: {
			text: 'Likes',
			number: 507,
			percent: 553,
			increase: true
		}
	},
	{
		id: 4,
		icon: yt,
		data: {
			text: 'Total Views',
			number: 1407,
			percent: 12,
			increase: false
		},
		likes: {
			text: 'Likes',
			number: 107,
			percent: 19,
			increase: false
		}
	}
];
