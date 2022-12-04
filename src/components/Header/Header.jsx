import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header({ theme, changeTheme, darkOrLight, changeDarkOrLight }) {
	return (
		<header>
			<h1>Social Media Dashboard</h1>
			<span className='total'>Total Followers: 23,004</span>
			<hr />
			<ThemeToggle {...{ theme, changeTheme, darkOrLight, changeDarkOrLight }} />
		</header>
	);
}

export default Header;
