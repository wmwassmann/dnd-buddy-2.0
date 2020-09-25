// 1. Random Name Function
function generateName() {
	$.get('/api/charnameone', function (data) {
		console.log('randnname run');
		console.log(data);
		localStorage.setItem('charName', data.name);
	});
}

// 2. Send the gender / race / class to localStroage
function sendCharInfoToLocal() {
	$.get('api/findCharByUserID', function (data) {
		console.log('sendcharInfo run');
		console.log(data);
		if (data[0] != null) {
			localStorage.setItem('charName', data[0].name);
			localStorage.setItem('charGender', data[0].gender);
			localStorage.setItem('charRace', data[2].race);
			localStorage.setItem('charClass', data[1].name);
			localStorage.setItem('charID', data[0].id);
		}
		var name = localStorage.getItem('charName');
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		console.log('call 1');
		console.log(race);
		console.log(gender);
		console.log(name);
		console.log(classDisplay);

		$('#characterName').text(name);
		$('#gender').text(gender);
		$('#race').text(race);
		$('#class').text(classDisplay);
		weaponsSpells();
		randomImage();
		stats();
	});
}

// 3. get the race list (ignore it)
// async function gettheracelist() {
// 	console.log('racelist run');
// 	console.log(data);
// 	const response = await $.get('/api/charrace');
// 	const result = [];
// 	for (let i = 0; i < response.length; i++) {
// 		result.push(response[i].race);
// 	}
// 	console.log(result);
// 	return result;
// }
