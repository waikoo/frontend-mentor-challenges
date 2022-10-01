function $(selector) {
	return document.querySelector(selector);
}
function $$(classSelector) {
	return document.body.getElementsByClassName(classSelector);
}
function errorMessage(command) {
	switch (command) {
		case 'show':
			$('#people').classList.add('invalidated');
			$('.error-msg').classList.add('visible');
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
function fixTipHandler(button, bill) {
	if (bill.isCustomTip) {
		bill.isCustomTip = false;
		bill.isFixTip = true;
	} else {
		for (let fixTip of $$('fixedTip')) {
			if (button === fixTip) {
				button.classList.add('selected');
				const percentage = parseInt(button.textContent);
				return (bill.total * percentage) / 100;
			}
		}
	}
}
function getTotalPerPerson(bill, tip, people) {
	return (bill + tip) / people;
}
function getTipPerPerson(calculatedTip, nrOfPeople) {
	return calculatedTip / nrOfPeople;
}
function displayResult(obj) {
	console.log(obj);
	obj.result = {};

	obj.result.withTip = getTotalPerPerson(
		obj.total,
		obj.tipValue,
		obj.nrOfPeople
	);

	obj.result.tipOnly = getTipPerPerson(obj.tipValue, obj.nrOfPeople);

	console.log(obj.result.tipOnly);
	console.log(obj.result.withTip);
	$('.tip-only').textContent = `$${obj.result.tipOnly.toFixed(2)}`;
	$('.with-tip').textContent = `$${obj.result.withTip.toFixed(2)}`;
}

window.addEventListener('DOMContentLoaded', function () {
	const bill = {
		isCustomTip: false,
		isFixTip: false
	};

	$('#bill').addEventListener('change', e => {
		let registerString = '';
		registerString += e.currentTarget.value;
		bill.valueOnInput = Number(registerString);
	});

	$('#bill').addEventListener('focusout', () => {
		bill.valueOnFocusOut = Number($('#bill').value);
		$('#bill').value && $('#bill').classList.add('validated');
		if (bill.valueOnInput === bill.valueOnFocusOut) {
			bill.total = bill.valueOnInput;
			delete bill.valueOnInput;
			delete bill.valueOnFocusOut;
		}
	});

	$('.customTip').addEventListener('focusout', () => {
		$('.customTip').value && $('.customTip').classList.add('validated');
	});

	for (let tip of $$('fixedTip')) {
		tip.addEventListener('click', function () {
			bill.isFixTip = true;
			bill.tipValue = fixTipHandler(this, bill);
		});
	}

	$('.customTip').addEventListener('change', e => {
		if ($('.customTip').value) {
			bill.isCustomTip = true;
			bill.isFixTip = false;
			let customNum = Number(e.currentTarget.value);
			bill.tipValue = (bill.total * customNum) / 100;
		}
	});

	$('.customTip').addEventListener('focusout', () => {
		if ($('#people').value.length < 1) {
			errorMessage('show');
		}
	});

	$('#people').addEventListener('input', function (e) {
		$('#people').value === 0
			? errorMessage('show')
			: errorMessage('disappear');

		bill.nrOfPeople = parseInt(e.data);

		displayResult(bill);
	});
});
