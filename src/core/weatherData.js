import moment from 'moment';

let averageHelper = function(data, param) {
	let averageValue = data.map(item => {
		return item.main[param];
	}).reduce((x, y) => x + y) / data.length;
	return averageValue.toFixed(1);
}

let getAvgData = function(dailyData) {
	let averages = {};
	averages.avg = averageHelper(dailyData, 'temp');
	averages.max = averageHelper(dailyData, 'temp_max');
	averages.min = averageHelper(dailyData, 'temp_min');
	return averages;
}

let groupChunks = function(data) {
	//need to know which day each entry belongs to 
	let z = data.map(item => {
		let dateAndTime = moment(item.dt_txt);
		item.label = dateAndTime.format('dddd');
		item.hours = dateAndTime.format('HH:mm');
		return item;
	});

	//group by day
	let dailyData = [];

	let lastDay = '';

	z.forEach(item => {
		if (lastDay !== item.label) {
			lastDay = item.label;
			dailyData.push([]);
		}
		dailyData[dailyData.length-1].push(item);
	});
	return dailyData;
}

let weatherData = {groupChunks, getAvgData};

export default weatherData;