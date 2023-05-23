import React from 'react';
import './Overview.css';
import { OverviewItem } from '../OverviewItem/OverviewItem';
import { overviewData } from '../../assets/socials';

export const Overview = () => {
	return (
		<div className='overview'>
			<h2>Overview - Today</h2>
			<div className='overview-con'>
				{overviewData.map(({ id, ...ovItem }) => (
					<OverviewItem
						key={id}
						{...ovItem}
					/>
				))}
			</div>
		</div>
	);
};
