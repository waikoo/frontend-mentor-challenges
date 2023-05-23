import React from 'react';
import Social from '../Social/Social';
import { socials } from '/src/assets/socials';
import './Socials.css';

function Socials({ theme, changeTheme, darkOrLight, changeDarkOrLight }) {
	return (
		<div className='socials'>
			{socials.map(({ id, ...social }) => (
				<Social
					key={id}
					id={id}
					{...social}
					{...{ theme, changeTheme, darkOrLight, changeDarkOrLight }}
				/>
			))}
		</div>
	);
}

export default Socials;
