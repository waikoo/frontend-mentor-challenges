const form = document.querySelector('form');
const fName = document.querySelector('.form__fname');
const lName = document.querySelector('.form__lname');
const email = document.querySelector('.form__email');
const passwd = document.querySelector('.form__password');

console.log(passwd);

const eFname = document.querySelector('.e-fname');
const eLname = document.querySelector('.e-lname');
const eEmail = document.querySelector('.e-email');
const ePasswd = document.querySelector('.e-passwd');

const formItem = document.querySelector('.form__item');

const emailValidator = () => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.value.match(validRegex)) {
		return true;
	} else {
		return false;
	}
};

const onSubmitHandler = e => {
	e.preventDefault();

	if (!fName.value) {
		eFname.style.display = 'block';
		fName.style.marginBottom = '0';
		fName.style.borderColor = '#ff7a7a';
		fName.placeholder = '';
		console.log(fName);
	}

	if (!lName.value) {
		eLname.style.display = 'block';
		lName.style.marginBottom = '0';
		lName.style.borderColor = '#ff7a7a';
		lName.placeholder = '';
	}
	if (!passwd.value) {
		console.log(passwd);
		ePasswd.style.display = 'block';
		passwd.style.marginBottom = '0';
		passwd.style.borderColor = '#ff7a7a';
		passwd.placeholder = '';
	}

	if (!emailValidator()) {
		eEmail.style.display = 'block';
		email.style.marginBottom = '0';
		email.style.borderColor = '#ff7a7a';
		email.placeholder = 'email@example/com';
	}
};

form.addEventListener('submit', onSubmitHandler);
