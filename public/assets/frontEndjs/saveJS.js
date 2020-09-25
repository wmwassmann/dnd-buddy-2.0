$(document).ready(function() {
    $("#saveBtn").on('click', function () {
    let name = localStorage.getItem('charName');
    let race = localStorage.getItem('charRace');
	let charClass = localStorage.getItem('charClass');
    let charGender = localStorage.getItem('charGender');
    
    if (race === 'Human') {
        race = 1;
    } else if (race === 'Dwarf') {
        race = 2;
    } else if (race === 'Elf') {
        race = 3;
    } else {
        race = 4;
    };

    updateName(name, race, charClass, charGender);
    });


    function updateName(name, race, charClass, charGender) {
        $.ajax({
            url: '/api/save',
            type: 'PUT',
            data: {
                char_name: name,
                race_id: race,
                char_class_id: charClass,
                char_gender: charGender,
            },
          });
    };
});

