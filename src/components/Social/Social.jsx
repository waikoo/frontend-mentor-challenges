import React, { useEffect } from 'react';
import up from '/src/assets/icon-up.svg';
import down from '/src/assets/icon-down.svg';
import colors from '../../assets/colors';
import './Social.css';

function Social({ src, handle, followers, today, borderTop, theme, id }) {
	const { positive, negative, neutral } = colors;

	let isDark = theme;

	const path = {
		fb: '/src/assets/icon-facebook.svg',
		yt: '/src/assets/icon-youtube.svg',
		ig: '/src/assets/icon-instagram.svg'
	};
	const colorTodayEl = () => {
		let color;
		if (id === 1) isDark ? (color = neutral) : (color = positive);
		else if (id === 4) color = negative;
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
				<span className='followers'>Followers</span>
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
