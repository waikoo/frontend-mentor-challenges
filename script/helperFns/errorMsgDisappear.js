export default function errorMsgDisappear(inputEl, errorEl) {
	errorEl.classList.add('invisible');
	inputEl.classList.remove('focus-invalid');
}
