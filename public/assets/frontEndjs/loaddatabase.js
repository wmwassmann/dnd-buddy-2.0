// 1. Random Name Function
function generateName() {
	$.get('/api/charnameone', function (data) {
		// console.log('randnname run');
		localStorage.setItem('charName', data.name);
	});
}

// 2. Send the gender / race / class to localStroage
function sendCharInfoToLocal() {
	$.get('api/findCharByUserID', function (data) {
		// console.log('sendcharInfo run');
		if (data[0] != null) {
			localStorage.setItem('charName', data[0].name);
			localStorage.setItem('charGender', data[0].gender);
			localStorage.setItem('charRace', data[3].race);
			localStorage.setItem('charClass', data[2].name);
		}
	});
}

// 3. get the race list (ignore it)
async function gettheracelist() {
	// console.log('racelist run');
	const response = await $.get('/api/charrace');
	const result = [];
	for (let i = 0; i < response.length; i++) {
		result.push(response[i].race);
	}
	console.log(result);
	return result;
}
