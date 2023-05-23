// update chart with data.json values
async function updateChart() {
	async function fetchData() {
		const url = './data.json';
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
	// method 1
	const data = await fetchData();

	const days = data.map(day => {
		return day.day;
	});
	const spendingData = data.map(amount => {
		return amount.amount;
	});
	const labels = spendingData.map(amount => {
		return '$' + amount;
	});

	const fetchedData = [days, spendingData, labels];
	return fetchedData;

	// myChart.config.data.labels = days;
	// myChart.config.data.datasets[0].data = spendingData;
	// myChart.config.data.datasets[0].label = labels;
	// myChart.update();
}

const fetchedData = await updateChart();
console.log(fetchedData);

const data = {
	labels: fetchedData[0], // DAY
	datasets: [
		{
			data: fetchedData[1], //  AMOUNT
			backgroundColor: [
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(186, 34%, 60%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
			],
			hoverBackgroundColor: [
				'#ff9b87',
				'#ff9b87',
				'#b4dfe5',
				'#ff9b87',
				'#ff9b87',
				'#ff9b87',
				'#ff9b87',
			],
			borderWidth: 0,
			borderRadius: 4,
		},
	],
};

const xScalePadding = {
	id: 'xScalePadding',
	beforeDatasetsDraw(chart, args, pluginOptions) {
		const {
			ctx,
			data,
			scales: { x, y },
		} = chart;
		console.log(x._labelItems);
		console.log(x._labelItems[0].textBaseline);
		x._labelItems.forEach((label, index) => {
			label.textBaseline = 'top';
			label.textOffset = 8;
		});
	},
};

const config = {
	type: 'bar',
	data,
	options: {
		responsive: true,
		maintainAspectRatio: false,
		onHover: (event, chartElement) => {
			if (chartElement.length === 1) {
				event.native.target.style.cursor = 'pointer';
			}

			if (chartElement.length === 0) {
				event.native.target.style.cursor = 'default';
			}
		},
		scales: {
			x: {
				grid: {
					drawOnChartArea: false,
					drawTicks: false,
					drawBorder: false,
				},
				title: {
					padding: {
						top: 20,
					},
				},
				afterFit: context => {
					// adds height
					context.height += 20;
				},
			},
			y: {
				beginAtZero: true,
				ticks: {
					display: false,
				},
				grid: {
					drawOnChartArea: false,
					drawTicks: false,
					drawBorder: false,
				},
			},
		},
		plugins: {
			tooltip: {
				yAlign: 'bottom',
				caretSize: 0,
				displayColors: false,
				callbacks: {
					title: () => {
						return '';
					},
					label: context => {
						return `$${context.formattedValue}`;
					},
				},
				backgroundColor: 'hsl(25, 47%, 15%)',
			},
			legend: {
				display: false,
			},
		},
		layout: {
			padding: {
				// bottom: 30, // controls height
			},
		},
	},
	plugins: [xScalePadding],
};

// render init
const myChart = new Chart(document.getElementById('chart'), config);

// method 2

// fetchData().then(data => {
//   const days = data.map(day => {
//     return day.day;
//   });
//   const spendingData = data.map(amount => {
//     return amount.amount;
//   });
//   const labels = spendingData.map(amount => {
//     return '$' + amount;
//   });

//   myChart.config.data.labels = days;
//   myChart.config.data.datasets[0].data = spendingData;
//   myChart.config.data.datasets[0].label = labels;
//   myChart.update();
// }
