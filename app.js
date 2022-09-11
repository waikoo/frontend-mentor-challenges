const formEl = document.querySelector('.card__form');

const nameEl = document.querySelector('#name');
const cardNumberEl = document.querySelector('#card_number');
const monthEl = document.querySelector('#expiry_month');
const yearEl = document.querySelector('#expiry_year');
const cvcEl = document.querySelector('#cvc');
const submitBtnEl = document.querySelector('.card__form--btn');

// cardNumberEl.value

formEl.addEventListener('submit', e => {
	e.preventDefault();

	// check for name not being empty on submit
	const isNameCompleted = () => {
		if (!nameEl.value) {
			document.querySelector('.error-name').classList.remove('invisible');
		} else {
			return true;
		}
	};
	// ! CARD NR NOT VALID, THEN...
	const isCardNumberValid = () => {
		// if there is an input value, check it with regex:
		if (cardNumberEl.value) {
			return /^[0-9]{16}$/.test(cardNumberEl.value);
		} else {
			//if input field is empty:
			document.querySelector('.error-number').classList.remove('invisible');
		}
	};

	const isExpMonthValid = () => {
		const monthRegex = /01|02|03|04|05|06|07|08|09|10|11|12/;
		if (monthEl.value) {
			return monthRegex.test(monthEl.value);
		} else {
			document.querySelector('.error-expdate').classList.remove('invisible');
		}
	};

	const isExpYearValid = () => {
		if (yearEl.value) {
			return /^\d{2}$/.test(yearEl.value);
		} else {
			document.querySelector('.error-cvc').classList.remove('invisible');
		}
	};

	const isCvcValid = () => {
		if (cvcEl.value) {
			return /^\d{3}$/.test(cvcEl.value);
		}
	};

	//final evaluation on submit
	const nameValidated = isNameCompleted();
	const cardNumberValidated = isCardNumberValid();
	const expMonthValidated = isExpMonthValid();
	const expYearValidated = isExpYearValid();
	const cvcValidated = isCvcValid();

	console.log('name: ' + isNameCompleted());
	console.log('card: ' + isCardNumberValid());
	console.log('month: ' + isExpMonthValid());
	console.log('year: ' + isExpYearValid());
	console.log('cvc: ' + isCvcValid());

	if (
		nameValidated &&
		cardNumberValidated &&
		expMonthValidated &&
		expYearValidated &&
		cvcValidated
	) {
		formEl.submit();
	}
});

nameEl.addEventListener('keyup', () => {
	if (nameEl.value) {
		document.querySelector('.error-name').classList.add('invisible');
	}
});
