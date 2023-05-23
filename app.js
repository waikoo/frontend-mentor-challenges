function $(selector) {
	return document.querySelector(selector);
}

function $$(classSelector) {
	return document.getElementsByClassName(classSelector);
}

function generateTemplateCardHtml(i) {
	const THREE_DOTS_ICON = `<svg id="dots" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fill-rule="evenodd"/></svg>`;
	return `
  <div class="card card${i} card-template">
					<section class="text">
						<div class="col text-left">
							<span class="activity"></span>
							<span class="time"></span>
						</div>
						<div class="col text-right">
							${THREE_DOTS_ICON}
							<span class="last-time"></span>
						</div>
					</section>
				</div>
  `;
}

(function () {
	// draw 6 cards
	for (let i = 1; i < 7; i++) {
		$('.cards-con').innerHTML += generateTemplateCardHtml(i);
	}
	// add eventlisteners
	for (let timespan of $$('timespan')) {
		timespan.addEventListener('click', function () {
			selectTimespan(this);
		});
	}
	$('.weekly').click();
})();

async function getAllStats() {
	const response = await fetch(`data.json`);
	return await response.json();
}

function handleClick(selected) {
	getAllStats().then(allStats => {
		displayController(selected, allStats);
	});
}

function selectTimespan(selected) {
	for (let timespan of $$('timespan')) {
		if (timespan === selected) {
			timespan.dataset.isSelected = '1';
			timespan.classList.add('selected');
			handleClick(selected);
		} else {
			timespan.dataset.isSelected = '0';
			timespan.classList.remove('selected');
		}
	}
}

function displayController(selected, allStats) {
	if (selected.textContent === 'Daily') {
		displayStats(allStats, 'daily');
	}

	if (selected.textContent === 'Weekly') {
		displayStats(allStats, 'weekly');
	}

	if (selected.textContent === 'Monthly') {
		displayStats(allStats, 'monthly');
	}
}

function displayStats(allStats, selectedString) {
	for (let card of $$('card-template')) {
		for (let i = 0; i <= $$('card-template').length; i++) {
			if (card.classList.contains(`card${i + 1}`)) {
				outputStats(allStats, card, i, selectedString);
			}
		}
	}
}

function outputStats(allStats, card, i, selectedString) {
	let prefix = '';
	const prePreFix = 'Last';

	switch (selectedString) {
		case 'daily':
			prefix = `Yesterday`;
			break;
		case 'monthly':
			prefix = `${prePreFix} Month`;
		default:
			prefix = `${prePreFix} Week`;
			break;
	}

	card.firstElementChild.firstElementChild.firstElementChild.textContent =
		allStats[i].title;
	card.firstElementChild.firstElementChild.lastElementChild.textContent = `${allStats[i].timeframes[selectedString].current}hrs`;
	card.firstElementChild.lastElementChild.lastElementChild.textContent = `${prefix} - ${allStats[i].timeframes[selectedString].previous}hrs`;
}
