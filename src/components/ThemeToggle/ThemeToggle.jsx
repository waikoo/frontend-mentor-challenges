import React, { useEffect, useState } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './ThemeToggle.css';

function ThemeToggle({ theme, changeTheme, darkOrLight }) {
	return (
		<div className='toggler-con'>
			<span className='mode'>{darkOrLight} Mode</span>
			<ThemeSwitch {...{ theme, changeTheme }} />
		</div>
	);
}

export default ThemeToggle;
