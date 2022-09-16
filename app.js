// setup
// const labelChart = '$';

const data = {
	labels: [], // DAY
	datasets: [
		{
			label: '',
			data: [], // AMOUNT
			backgroundColor: [
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(186, 34%, 60%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
				'hsl(10, 79%, 65%)',
			],
			borderWidth: 0,
			borderRadius: 4,
		},
	],
};

// tooltip
// const titleTooltip = tooltipItems => {
// 	return labelTooltip;
// };
// const charBeforeLabel = tooltipItems => {
// 	return labelChart;
// };
// config
const config = {
	type: 'bar',
	data,
	options: {
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
						console.log(context);
						return `$${context.formattedValue}`;
					},
				},
				backgroundColor: 'hsl(25, 47%, 15%)',
			},
			legend: {
				display: false,
			},
		},
	},
};
// render init
const myChart = new Chart(document.getElementById('chart'), config);

function updateChart() {
	async function fetchData() {
		const url = './data.json';
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	fetchData().then(data => {
		const days = data.map(day => {
			return day.day;
		});
		const spendingData = data.map(amount => {
			return amount.amount;
		});
		const labels = spendingData.map(amount => {
			return '$' + amount;
		});
		console.log(spendingData);
		myChart.config.data.labels = days;
		myChart.config.data.datasets[0].data = spendingData;
		myChart.config.data.datasets[0].label = labels;
		myChart.update();
	});
}

updateChart();
