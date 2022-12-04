// import { ThemeContext } from '../../App';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './ThemeSwitch.css';

const HTML = document.documentElement;

const ThemeSwitch = ({ theme, changeTheme }) => {
	// console.log(props);
	// console.log(changeDarkOrLight);
	// };
	// const [theme, setTheme] = useState(false);

	// const changeTheme = (e) => {
	// 	setTheme(e.currentTarget.checked);
	// 	changeDarkOrLight();
	// };

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
