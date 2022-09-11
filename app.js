const formEl = document.querySelector('.card__form');

const nameEl = document.querySelector('#name');
const cardNumberEl = document.querySelector('#card_number');
const monthEl = document.querySelector('#expiry_month');
const yearEl = document.querySelector('#expiry_year');
const cvcEl = document.querySelector('#cvc');
const submitBtnEl = document.querySelector('.card__form--btn');

const errName = document.querySelector('.error-name');

const cardName = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-nr');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');
const cardCvc = document.querySelector('.cvc');

formEl.addEventListener('submit', e => {
	e.preventDefault();

	// if name field is empty, make error message visible
	const isNameCompleted = () => {
		if (!nameEl.value) {
			errName.classList.remove('invisible');
			nameEl.classList.add('focus-invalid');
			nameEl.focus();
		} else {
			return true;
		}
	};
	// ! CARD NR NOT VALID, THEN...
	const isCardNumberValid = () => {
		// if there is an input value, check it with regex:
		if (cardNumberEl.value) {
			return /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(cardNumberEl.value);
		} else {
			//if input field is empty:
			document.querySelector('.error-number').classList.remove('invisible');
			cardNumberEl.classList.add('focus-invalid');
			cardNumberEl.focus();
		}
	};

	const isExpMonthValid = () => {
		const monthRegex = /01|02|03|04|05|06|07|08|09|10|11|12/;
		if (monthEl.value) {
			return monthRegex.test(monthEl.value);
		} else {
			document.querySelector('.error-expdate').classList.remove('invisible');
			monthEl.classList.add('focus-invalid');
			monthEl.focus();
		}
	};

	const isExpYearValid = () => {
		if (yearEl.value) {
			return /^\d{2}$/.test(yearEl.value);
		} else {
			document.querySelector('.error-expdate').classList.remove('invisible');
			yearEl.classList.add('focus-invalid');
			yearEl.focus();
		}
	};

	const isCvcValid = () => {
		if (cvcEl.value) {
			return /^\d{3}$/.test(cvcEl.value);
		} else {
			document.querySelector('.error-cvc').classList.remove('invisible');
			cvcEl.classList.add('focus-invalid');
			cvcEl.focus();
		}
	};

	//final evaluation on submit

	console.log('name: ' + isNameCompleted());
	console.log('card: ' + isCardNumberValid());
	console.log('month: ' + isExpMonthValid());
	console.log('year: ' + isExpYearValid());
	console.log('cvc: ' + isCvcValid());

	if (
		isNameCompleted() &&
		isCardNumberValid() &&
		isExpMonthValid() &&
		isExpYearValid() &&
		isCvcValid()
	) {
		formEl.submit();
	}
});

nameEl.addEventListener('keyup', () => {
	cardName.textContent = nameEl.value;
	if (nameEl.value) {
		document.querySelector('.error-name').classList.add('invisible');
		nameEl.classList.remove('focus-invalid');
	}
});

cardNumberEl.addEventListener('keyup', () => {
	cardNumber.textContent = cardNumberEl.value;
	const cardNumberValueValid = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(
		cardNumberEl.value,
	);
	if (cardNumberValueValid) {
		document.querySelector('.error-number').classList.add('invisible');
	}
	if (!cardNumberValueValid) {
		document.querySelector('.error-number').classList.remove('invisible');
		cardNumberEl.classList.remove('focus-invalid');
	}
});

monthEl.addEventListener('keyup', () => {
	cardMonth.textContent = monthEl.value;
	const monthValueValid = /01|02|03|04|05|06|07|08|09|10|11|12/.test(
		monthEl.value,
	);
	if (monthValueValid) {
		document.querySelector('.error-expdate').classList.add('invisible');
	}
	if (!monthValueValid) {
		document.querySelector('.error-expdate').classList.remove('invisible');
		monthEl.classList.remove('focus-invalid');
	}
});

yearEl.addEventListener('keyup', () => {
	cardYear.textContent = yearEl.value;
	const yearValueValid = /^\d{2}$/.test(yearEl.value);
	if (yearValueValid && yearEl.value.length > 1) {
		document.querySelector('.error-expdate').classList.add('invisible');
	}
	if (!yearValueValid) {
		document.querySelector('.error-expdate').classList.remove('invisible');
		yearEl.classList.remove('focus-invalid');
	}
});

cvcEl.addEventListener('keyup', () => {
	cardCvc.textContent = cvcEl.value;
	console.log(cvcEl.length);
	const cvcValueValid = /^\d{3}$/.test(cvcEl.value);
	if (cvcValueValid) {
		document.querySelector('.error-cvc').classList.add('invisible');
	}
	if (!cvcValueValid) {
		document.querySelector('.error-cvc').classList.remove('invisible');
		cvcEl.classList.remove('focus-invalid');
	}
});
