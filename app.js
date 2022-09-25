function $(selector) {
	return document.querySelector(selector);
}

function $$(classSelector) {
	return document.getElementsByClassName(classSelector);
}

async function getAllStats() {
	const response = await fetch(`data.json`);
	return await response.json();
}

// testing for 1, applying styles
function displayWeeklyStats(allStats) {
	console.log(allStats);
	$('.activity').textContent = allStats[0].title;
	$('.time').textContent = `${allStats[0].timeframes.weekly.current}hrs`;
	$(
		'.last-time'
	).textContent = `Last Week - ${allStats[0].timeframes.weekly.previous}hrs`;
}

getAllStats().then(allStats => {
	displayWeeklyStats(allStats);
});

// daily, weekly, monthly

console.log($$('timespan'));

function selectTimespan(selected) {
	console.log('selectTimespan triggered');
	console.log(this);
	for (let timespan of $$('timespan')) {
		if (timespan === selected) {
			timespan.dataset.isSelected = '1';
			timespan.classList.add('selected');
		} else {
			timespan.dataset.isSelected = '0';
			timespan.classList.remove('selected');
		}
	}
}

// decide which timespan to show
for (let timespan of $$('timespan')) {
	timespan.addEventListener('click', function () {
		// using function declaration
		selectTimespan(this);
		// with fn declaration 'this' refers to the element that's clicked upon, otherwise (addEventListener with an arrow function) it refers to the window object
	});
}
