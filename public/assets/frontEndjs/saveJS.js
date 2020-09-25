$(document).ready(function () {
	$('#savetoDB').on('click', function () {
		let name = localStorage.getItem('charName');
		let race = localStorage.getItem('charRace');
		let charClass = localStorage.getItem('charClass');
		let charGender = localStorage.getItem('charGender');
		let charID = localStorage.getItem('charID');
		// if (race === 'Human') {
		//     race = 1;
		// } else if (race === 'Dwarf') {
		//     race = 2;
		// } else if (race === 'Elf') {
		//     race = 3;
		// } else {
		//     race = 4;
		// };

		updateUserChar(name, race, charClass, charGender, charID);
	});

	//Logout button clears localstorage so a new user can login
	$('#logout').on('click', function () {
		localStorage.clear();
		$(this).attr('href', '/logout');
		$(this).click();
	});

	function updateUserChar(name, race, charClass, charGender, charID) {
		$.ajax({
			url: '/api/save',
			type: 'PUT',
			data: {
				char_name: name,
				race: race,
				char_class: charClass,
				char_gender: charGender,
				char_id: charID,
			},
		});
	}
});
