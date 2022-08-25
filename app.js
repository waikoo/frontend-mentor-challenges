// const btn = document.querySelector('.sub__submit');

const input = document.getElementById('sub__email');
const form = document.querySelector('form');
const text = document.querySelector('.sub__text-con');

form.addEventListener('submit', e => {
	e.preventDefault();
	console.log('SUBMIT -->' + input.value);
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (input.value.match(validRegex)) {
		console.log('Valid email!');
		input.value = '';
	} else {
		console.log('Please provide a valid email');
		input.style.borderColor = '#dd7171';
		input.style.borderWidth = '2px';
		input.style.opacity = '1';
		input.value = '';

		document.querySelector('.error-img').style.display = 'block';
		document.querySelector('.error').style.display = 'block';
	}
});
