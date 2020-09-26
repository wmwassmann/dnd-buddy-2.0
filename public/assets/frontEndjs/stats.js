// Attribute Stats Function
function stats() {

    // Variables
	var hitpoints = document.getElementById('health');
	var armor = document.getElementById('armor');
	var str = document.getElementById('sideStatNumber1');
	var dex = document.getElementById('sideStatNumber2');
	var con = document.getElementById('sideStatNumber3');
	var int = document.getElementById('sideStatNumber4');
	var wis = document.getElementById('sideStatNumber5');
	var cha = document.getElementById('sideStatNumber6');
	var strInt = document.getElementById('sideStatNumber7');
	var dexWis = document.getElementById('sideStatNumber8');
	var strMod = document.createElement("h5");
	var dexMod = document.createElement("h5");
	var conMod = document.createElement("h5");
	var intMod = document.createElement("h5");
	var wisMod = document.createElement("h5");
	var chaMod = document.createElement("h5");
	var strIntMod = document.createElement("h5");
	var dexWisMod = document.createElement("h5");
    
    //Get Race and Class from Local Storage
	var race = localStorage.getItem('charRace');
    var classDisplay = localStorage.getItem('charClass');

    // Human If Statements
	if (race === 'Human') {

		if (classDisplay === 'Fighter') {
			hitpoints.text('15');
			armor.text('15');
			str.text('17');
			$(strMod).text("Mod: +3");
			$(str).append(strMod);
			$(dex).text('13');
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			$(con).text('14');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('12');
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('17');
			$(strIntMod).text("Mod: +3");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('13');
			$(dexWisMod).text("Mod: +1");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Athletics: +5" + "</h5>");
			$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			$(hitpoints).text('12');
			$(armor).text('14');
			$(str).text('16');
			$(strMod).text("Mod: +3");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('12');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('12');
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			$(wis).text('13');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('16');
			$(strIntMod).text("Mod: +3");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Animal Handling: +3" + "</h5>");
			$("#skill-2").append("<h5>" + "Survival: +3" + "</h5>");
			$("#skill-3").append("<h5>" + "Perception: +3" + "</h5>");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			$(hitpoints).text('10');
			$(armor).text('10');
			$(str).text('10');
			$(strMod).text("Mod: +0");
			$(str).append(strMod);
			$(dex).text('10');
			$(dexMod).text("Mod: +0");
			$(dex).append(dexMod);
			$(con).text('13');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('17');
			$(intMod).text("Mod: +3");
			$(int).append(intMod);
			$(wis).text('14');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('12');
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$(strInt).text('17');
			$(strIntMod).text("Mod: +3");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('14');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Arcana: +5" + "</h5>");
			$("#skill-2").append("<h5>" + "Investigation: +5" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			$(hitpoints).text('15');
			$(armor).text('15');
			$(str).text('15');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('12');
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			$(con).text('14');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('12');
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			$(wis).text('15');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('12');
			$(strIntMod).text("Mod: +1");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Medicine: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Insight: +4" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			$(hitpoints).text('11');
			$(armor).text('13');
			$(str).text('15');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('10');
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('15');
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$(strInt).text('15');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}

		else if (classDisplay === 'Bard') {
			$(hitpoints).text('10');
			$(armor).text('13');
			$(str).text('11');
			$(strMod).text("Mod: +0");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('10');
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			$(int).text('11');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('16');
			$(chaMod).text("Mod: +3");
			$(cha).append(chaMod);
			$(strInt).text('11');
			$(strIntMod).text("Mod: +0");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('12');
			$(dexWisMod).text("Mod: +1");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}    
    } 
    
    // Elf If Statements
    else if (race === 'Elf') {
        
        if (classDisplay === 'Fighter') {
			$(hitpoints).text('15');
			$(armor).text('15');
			$(str).text('15');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('14');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('10');
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$(strInt).text('15');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Intimidation: +2" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			$(hitpoints).text('12');
			$(armor).text('16');
			$(str).text('14');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('17');
			$(dexMod).text("Mod: +3");
			$(dex).append(dexMod);
			$(con).text('12');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('13');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('10');
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$(strInt).text('14');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('17');
			$(dexWisMod).text("Mod: +3");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Animal Handling: +3" + "</h5>");
			$("#skill-2").append("<h5>" + "Survival: +3" + "</h5>");
			$("#skill-3").append("<h5>" + "Perception: +3" + "</h5>");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			$(hitpoints).text('10');
			$(armor).text('11');
			$(str).text('8');
			$(strMod).text("Mod: -1");
			$(str).append(strMod);
			$(dex).text('12');
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			$(con).text('13');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('15');
			$(intMod).text("Mod: +2");
			$(int).append(intMod);
			$(wis).text('14');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('14');
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$(strInt).text('15');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('14');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			$(hitpoints).text('15');
			$(armor).text('16');
			$(str).text('13');
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			$(dex).text('14');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('14');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('15');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('10');
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$(strInt).text('10');
			$(strIntMod).text("Mod: +0");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Medicine: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Insight: +4" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			$(hitpoints).text('11');
			$(armor).text('14');
			$(str).text('13');
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			$(dex).text('16');
			$(dexMod).text("Mod: +3");
			$(dex).append(dexMod);
			$(con).text('10');
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			$(int).text('8');
			$(intMod).text("Mod: -1");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('16');
			$(chaMod).text("Mod: +3");
			$(cha).append(chaMod);
			$(strInt).text('13');
			$(strIntMod).text("Mod: +1");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('16');
			$(dexWisMod).text("Mod: +3");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Stealth: +5" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +5" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +5" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +5" + "</h5>");
		}
		else if (classDisplay === 'Bard') {
			$(hitpoints).text('9');
			$(armor).text('13');
			$(str).text('11');
			$(strMod).text("Mod: +0");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('10');
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			$(int).text('12');
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			$(wis).text('12');
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			$(cha).text('17');
			$(chaMod).text("Mod: +3");
			$(cha).append(chaMod);
			$(strInt).text('12');
			$(strIntMod).text("Mod: +1");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('12');
			$(dexWisMod).text("Mod: +1");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}   
    } 
    
    //Dwarf If Statements
    else if (race === 'Dwarf') {
        
        if (classDisplay === 'Fighter') {
			$(hitpoints).text('20');
			$(armor).text('15');
			$(str).text('15');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('13');
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			$(con).text('16');
			$(conMod).text("Mod: +3");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('14');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('15');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('13');
			$(dexWisMod).text("Mod: +1");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			$(hitpoints).text('14');
			$(armor).text('14');
			$(str).text('14');
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('14');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('15');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('14');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Animal Handling: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Survival: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Perception: +4" + "</h5>");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			$(hitpoints).text('12');
			$(armor).text('10');
			$(str).text('8');
			$(strMod).text("Mod: -1");
			$(str).append(strMod);
			$(dex).text('10');
			$(dexMod).text("Mod: +0");
			$(dex).append(dexMod);
			$(con).text('15');
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			$(int).text('15');
			$(intMod).text("Mod: +2");
			$(int).append(intMod);
			$(wis).text('16');
			$(wisMod).text("Mod: +3");
			$(wis).append(wisMod);
			$(cha).text('12');
			$(chaMod).text("Mod: +1");
			$(cha).append(chaMod);
			$(strInt).text('15');
			$(strIntMod).text("Mod: +2");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('16');
			$(dexWisMod).text("Mod: +3");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			$(hitpoints).text('18');
			$(armor).text('15');
			$(str).text('13');
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			$(dex).text('12');
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			$(con).text('16');
			$(conMod).text("Mod: +3");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('17');
			$(wisMod).text("Mod: +3");
			$(wis).append(wisMod);
			$(cha).text('8');
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$(strInt).text('10');
			$(strIntMod).text("Mod: +0");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('17');
			$(dexWisMod).text("Mod: +3");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Medicine: +5" + "</h5>");
			$("#skill-2").append("<h5>" + "Insight: +5" + "</h5>");
			$("#skill-3").append(" ");
			$("#skill-4").append(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			$(hitpoints).text('13');
			$(armor).text('13');
			$(str).text('13');
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			$(dex).text('15');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('12');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('8');
			$(intMod).text("Mod: -1");
			$(int).append(intMod);
			$(wis).text('14');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('15');
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$(strInt).text('13');
			$(strIntMod).text("Mod: +1");
			$(strInt).append(strIntMod);
			$('#strInt').text("Strength");
			$(dexWis).text('15');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Dexterity");
			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}

		else if (classDisplay === 'Bard') {
			$(hitpoints).text('11');
			$(armor).text('13');
			$(str).text('11');
			$(strMod).text("Mod: +0");
			$(str).append(strMod);
			$(dex).text('14');
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			$(con).text('12');
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			$(int).text('10');
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			$(wis).text('14');
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			$(cha).text('15');
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$(strInt).text('10');
			$(strIntMod).text("Mod: +0");
			$(strInt).append(strIntMod);
			$('#strInt').text("Intelligence");
			$(dexWis).text('14');
			$(dexWisMod).text("Mod: +2");
			$(dexWis).append(dexWisMod);
			$('#dexWis').text("Wisdom");
			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}  
	}
	
else if (race === 'Tiefling') {
        
	if (classDisplay === 'Fighter') {
		$(hitpoints).text('15');
		$(armor).text('14');
		$(str).text('14');
		$(strMod).text("Mod: +2");
		$(str).append(strMod);
		$(dex).text('12');
		$(dexMod).text("Mod: +1");
		$(dex).append(dexMod);
		$(con).text('14');
		$(conMod).text("Mod: +2");
		$(con).append(conMod);
		$(int).text('11');
		$(intMod).text("Mod: +0");
		$(int).append(intMod);
		$(wis).text('14');
		$(wisMod).text("Mod: +2");
		$(wis).append(wisMod);
		$(cha).text('10');
		$(chaMod).text("Mod: +0");
		$(cha).append(chaMod);
		$(strInt).text('14');
		$(strIntMod).text("Mod: +2");
		$(strInt).append(strIntMod);
		$('#strInt').text("Strength");
		$(dexWis).text('12');
		$(dexWisMod).text("Mod: +1");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Dexterity");
		$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
		$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
		$("#skill-3").append(" ");
		$("#skill-4").append(" ");
	} 
	
	else if (classDisplay === 'Ranger') {
		$(hitpoints).text('14');
		$(armor).text('14');
		$(str).text('14');
		$(strMod).text("Mod: +2");
		$(str).append(strMod);
		$(dex).text('14');
		$(dexMod).text("Mod: +2");
		$(dex).append(dexMod);
		$(con).text('12');
		$(conMod).text("Mod: +1");
		$(con).append(conMod);
		$(int).text('11');
		$(intMod).text("Mod: +0");
		$(int).append(intMod);
		$(wis).text('17');
		$(wisMod).text("Mod: +2");
		$(wis).append(wisMod);
		$(cha).text('10');
		$(chaMod).text("Mod: +0");
		$(cha).append(chaMod);
		$(strInt).text('14');
		$(strIntMod).text("Mod: +2");
		$(strInt).append(strIntMod);
		$('#strInt').text("Strength");
		$(dexWis).text('14');
		$(dexWisMod).text("Mod: +2");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Dexterity");
		$("#skill-1").append("<h5>" + "Animal Handling: +4" + "</h5>");
		$("#skill-2").append("<h5>" + "Survival: +4" + "</h5>");
		$("#skill-3").append("<h5>" + "Perception: +4" + "</h5>");
		$("#skill-4").append(" ");
	} 
	
	else if (classDisplay === 'Wizard') {
		$(hitpoints).text('10');
		$(armor).text('10');
		$(str).text('8');
		$(strMod).text("Mod: -1");
		$(str).append(strMod);
		$(dex).text('10');
		$(dexMod).text("Mod: +0");
		$(dex).append(dexMod);
		$(con).text('13');
		$(conMod).text("Mod: +1");
		$(con).append(conMod);
		$(int).text('15');
		$(intMod).text("Mod: +2");
		$(int).append(intMod);
		$(wis).text('16');
		$(wisMod).text("Mod: +3");
		$(wis).append(wisMod);
		$(cha).text('14');
		$(chaMod).text("Mod: +2");
		$(cha).append(chaMod);
		$(strInt).text('15');
		$(strIntMod).text("Mod: +2");
		$(strInt).append(strIntMod);
		$('#strInt').text("Intelligence");
		$(dexWis).text('16');
		$(dexWisMod).text("Mod: +3");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Wisdom");
		$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
		$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
		$("#skill-3").append(" ");
		$("#skill-4").append(" ");
	} 
	
	else if (classDisplay === 'Cleric') {
		$(hitpoints).text('17');
		$(armor).text('15');
		$(str).text('13');
		$(strMod).text("Mod: +1");
		$(str).append(strMod);
		$(dex).text('12');
		$(dexMod).text("Mod: +1");
		$(dex).append(dexMod);
		$(con).text('15');
		$(conMod).text("Mod: +2");
		$(con).append(conMod);
		$(int).text('10');
		$(intMod).text("Mod: +0");
		$(int).append(intMod);
		$(wis).text('17');
		$(wisMod).text("Mod: +3");
		$(wis).append(wisMod);
		$(cha).text('10');
		$(chaMod).text("Mod: +0");
		$(cha).append(chaMod);
		$(strInt).text('10');
		$(strIntMod).text("Mod: +0");
		$(strInt).append(strIntMod);
		$('#strInt').text("Intelligence");
		$(dexWis).text('17');
		$(dexWisMod).text("Mod: +3");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Wisdom");
		$("#skill-1").append("<h5>" + "Medicine: +5" + "</h5>");
		$("#skill-2").append("<h5>" + "Insight: +5" + "</h5>");
		$("#skill-3").append(" ");
		$("#skill-4").append(" ");
	} 
	
	else if (classDisplay === 'Rogue') {
		$(hitpoints).text('11');
		$(armor).text('13');
		$(str).text('13');
		$(strMod).text("Mod: +1");
		$(str).append(strMod);
		$(dex).text('13');
		$(dexMod).text("Mod: +2");
		$(dex).append(dexMod);
		$(con).text('12');
		$(conMod).text("Mod: +1");
		$(con).append(conMod);
		$(int).text('8');
		$(intMod).text("Mod: -1");
		$(int).append(intMod);
		$(wis).text('16');
		$(wisMod).text("Mod: +3");
		$(wis).append(wisMod);
		$(cha).text('17');
		$(chaMod).text("Mod: +3");
		$(cha).append(chaMod);
		$(strInt).text('13');
		$(strIntMod).text("Mod: +1");
		$(strInt).append(strIntMod);
		$('#strInt').text("Strength");
		$(dexWis).text('13');
		$(dexWisMod).text("Mod: +2");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Dexterity");
		$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
		$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
		$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
		$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
	}

	else if (classDisplay === 'Bard') {
		$(hitpoints).text('10');
		$(armor).text('13');
		$(str).text('11');
		$(strMod).text("Mod: +0");
		$(str).append(strMod);
		$(dex).text('12');
		$(dexMod).text("Mod: +1");
		$(dex).append(dexMod);
		$(con).text('12');
		$(conMod).text("Mod: +1");
		$(con).append(conMod);
		$(int).text('10');
		$(intMod).text("Mod:0 +0");
		$(int).append(intMod);
		$(wis).text('16');
		$(wisMod).text("Mod: +3");
		$(wis).append(wisMod);
		$(cha).text('17');
		$(chaMod).text("Mod: +3");
		$(cha).append(chaMod);
		$(strInt).text('10');
		$(strIntMod).text("Mod: +0");
		$(strInt).append(strIntMod);
		$('#strInt').text("Intelligence");
		$(dexWis).text('16');
		$(dexWisMod).text("Mod: +3");
		$(dexWis).append(dexWisMod);
		$('#dexWis').text("Wisdom");
		$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
		$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
		$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
		$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
		}  
	}
}

//FUNCTION FOR MOBILE STATS AND SKILLS 
//MAKE SURE THIS FUNCTION GETS CALLED IN THE SAME PLACES THE stats() GETS CALLED 
// function mobileStats() {

// 	var strInt = document.getElementById('sideStatNumber7');
// 	var dexWis = document.getElementById('sideStatNumber8');
// 	var strIntMod = document.createElement("h5");
// 	var dexWisMod = document.createElement("h5");

// 	var race = localStorage.getItem('charRace');
// 	var classDisplay = localStorage.getItem('charClass');

// 	if (race === 'Human') {
// 		if (classDisplay === 'Fighter') {
// 			$(strInt).text('17');
// 			$(strIntMod).text("Mod: +3");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('13');
// 			$(dexWisMod).text("Mod: +1");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Athletics: +5" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Ranger') {
// 			$(strInt).text('16');
// 			$(strIntMod).text("Mod: +3");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Animal Handling: +3" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Survival: +3" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Perception: +3" + "</h5>");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Wizard') {
// 			$(strInt).text('17');
// 			$(strIntMod).text("Mod: +3");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('14');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Arcana: +5" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Investigation: +5" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Cleric') {
// 			$(strInt).text('12');
// 			$(strIntMod).text("Mod: +1");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Medicine: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Insight: +4" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Rogue') {
// 			$(strInt).text('15');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 		else if (classDisplay === 'Bard') {
// 			$(strInt).text('11');
// 			$(strIntMod).text("Mod: +0");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('12');
// 			$(dexWisMod).text("Mod: +1");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 	}
// 	else if (race === 'Elf') {
// 		if (classDisplay === 'Fighter') {
// 			$(strInt).text('15');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Intimidation: +2" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Ranger') {
// 			$(strInt).text('14');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('17');
// 			$(dexWisMod).text("Mod: +3");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Animal Handling: +3" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Survival: +3" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Perception: +3" + "</h5>");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Wizard') {
// 			$(strInt).text('15');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('14');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Cleric') {
// 			$(strInt).text('10');
// 			$(strIntMod).text("Mod: +0");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Medicine: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Insight: +4" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Rogue') {
// 			$(strInt).text('13');
// 			$(strIntMod).text("Mod: +1");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('16');
// 			$(dexWisMod).text("Mod: +3");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Stealth: +5" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +5" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +5" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +5" + "</h5>");
// 		}
// 		else if (classDisplay === 'Bard') {
// 			$(strInt).text('12');
// 			$(strIntMod).text("Mod: +1");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('12');
// 			$(dexWisMod).text("Mod: +1");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 	}
// 	else if (race === 'Dwarf') {
// 		if (classDisplay === 'Fighter') {
// 			$(strInt).text('15');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('13');
// 			$(dexWisMod).text("Mod: +1");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Ranger') {
// 			$(strInt).text('14');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Animal Handling: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Survival: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Perception: +4" + "</h5>");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Wizard') {
// 			$(strInt).text('15');
// 			$(strIntMod).text("Mod: +2");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('16');
// 			$(dexWisMod).text("Mod: +3");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Cleric') {
// 			$(strInt).text('10');
// 			$(strIntMod).text("Mod: +0");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('17');
// 			$(dexWisMod).text("Mod: +3");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Medicine: +5" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Insight: +5" + "</h5>");
// 			$("#skill-3").append(" ");
// 			$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Rogue') {
// 			$(strInt).text('13');
// 			$(strIntMod).text("Mod: +1");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Strength");
// 			$(dexWis).text('15');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Dexterity");
// 			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 		else if (classDisplay === 'Bard') {
// 			$(strInt).text('10');
// 			$(strIntMod).text("Mod: +0");
// 			$(strInt).append(strIntMod);
// 			$('#strInt').text("Intelligence");
// 			$(dexWis).text('14');
// 			$(dexWisMod).text("Mod: +2");
// 			$(dexWis).append(dexWisMod);
// 			$('#dexWis').text("Wisdom");
// 			$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 			$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 			$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 			$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 	}
// 	else if (race === 'Tiefling') {
// 		if (classDisplay === 'Fighter') {
// 		$(strInt).text('14');
// 		$(strIntMod).text("Mod: +2");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Strength");
// 		$(dexWis).text('12');
// 		$(dexWisMod).text("Mod: +1");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Dexterity");
// 		$("#skill-1").append("<h5>" + "Athletics: +4" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Intimidation: +1" + "</h5>");
// 		$("#skill-3").append(" ");
// 		$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Ranger') {
// 		$(strInt).text('14');
// 		$(strIntMod).text("Mod: +2");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Strength");
// 		$(dexWis).text('14');
// 		$(dexWisMod).text("Mod: +2");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Dexterity");
// 		$("#skill-1").append("<h5>" + "Animal Handling: +4" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Survival: +4" + "</h5>");
// 		$("#skill-3").append("<h5>" + "Perception: +4" + "</h5>");
// 		$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Wizard') {
// 		$(strInt).text('15');
// 		$(strIntMod).text("Mod: +2");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Intelligence");
// 		$(dexWis).text('16');
// 		$(dexWisMod).text("Mod: +3");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Wisdom");
// 		$("#skill-1").append("<h5>" + "Arcana: +4" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Investigation: +4" + "</h5>");
// 		$("#skill-3").append(" ");
// 		$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Cleric') {
// 		$(strInt).text('10');
// 		$(strIntMod).text("Mod: +0");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Intelligence");
// 		$(dexWis).text('17');
// 		$(dexWisMod).text("Mod: +3");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Wisdom");
// 		$("#skill-1").append("<h5>" + "Medicine: +5" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Insight: +5" + "</h5>");
// 		$("#skill-3").append(" ");
// 		$("#skill-4").append(" ");
// 		}
// 		else if (classDisplay === 'Rogue') {
// 		$(strInt).text('13');
// 		$(strIntMod).text("Mod: +1");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Strength");
// 		$(dexWis).text('13');
// 		$(dexWisMod).text("Mod: +2");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Dexterity");
// 		$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 		$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 		$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 		else if (classDisplay === 'Bard') {
// 		$(strInt).text('10');
// 		$(strIntMod).text("Mod: +0");
// 		$(strInt).append(strIntMod);
// 		$('#strInt').text("Intelligence");
// 		$(dexWis).text('16');
// 		$(dexWisMod).text("Mod: +3");
// 		$(dexWis).append(dexWisMod);
// 		$('#dexWis').text("Wisdom");
// 		$("#skill-1").append("<h5>" + "Stealth: +4" + "</h5>");
// 		$("#skill-2").append("<h5>" + "Acrobatics: +4" + "</h5>");
// 		$("#skill-3").append("<h5>" + "Sleight of Hand: +4" + "</h5>");
// 		$("#skill-4").append("<h5>" + "Persuasion: +4" + "</h5>");
// 		}
// 	}
// }