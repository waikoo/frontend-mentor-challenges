// import { info } from '$lib/stores';

const calculateTotal = (info) => {
	let total = 0;

	if (info.plan.price) total += info.plan.price;
	for (const addon of info.addons) {
		if (addon.wants) total += addon.price;
	}
	return total;
};

export default calculateTotal;
