const formEl = document.querySelector('.card__form');

const nameEl = document.querySelector('#name');
const cardNumberEl = document.querySelector('#card_number');
const monthEl = document.querySelector('#expiry_month');
const yearEl = document.querySelector('#expiry_year');
const cvcEl = document.querySelector('#cvc');
const submitBtnEl = document.querySelector('.card__form--btn');

const errName = document.querySelector('.error-name');
const errCardNr = document.querySelector('.error-number');
const errExpDate = document.querySelector('.error-expdate');
const errCvc = document.querySelector('.error-cvc');

const cardName = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-nr');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');
const cardCvc = document.querySelector('.cvc');

let userCardInfo;

function getFinalValues(
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

function charLimit() {
	this.value = this.value.slice(0, this.dataset.maxlength);
}

document.querySelectorAll('.limit-length').forEach(input => {
	input.addEventListener('input', charLimit);
});

function errorMsgAppear(inputEl, errorEl) {
	errorEl.classList.remove('invisible');
	inputEl.classList.add('focus-invalid');
}

function errorMsgDisappear(inputEl, errorEl) {
	errorEl.classList.add('invisible');
	inputEl.classList.remove('focus-invalid');
}

function isInputValid(inputEl, errorEl, regex = null) {
	let isValid = null;

	if (!inputEl.value) {
		errorMsgAppear(inputEl, errorEl);
		inputEl.focus();
	} else {
		if (regex === null) {
			return 'noregex';
		} else {
			isValid = regex.test(inputEl.value);
			return isValid;
			// return isValid ? true : false;
		}
	}
}
// ! ON FORM SUBMIT:
if (formEl) {
	formEl.addEventListener('submit', e => {
		e.preventDefault();

		let nameValueOnSubmit;
		if (isInputValid(nameEl, errName) === 'noregex') {
			nameValueOnSubmit = true;
		}

		let cardNrOnSubmit = isInputValid(
			cardNumberEl,
			errCardNr,
			/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
		);

		let monthValueOnSubmit = isInputValid(
			monthEl,
			errExpDate,
			/01|02|03|04|05|06|07|08|09|10|11|12/,
		);
		let yearValueOnSubmit = isInputValid(yearEl, errExpDate, /^\d{2}$/);
		let cvcValueOnSubmit = isInputValid(cvcEl, errCvc, /^\d{3}$/);

		function consoleLogBooleanOnSubmit() {
			console.log(nameValueOnSubmit);
			console.log(cardNrOnSubmit);
			console.log(monthValueOnSubmit);
			console.log(yearValueOnSubmit);
			console.log(cvcValueOnSubmit);
		}

		if (
			nameValueOnSubmit &&
			cardNrOnSubmit &&
			monthValueOnSubmit &&
			yearValueOnSubmit &&
			cvcValueOnSubmit
		) {
			userCardInfo = getFinalValues(
				nameEl.value,
				cardNumberEl.value,
				monthEl.value,
				yearEl.value,
				cvcEl.value,
			);
			formEl.submit();
		}
	});
}

// ! KEYUP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (nameEl) {
	nameEl.addEventListener('keyup', e => {
		cardName.textContent = nameEl.value;
		if (nameEl.value) {
			document.querySelector('.error-name').classList.add('invisible');
			nameEl.classList.remove('focus-invalid');
		}
	});

	nameEl.addEventListener('focusout', () => {
		if (nameEl.value.length === 0) {
			nameEl.classList.add('focus-invalid');
			errName.classList.remove('invisible');
		}
	});
}

if (cardNumberEl) {
	cardNumberEl.addEventListener('keyup', e => {
		cardNumber.textContent = cardNumberEl.value;
		// ! duplicate code
		const cardNumberRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

		if (/\d/g.test(cardNumberEl.value)) {
			cardNumberEl.classList.remove('focus-invalid');
			errCardNr.classList.add('invisible');
		}

		if (cardNumberEl.value.length === 0) {
			cardNumberEl.classList.remove('focus-invalid');
			errCardNr.classList.add('invisible');
		}

		if (
			cardNumberEl.value.length === 19 &&
			cardNumberRegex.test(cardNumberEl.value) === false
		) {
			errCardNr.classList.remove('invisible');
			cardNumberEl.classList.add('focus-invalid');
		}

		if (
			cardNumberEl.value.length === 19 &&
			cardNumberRegex.test(cardNumberEl.value)
		) {
			cardNumberEl.classList.remove('focus-invalid');
			errCardNr.classList.add('invisible');
		}
		//add extra space
		if (
			cardNumberEl.value.length === 4 ||
			cardNumberEl.value.length === 9 ||
			cardNumberEl.value.length === 14
		) {
			cardNumberEl.value = cardNumberEl.value + ' ';
		}
		// if anything else than number
		if (/[^\d\s]+/.test(cardNumberEl.value)) {
			cardNumberEl.value = cardNumberEl.value.slice(0, -1);
			errCardNr.classList.remove('invisible');
			cardNumberEl.classList.add('focus-invalid');
		}
	});

	cardNumberEl.addEventListener('focusout', function () {
		console.log(this);
		if (this.value.length !== 19) {
			this.classList.add('focus-invalid');
			errCardNr.classList.remove('invisible');
		}
	});
}

