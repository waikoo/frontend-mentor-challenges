import errorMsgAppear from './errorMsgAppear.js';

export default function isInputValid(inputEl, errorEl, regex = null) {
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
		}
	}
}
