import { $, $$ } from './js/util.js';

function errorMessage(command) {
	switch (command) {
		case 'show':
			$('#people').classList.add('invalidated');
			$('.error-msg').classList.add('visible');
			// $('#people::focus-visible').style.outlineColor = '#b48372';
			break;

		case 'disappear':
			$('#people').classList.remove('invalidated');
			$('.error-msg').classList.remove('visible');
			break;

		default:
			console.warn('Refactor refactor refactor repeat');
			break;
	}
}
function fixTipHandler(bill) {
	return (bill.total * bill.tipPercentage) / 100;
}
function getTotalPerPerson(bill, tip, people) {
	const result = (bill + tip) / people;
	if (!Number.isFinite(result)) return 0;
	return result;
}
function getTipPerPerson(calculatedTip, nrOfPeople) {
	const result = calculatedTip / nrOfPeople;
	if (!Number.isFinite(result)) return 0;
	return result;
}
function displayResult(bill) {
	bill.tipValue = fixTipHandler(bill);
	const result = {
		withTip: getTotalPerPerson(bill.total, bill.tipValue, bill.nrOfPeople).toFixed(2),
		tipOnly: getTipPerPerson(bill.tipValue, bill.nrOfPeople).toFixed(2)
	};

	$('.tip-only').textContent = `$${result.tipOnly}`;
	$('.with-tip').textContent = `$${result.withTip}`;
}

const billEl = document.querySelector('#bill');
const customTipEl = document.querySelector('.customTip');

const bill = {
	total: null,
	tipValue: null,
	tipPercentage: null,
	nrOfPeople: null
};

customTipEl.addEventListener('focusout', () => {
	if ($('#people').value.length < 1) {
		errorMessage('show');
	}
});

for (let tipEl of $$('fixedTip')) {
	tipEl.addEventListener('click', function (e) {
		const tipElement = e.target;

		if (tipElement === tipEl) {
			tipEl.classList.add('selected');
		} else {
			tipEl.classList.remove('selected');
		}
		bill.tipPercentage = Number(tipElement.dataset.percent);
		displayResult(bill);
	});
}

billEl.addEventListener('input', e => {
	const registerString = e.currentTarget.value;
	bill.total = Number(registerString);

	displayResult(bill);
});

customTipEl.addEventListener('input', e => {
	if (!customTipEl.value) return;
	let customNum = Number(e.currentTarget.value);
	bill.tipPercentage = customNum;

	displayResult(bill);
});

customTipEl.addEventListener('focusout', () => {
	if ($('#people').value.length < 1) {
		errorMessage('show');
	}
});

$('#people').addEventListener('input', function (e) {
	Number($('#people').value) === 0 ? errorMessage('show') : errorMessage('disappear');

	bill.nrOfPeople = parseInt(e.data);
	displayResult(bill);
});
