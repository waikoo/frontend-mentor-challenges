// import headers from '$lib/headers.js';
import allSteps from '$lib/allSteps.js';

export const load = ({ params }) => {
	let general = allSteps.general || {};
	let obj = {
		param: +params.step,
		general: allSteps.general,
		step: allSteps.steps[+params.step - 1] || {}
	};
	return obj;
};
