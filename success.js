const storedFinalValues = JSON.parse(sessionStorage.getItem('finalItems'));

const cardName = document.querySelector('.card-name');
const cardNr = document.querySelector('.card-nr');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');
const cardCvc = document.querySelector('.cvc');

const outputElements = [cardName, cardNr, cardMonth, cardYear, cardCvc];

for (let i = 0; i < outputElements.length; i++) {
	outputElements[i].textContent = storedFinalValues[i];
}

sessionStorage.clear();