if (monthEl) {
	monthEl.addEventListener('keyup', () => {
		cardMonth.textContent = monthEl.value;
		// ! define regex in var
		const isMonthValid = /01|02|03|04|05|06|07|08|09|10|11|12/.test(
			monthEl.value,
		);
		if (monthEl.value.length === 2 && isMonthValid) {
			errExpDate.classList.add('invisible');
			monthEl.classList.remove('focus-invalid');
		}
		if (monthEl.value.length === 2 && !isMonthValid) {
			errExpDate.classList.remove('invisible');
			monthEl.classList.add('focus-invalid');
		}
		if (monthEl.value === '') {
			errExpDate.classList.add('invisible');
			monthEl.classList.remove('focus-invalid');
		}
	});
}

if (yearEl) {
	yearEl.addEventListener('keyup', () => {
		cardYear.textContent = yearEl.value;
		const yearValueValid = /^\d{2}$/.test(yearEl.value);
		if (yearValueValid && yearEl.value.length > 1) {
			document.querySelector('.error-expdate').classList.add('invisible');
			yearEl.classList.remove('focus-invalid');
			console.log('1');
		}
		if (yearEl.value.length === 2 && !yearValueValid) {
			document.querySelector('.error-expdate').classList.remove('invisible');
			yearEl.classList.remove('focus-invalid');
			console.log('2');
		}
	});

	yearEl.addEventListener('focusout', function () {
		if (yearEl.value.length === 0) {
			yearEl.classList.add('focus-invalid');
			errExpDate.classList.remove('invisible');
			console.log('3');
		}
	});
}

// yearEl.addEventListener('focusin', () => {
// 	if (yearEl.value.length === 0) {
// 		yearEl.classList.remove('focus-invalid');
// 		errExpDate.classList.add('invisible');
// 		console.log('4');
// 	}
// });

if (cvcEl) {
	cvcEl.addEventListener('keyup', () => {
		cardCvc.textContent = cvcEl.value;
		const cvcValueValid = /^\d{3}$/.test(cvcEl.value);

		if (cvcEl.value.length === 1 && cvcValueValid) {
			errCvc.classList.add('invisible');
			cvcEl.classList.remove('focus-invalid');
		}
		if (cvcEl.value === 3 && !cvcValueValid) {
			errCvc.classList.remove('invisible');
			cvcEl.classList.add('focus-invalid');
		} else {
			errCvc.classList.add('invisible');
			cvcEl.classList.remove('focus-invalid');
		}
	});

	cvcEl.addEventListener('focusout', function () {
		const cvcValueValid = /^\d{3}$/.test(cvcEl.value);
		if (cvcEl.value.length === 0 || 1 || 2) {
			cvcEl.classList.add('focus-invalid');
			errCvc.classList.remove('invisible');
		}
		if (cvcEl.value.length === 3 && cvcValueValid) {
			errCvc.classList.add('invisible');
			cvcEl.classList.remove('focus-invalid');
		}
	});
}

const successBox = document.querySelector('.card__success');

if (successBox) {
	cardName.textContent = userCardInfo.finalName;
	cardNumber.textContent = userCardInfo.finalCardNr;
	cardMonth.textContent = userCardInfo.finalMonth;
	cardYear.textContent = userCardInfo.finalYear;
	cardCvc.textContent = userCardInfo.finalCvc;
}

// const inputElements = document.querySelectorAll('.card__form--input');

// for (let inputBox of inputElements) {
// 	if (inputBox.id === 'name') {
// 		console.log('Found name!');
// 	} else if (inputBox.id === 'card_number') {
// 		console.log('Found card number!');
// 	} else if (inputBox.id === 'expiry_month') {
// 		console.log('Found expiry month!');
// 	} else if (inputBox.id === 'expiry_year') {
// 		console.log('Found expiry year!');
// 	} else if (inputBox.id === 'cvc') {
// 		console.log('Found cvc!');
// 	}
// }
