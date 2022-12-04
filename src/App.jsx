import Header from './components/Header/Header';
import Socials from './components/Socials/Socials';
import React, { useState } from 'react';
import './App.css';
import { Overview } from './components/Overview/Overview';

function App() {
	const [theme, setTheme] = useState(false);

	const changeTheme = (e) => {
		setTheme(e.currentTarget.checked);
		changeDarkOrLight();
	};

	const HTML = document.documentElement;
	let [darkOrLight, setDarkOrLight] = useState('Light');

	const changeDarkOrLight = () => {
		setDarkOrLight(HTML.dataset.theme ? 'Light' : 'Dark');
	};

	return (
		<div className='App'>
			<Header {...{ theme, changeTheme, darkOrLight, changeDarkOrLight }} />
			<main>
				<Socials {...{ theme, changeTheme, darkOrLight, changeDarkOrLight }} />
				<Overview />
			</main>
		</div>
	);
}

export default App;
