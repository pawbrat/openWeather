import moment from 'moment';

let groupBy = function(xs, key) {
	  return xs.reduce(function(rv, x) {
	    (rv[x[key]] = rv[x[key]] || []).push(x);
	    return rv;
	  }, []);
	};


let groupChunks = function(data) {
	//need to know which day each entry belongs to 
	let z = data.map(item => {
		return {label: moment(item.dt_txt).format('dddd'), data: item};
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
	console.log(dailyData);
	
//	console.log(groupBy(z, 'label'));
//	console.log(groupBy(z, 'label').sort());

	return;
	console.log(data);
	let chunks = Array(5).fill([]);
	console.log(chunks);
	data.forEach(item => chunks.push(moment(item.dt_txt)));
		//console.log(moment(item.dt)));
	chunks.forEach(item => console.log(item.format('dddd')));
}

export default groupChunks;