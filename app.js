function $(selector) {
	return document.querySelector(selector);
}

function $$(classSelector) {
	return document.getElementsByClassName(classSelector);
}

function generateWeeklyDataHtml(i) {
	return `
  <div class="card card${i} card-template">
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
}

// handle initial draw
(function () {
	for (let i = 1; i < 7; i++) {
		$('.cards-con').innerHTML += generateWeeklyDataHtml(i);
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

function displayWeeklyStats(allStats) {
	for (let card of $$('card-template')) {
		for (let i = 0; i <= $$('card-template').length; i++) {
			if (card.classList.contains(`card${i + 1}`)) {
				outputWeekly(allStats, card, i);
			}
		}
	}
}

function outputWeekly(allStats, card, i) {
	console.log(allStats);

	card.firstElementChild.firstElementChild.firstElementChild.textContent =
		allStats[i].title;
	card.firstElementChild.firstElementChild.lastElementChild.textContent = `${allStats[i].timeframes.weekly.current}hrs`;
	card.firstElementChild.lastElementChild.lastElementChild.textContent = `Last Week - ${allStats[i].timeframes.weekly.previous}hrs`;
}
