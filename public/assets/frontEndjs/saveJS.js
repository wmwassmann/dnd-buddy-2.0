$(document).ready(function() {
    $("#savetoDB").on('click', function () {
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

    updateUserChar(name, race, charClass, charGender);
    });

    //Logout button clears localstorage so a new user can login
    $("#logout").on('click', function(){
        console.log('logout works!');
        localStorage.clear();
        $(this).attr('href', "/logout");
        $(this).click();
    });

    function updateUserChar(name, race, charClass, charGender) {
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

