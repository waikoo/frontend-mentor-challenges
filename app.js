const emailEl = document.querySelector('.ping__email');
const formEl = document.querySelector('.ping__form');
const errorMsg = document.querySelector('.error-msg');
const regex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValidator = email => {
	const isValidEmail = regex.test(email);

	if (!isValidEmail) {
		emailEl.classList.add('invalid');
		errorMsg.classList.add('show-error');
	}
	return isValidEmail;
};

const onSubmit = e => {
	e.preventDefault();
	const isValidEmail = emailValidator(emailEl.value);

	if (isValidEmail) {
		formEl.submit();
	} else {
		emailEl.classList.add('invalid');
		errorMsg.classList.add('show-error');
	}
};

const onEmailInput = () => {
	if (regex.test(emailEl.value)) {
		emailEl.classList.add('valid');
		emailEl.classList.add('focus-valid');
		emailEl.classList.remove('invalid');
		errorMsg.classList.remove('show-error');
	}

	if (emailEl.value === '') {
		emailEl.classList.remove('focus-valid');
		emailEl.classList.remove('valid');
	}
};

emailEl.addEventListener('input', onEmailInput);
formEl.addEventListener('submit', onSubmit);
emailEl.addEventListener('focus', () => {
	emailEl.classList.remove('focus-valid');
	emailEl.classList.remove('invalid');
	errorMsg.classList.remove('show-error');
});
