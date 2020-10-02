module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Race', [
			{
				race: 'Human',
				as_str: 1,
				as_dex: 1,
				as_con: 1,
				as_int: 1,
				as_wis: 1,
				as_cha: 1,
				language: 'Common',
				language2: "Player's choice",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Dragonborn',
				as_str: 2,
				as_dex: 0,
				as_con: 0,
				as_int: 0,
				as_wis: 0,
				as_cha: 1,
				language: 'Common',
				language2: 'Draconic',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Dwarf',
				as_str: 0,
				as_dex: 0,
				as_con: 2,
				as_int: 0,
				as_wis: 0,
				as_cha: 0,
				language: 'Common',
				language2: 'Dwarvish',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Elf',
				as_str: 0,
				as_dex: 2,
				as_con: 0,
				as_int: 0,
				as_wis: 0,
				as_cha: 0,
				language: 'Common',
				language2: 'Elvish',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Tiefling',
				as_str: 0,
				as_dex: 0,
				as_con: 0,
				as_int: 1,
				as_wis: 0,
				as_cha: 2,
				language: 'Common',
				language2: 'Infernal',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Gnome',
				as_str: 0,
				as_dex: 0,
				as_con: 0,
				as_int: 2,
				as_wis: 0,
				as_cha: 0,
				language: 'Common',
				language2: 'Gnomish',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Halfling',
				as_str: 0,
				as_dex: 2,
				as_con: 0,
				as_int: 0,
				as_wis: 0,
				as_cha: 0,
				language: 'Common',
				language2: 'Halfling',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Half-Elf',
				as_str: 0,
				as_dex: 1,
				as_con: 1,
				as_int: 0,
				as_wis: 0,
				as_cha: 2,
				language: 'Common',
				language2: 'Elvish',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				race: 'Half-Orc',
				as_str: 2,
				as_dex: 0,
				as_con: 1,
				as_int: 0,
				as_wis: 0,
				as_cha: 0,
				language: 'Common',
				language2: 'Orc',
				created_at: new Date(),
				updated_at: new Date(),
			}
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Race', null, {});
	},
};
