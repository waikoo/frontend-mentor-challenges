function $(selector) {
	return document.querySelector(selector);
}

async function fetchAdvice() {
	const url = 'https://api.adviceslip.com/advice';
	const response = await fetch(url);
	return await response.json();
}

function fetchAndDisplayAdvice() {
	fetchAdvice().then(data => {
		console.log(data);
		$('#id').textContent = data.slip.id;
		$('#advice').textContent = data.slip.advice;
	});
}

$('.dice-con').addEventListener('click', () => {
	fetchAndDisplayAdvice();
});

window.addEventListener('DOMContentLoaded', fetchAndDisplayAdvice);
