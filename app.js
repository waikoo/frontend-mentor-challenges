const formEl = document.querySelector('.card__form--section');

const nameEl = document.querySelector('#name');
const cardNumberEl = document.querySelector('#card_number');
const monthEl = document.querySelector('#expiry_month');
const yearEl = document.querySelector('#expiry_year');
const cvcEl = document.querySelector('#cvc');

// cardNumberEl.value

formEl.addEventListener('submit', e => {
	e.preventDefault();
	//card nr = 4x4, digits only?
	//mm = 2 digits only? - from 01 to 12
	//yy = 2 digits only
	//cvc = 3 digits only?
});
