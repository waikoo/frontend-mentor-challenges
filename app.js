function $(selector) {
	return document.querySelector(selector);
}

function $$(classSelector) {
	return document.getElementsByClassName(classSelector);
}

function generateTemplateCardHtml() {
	return `
  <div class="card card-template">
					<section class="text">
						<div class="col text-left">
							<span class="activity"></span>
							<span class="time"></span>
						</div>
						<div class="col text-right">
							<img src="images/icon-ellipsis.svg" alt="" />
							<span class="last-time"></span>
						</div>
					</section>
				</div>
  `;

	// $('.activity').textContent = allStats[0].title;
	// $('.time').textContent = `${allStats[0].timeframes.weekly.current}hrs`;
	// $(
	// 	'.last-time'
	// ).textContent = `Last Week - ${allStats[0].timeframes.weekly.previous}hrs`;
}
// handle initial draw
(function () {
	for (let i = 1; i < 7; i++) {
		$('.cards-con').innerHTML += generateTemplateCardHtml();
	}

	for (let timespan of $$('timespan')) {
		timespan.addEventListener('click', function () {
			selectTimespan(this);
		});

		if (timespan.dataset.isSelected === '1') {
			getAllStats().then(allStats => {
				displayStats(timespan, allStats);
			});
		}
	}
	$('.weekly').click();
})();

async function getAllStats() {
	const response = await fetch(`data.json`);
	return await response.json();
}

function selectTimespan(selected) {
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

function displayStats(frequency, allStats) {
	if (frequency.textContent === 'Daily') {
		console.log(frequency.textContent);
		// call displayDailyStats(allStats)
	}

	if (frequency.textContent === 'Weekly') {
		displayWeeklyStats(allStats);
	}

	if (frequency.textContent === 'Monthly') {
		// call displayMonthlyStats(allStats)
	}
}

// testing for 1, applying styles
function displayWeeklyStats(allStats) {
	allStats.forEach(category => {});
	console.log(allStats);
	// 1 card
	// $('.activity').textContent = allStats[0].title;
	// $('.time').textContent = `${allStats[0].timeframes.weekly.current}hrs`;
	// $(
	// 	'.last-time'
	// ).textContent = `Last Week - ${allStats[0].timeframes.weekly.previous}hrs`;

	// ! element will always be the same
	// ! textContent will be the same
	// ! prefix changes for .last-time
	// ! path to data changes
	// ! suffix will be the same

	// 1. array of objects
	// 2. each being a category - card
	// 3. timeframes & title
	// ! 4. display allStats[i].title on all occasions
	// allStats[i].timeframes.daily
	// allStats[i].timeframes.weekly
	// allStats[i].timeframes.monthly
}

function getWeekly(allStats, lastTimePrefix) {
	$('.activity').textContent = allStats[0].title;
	$('.time').textContent = `${allStats[0].timeframes.weekly.current}hrs`;
	$(
		'.last-time'
	).textContent = `Last Week - ${allStats[0].timeframes.weekly.previous}hrs`;
}
