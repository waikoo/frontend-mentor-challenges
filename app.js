const labels = document.querySelectorAll('.accordion__label');
const box = document.querySelector('.box');

labels.forEach(label => {
	label.addEventListener('mouseenter', () => {
		box.style.left = '-125px';
		// box.style.left = '-30px';
	});
	label.addEventListener('mouseout', () => {
		box.style.left = '-85px';
	});
});
