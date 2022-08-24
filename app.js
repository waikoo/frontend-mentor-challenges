// const btn = document.querySelector('.sub__submit');

const input = document.getElementById('sub__email');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	console.log('SUBMIT -->' + input.value);
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (input.value.match(validRegex)) {
		console.log('Valid email!');
		input.value = '';
	} else {
		alert('Please provide a valid email');
	}
});
