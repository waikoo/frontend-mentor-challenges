import React, { useEffect, useState } from 'react';
import up from '/src/assets/icon-up.svg';
import down from '/src/assets/icon-down.svg';
import colors from '../../assets/colors';
import './Social.css';

function Social({ src, handle, followers, today, borderTop, theme, id }) {
	const getWindowSize = () => {
		const { innerWidth, innerHeight } = window;
		return { innerWidth, innerHeight };
	};

	const [windowSize, setWindowSize] = useState(getWindowSize());
	const { positive, negative, neutral } = colors;

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	let isDark = theme;

	const path = {
		fb: '/src/assets/icon-facebook.svg',
		yt: '/src/assets/icon-youtube.svg',
		ig: '/src/assets/icon-instagram.svg'
	};
	const colorTodayEl = () => {
		let color;
		if (id === 1) {
			if (windowSize.innerWidth < 1440) isDark ? (color = neutral) : (color = positive);
			else {
				color = positive;
			}
		} else if (id === 4) color = negative;
		else color = positive;
		return { color: color };
	};

	return (
		<div
			className='social'
			style={{ borderTop: `5px solid ${borderTop}` }}>
			<div className='fx-row logo-handle'>
				<img
					src={src}
					alt=''
				/>
				<span className='handle'>{handle}</span>
			</div>
			<div className='followers-con'>
				<span className='number'>{followers}</span>
				<span className='followers'>{src === path.yt ? 'Subscribers' : 'Followers'}</span>
			</div>
			<div className='fx-row today'>
				<img
					src={src === path.yt ? down : up}
					alt=''
				/>
				<span style={colorTodayEl()}>{today} Today</span>
			</div>
		</div>
	);
}

export default Social;
