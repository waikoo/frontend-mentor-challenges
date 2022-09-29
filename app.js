function $(selector) {
	return document.querySelector(selector);
}

function $$(selector) {
	return document.body.getElementsByClassName(selector);
}

function getTotalPerPerson(billNoTip, tipValue, numberOfPeople) {
	return (billNoTip + tipValue) / numberOfPeople;
}

function getTipPercentage(percentage) {
	console.log(percentage);
	return percentage;
}

function tipPercentageHandler(button, billValue) {
	// if fixTip:
	for (let fixTip of $$('fixedTip')) {
		if (button === fixTip) {
			button.classList.add('selected');
			const percentage = parseInt(button.textContent);
			const tipPercentageValue = (billValue * percentage) / 100;
			return tipPercentageValue;
		}
	}
}

function sendNumberOfPeople(obj) {
	const parsedToInt = parseInt(obj);
	return parsedToInt;
}

function getBillValue(billEl) {
	if (Number.isInteger(+billEl.value)) {
		return parseInt(billEl.value);
	} else {
		return parseFloat(billEl.value);
	}
}

// (function () {
// 	$('#bill').value = 142.55;
// 	$('.wtv').click();
// 	$('#people').value = 5;
// })();

const bill = Object.create(null);

window.addEventListener('DOMContentLoaded', function () {
	const percentageButtons = document.getElementsByClassName('fixedTip');

	for (let tip of percentageButtons) {
		tip.addEventListener('click', function () {
			bill.billValue = getBillValue($('#bill'));
			bill.percentageValue = tipPercentageHandler(this, bill.billValue);
		});
	}

	$('#people').addEventListener('input', function (e) {
		bill.nrOfPeople = sendNumberOfPeople(e.data);

		bill.unformattedResult = getTotalPerPerson(
			bill.billValue,
			bill.percentageValue,
			bill.nrOfPeople
		);

		bill.tipOnly = bill.percentageValue / bill.nrOfPeople;
		bill.tipOnly = Number(bill.tipOnly.toFixed(2));
		bill.withTip = Number(parseFloat(bill.unformattedResult).toFixed(2));
		$('.tip-only').textContent = `$${bill.tipOnly}`;
		$('.with-tip').textContent = `$${bill.withTip}`;
	});
});
