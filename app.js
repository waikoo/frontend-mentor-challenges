const emailEl = document.querySelector('.ping__email');
const formEl = document.querySelector('.ping__form');
const errorMsg = document.querySelector('.error-msg');
const regex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const showError = () => {
	emailEl.classList.add('invalid');
	errorMsg.classList.add('show-error');
};

const removeError = () => {
	emailEl.classList.remove('invalid');
	errorMsg.classList.remove('show-error');
};

const showValidation = () => {
	emailEl.classList.add('valid');
	emailEl.classList.add('focus-valid');
};

const removeValidation = () => {
	emailEl.classList.remove('focus-valid');
	emailEl.classList.remove('valid');
};

const emailValidator = email => {
	const isValidEmail = regex.test(email);

	if (!isValidEmail) {
		showError();
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
		showValidation();
		removeError();
		emailEl.classList.add('no-focus-accent');
	}

	if (emailEl.value === '') {
		removeValidation();
		emailEl.classList.remove('no-focus-accent');
	}
};

emailEl.addEventListener('focus', () => {
	removeValidation();
	removeError();
});

emailEl.addEventListener('input', onEmailInput);
formEl.addEventListener('submit', onSubmit);
