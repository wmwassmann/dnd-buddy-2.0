// 1. Random Name Function
function generateName() {
	$.get('/api/charnameone', function (data) {
		localStorage.setItem('charName', data.name);
	});
}

// 2. get the race list (ignore it)
// function gettheracelist() {
// 	$.get('/api/charrace', function (data) {
// 		const result = [];
// 		for (let i = 0; i < data.length; i++) {
// 			result.push(data[i].race);
// 		}
// 		console.log(result);
// 		return result;
// 	});
// }
