import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header({ theme, changeTheme, darkOrLight, changeDarkOrLight }) {
	return (
		<header>
			<div className='header-left'>
				<h1>Social Media Dashboard</h1>
				<span className='total'>Total Followers: 23,004</span>
			</div>
			<hr />
			<ThemeToggle {...{ theme, changeTheme, darkOrLight, changeDarkOrLight }} />
			<div className='bg'></div>
		</header>
	);
}

export default Header;
