import React, { useEffect } from 'react';
import './ThemeSwitch.css';

const HTML = document.documentElement;

const ThemeSwitch = ({ theme, changeTheme }) => {
	useEffect(() => {
		theme ? (HTML.dataset.theme = 'dark') : HTML.removeAttribute('data-theme');
	}, [theme]);

	return (
		<div className='toggler'>
			<input
				value={theme}
				type='checkbox'
				name='theme'
				id='checkbox'
				onChange={changeTheme}
			/>
			<label htmlFor='checkbox'>
				<div className='ball'></div>
			</label>
		</div>
	);
};

export default ThemeSwitch;
