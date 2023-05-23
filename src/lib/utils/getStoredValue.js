import getStoredKey from './getStoredKey';
import { browser } from '$app/environment';

const getStoredValue = (value) => {
	const userData = getStoredKey('user');

	if (browser && userData) {
		return userData.plan[value] === 'monthly' ? 'monthly' : 'yearly';
	}
};

export default getStoredValue;
