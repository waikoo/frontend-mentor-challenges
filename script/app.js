import $ from './helperFns/elementSelector.js';
import formatName from './helperFns/formatName.js';
import charLimit from './helperFns/charLimit.js';
import getFinalValues from './helperFns/getFinalValues.js';
import isInputValid from './helperFns/isInputValid.js';
import errorMsgDisappear from './helperFns/errorMsgDisappear.js';
import errorMsgAppear from './helperFns/errorMsgAppear.js';

const formEl = document.querySelector('.card__form');

const nameEl = formEl.querySelector('#name');
const cardNumberEl = formEl.querySelector('#card_number');
const monthEl = formEl.querySelector('#expiry_month');
const yearEl = formEl.querySelector('#expiry_year');
const cvcEl = formEl.querySelector('#cvc');

const errName = formEl.querySelector('.error-name');
const errCardNr = formEl.querySelector('.error-number');
const errExpDate = formEl.querySelector('.error-expdate');
const errCvc = formEl.querySelector('.error-cvc');

const cardName = $('.img-con').querySelector('.card-name');
const cardNumber = $('.img-con').querySelector('.card-nr');
const cardMonth = $('.img-con').querySelector('.card-month');
const cardYear = $('.img-con').querySelector('.card-year');
const cardCvc = $('.img-con').querySelector('.card-cvc');

let userCardInfo;

document.querySelectorAll('.limit-length').forEach(input => {
	input.addEventListener('input', charLimit);
});

// ! ON FORM SUBMIT:

formEl.addEventListener('submit', e => {
	e.preventDefault();

	let nameValueOnSubmit;
	if (isInputValid(nameEl, errName) === 'noregex') {
		nameValueOnSubmit = true;
	} else {
		nameValueOnSubmit = false;
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

	if (
		nameValueOnSubmit &&
		cardNrOnSubmit &&
		monthValueOnSubmit &&
		yearValueOnSubmit &&
		cvcValueOnSubmit
	) {
		const formattedName = formatName(nameEl.value);
		userCardInfo = getFinalValues(
			formattedName,
			cardNumberEl.value,
			monthEl.value,
			yearEl.value,
			cvcEl.value,
		);
		formEl.submit();
	}
});

// ! KEYUP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
nameEl.addEventListener('keyup', e => {
	cardName.textContent = nameEl.value;
	if (nameEl.value) {
		errorMsgDisappear(nameEl, errName);
	}
});

nameEl.addEventListener('focusout', () => {
	if (nameEl.value.length === 0) {
		errorMsgAppear(nameEl, errName);
	}
});

cardNumberEl.addEventListener('keyup', e => {
	cardNumber.textContent = cardNumberEl.value;
	const cardNumberRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

	if (/\d/g.test(cardNumberEl.value)) {
		errorMsgDisappear(cardNumberEl, errCardNr);
	}
	//
	if (cardNumberEl.value.length === 19) {
		!cardNumberRegex.test(cardNumberEl.value)
			? errorMsgAppear(cardNumberEl, errCardNr)
			: errorMsgDisappear(cardNumberEl, errCardNr);
	}

	if (/[^\d\s]+/.test(cardNumberEl.value)) {
		cardNumberEl.value = cardNumberEl.value.slice(0, -1);
		errorMsgAppear(cardNumberEl, errCardNr);
	}
});

cardNumberEl.addEventListener('focusout', function () {
	if (this.value.length < 19) {
		errorMsgAppear(cardNumberEl, errCardNr);
	}
});

cardNumberEl.addEventListener('input', function () {
	if (
		cardNumberEl.value.length === 4 ||
		cardNumberEl.value.length === 9 ||
		cardNumberEl.value.length === 14
	) {
		cardNumberEl.value = cardNumberEl.value + ' ';
	}
});

cardNumberEl.addEventListener('paste', function (e) {
	const copiedCardNr = e.clipboardData.getData('text/plain');
	const arrayedCardNr = copiedCardNr.match(/.{1,4}/g);
	const formattedCardNr = arrayedCardNr.join(' ');
	cardNumberEl.value = formattedCardNr;
});

if (monthEl) {
	monthEl.addEventListener('keyup', () => {
		cardMonth.textContent = monthEl.value;
		const isMonthValid = /01|02|03|04|05|06|07|08|09|10|11|12/.test(
			monthEl.value,
		);

		if (monthEl.value.length === 2) {
			!isMonthValid
				? errorMsgAppear(monthEl, errExpDate)
				: errorMsgDisappear(monthEl, errExpDate);
		}
	});
}

if (yearEl) {
	yearEl.addEventListener('keyup', () => {
		cardYear.textContent = yearEl.value;
		const yearValueValid = /^\d{2}$/.test(yearEl.value);

		if (yearEl.value.length === 2) {
			!yearValueValid
				? errorMsgAppear(yearEl, errExpDate)
				: errorMsgDisappear(yearEl, errExpDate);
		}
	});
}

yearEl.addEventListener('focusout', function () {
	if (yearEl.value.length === 0) {
		errorMsgAppear(yearEl, errExpDate);
	}
});

cvcEl.addEventListener('keyup', () => {
	cardCvc.textContent = cvcEl.value;
	const cvcValueValid = /^\d{3}$/.test(cvcEl.value);

	if (cvcEl.value.length === 1 && cvcValueValid) {
		errorMsgDisappear(cvcEl, errCvc);
	}

	if (cvcEl.value === 3) {
		!cvcValueValid
			? errorMsgAppear(cvcEl, errCvc)
			: errorMsgDisappear(cvcEl, errCvc);
	}
});

cvcEl.addEventListener('focusout', function () {
	const cvcValueValid = /^\d{3}$/.test(cvcEl.value);

	if (cvcEl.value.length === 0 || 1 || 2) {
		errorMsgAppear(cvcEl, errCvc);
	}
	if (cvcEl.value.length === 3 && cvcValueValid) {
		errorMsgDisappear(cvcEl, errCvc);
	}
});

(function () {
	$('#name').value = 'David Flanagan';
	$('#card_number').value = '1234 1234 1234 1234';
	$('#expiry_month').value = '12';
	$('#expiry_year').value = '28';
	$('#cvc').value = '247';
})();
