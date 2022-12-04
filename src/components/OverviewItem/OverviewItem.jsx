import './OverviewItem.css';
import React from 'react';
import up from '/src/assets/icon-up.svg';
import down from '/src/assets/icon-down.svg';
import colors from '../../assets/colors';

export const OverviewItem = ({ icon, data: { text, number, percent, increase }, likes: { text: likeText, number: likeNumber, percent: likePercent, increase: likeIncrease } }) => {
	const { positive, negative } = colors;

	return (
		<section className='overview-section'>
			<div className='overview-item'>
				<div className='ov-left'>
					<span className='ov-title'>{text}</span>
					<span className='ov-number'>{number === 52 ? `${number}k` : number}</span>
				</div>
				<div className='ov-right'>
					<div className='i-con'>
						<img
							src={icon}
							alt=''
						/>
					</div>
					<div
						className='ov-growth-con'
						style={increase ? { color: `${positive}` } : { color: `${negative}` }}>
						<img
							src={increase ? up : down}
							alt=''
							className='ov-ico'
						/>
						<span className='ov-percent'>{percent} %</span>
					</div>
				</div>
			</div>

			<div className='overview-item'>
				<div className='ov-left'>
					<span className='ov-title'>{likeText}</span>
					<span className='ov-number'>{likeNumber}</span>
				</div>
				<div className='ov-right'>
					<div className='i-con'>
						<img
							src={icon}
							alt=''
						/>
					</div>
					<div
						className='ov-growth-con'
						style={likeIncrease ? { color: `${positive}` } : { color: `${negative}` }}>
						<img
							src={likeIncrease ? up : down}
							alt=''
							className='ov-ico'
						/>
						<span className='ov-percent'>{likePercent}%</span>
					</div>
				</div>
			</div>
		</section>
	);
};
