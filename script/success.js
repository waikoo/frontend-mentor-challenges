import $ from './helperFns/elementSelector.js';

//getting the values from storage
const storedFinalValues =
	JSON.parse(sessionStorage.getItem('finalItems')) || '';

//making an array out of the card info elements with custom selector
const cardOutputEls = [
	$('.card-name'),
	$('.card-nr'),
	$('.card-month'),
	$('.card-year'),
	$('.card-cvc'),
];

// elements' textContent = stored validated values
for (let i = 0; i < cardOutputEls.length; i++) {
	if (!storedFinalValues) {
		// if falsy
		continue; // do nothing
	} else {
		cardOutputEls[i].textContent = storedFinalValues[i];
	}
}

sessionStorage.clear();
