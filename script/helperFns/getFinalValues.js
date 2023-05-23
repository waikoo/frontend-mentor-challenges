export default function getFinalValues(
	finalName,
	finalCardNr,
	finalMonth,
	finalYear,
	finalCvc,
) {
	let finalItems = [];
	for (let arg of arguments) {
		finalItems.push(arg);
	}
	sessionStorage.setItem('finalItems', JSON.stringify(finalItems));
}
