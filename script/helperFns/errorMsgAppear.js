export default function errorMsgAppear(inputEl, errorEl) {
	errorEl.classList.remove('invisible');
	inputEl.classList.add('focus-invalid');
}
