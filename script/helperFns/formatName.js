export default function formatName(realName) {
	const splitName = realName.split(' ');
	let fullCapitalizedName = [];
	for (let name of splitName) {
		if (/[a-z]/.test(name.charAt(0))) {
			fullCapitalizedName.push(
				name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
			);
		}
		if (/[A-Z]/.test(name.charAt(0))) {
			fullCapitalizedName.push(name.charAt(0) + name.slice(1).toLowerCase());
		}
	}
	return fullCapitalizedName.join(' ');
}
