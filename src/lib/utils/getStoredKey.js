import { browser } from '$app/environment';

const getStoredKey = (user) => {
	if (!user) throw new Error('getStored needs a localStorage key for param');
	const userObject = browser && localStorage.getItem(user);
	try {
		if (userObject) return JSON.parse(userObject);
	} catch (err) {
		console.log(err);
	}
};

export default getStoredKey;
