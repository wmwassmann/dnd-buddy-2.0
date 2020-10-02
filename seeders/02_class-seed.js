module.exports = {

	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Class', [
			{
				class: 'Bararian',
				str: 15,
				dex: 13,
				con: 14,
				int: 8,
				wis: 12,
				cha: 10,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Bard',
				str: 10,
				dex: 14,
				con: 13,
				int: 8,
				wis: 12,
				cha: 15,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Cleric',
				str: 12,
				dex: 10,
				con: 14,
				int: 8,
				wis: 15,
				cha: 13,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Druid',
				str: 10,
				dex: 12,
				con: 14,
				int: 13,
				wis: 15,
				cha: 8,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Fighter',
				str: 15,
				dex: 13,
				con: 14,
				int: 8,
				wis: 12,
				cha: 10,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Monk',
				str: 12,
				dex: 15,
				con: 13,
				int: 10,
				wis: 14,
				cha: 8,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Paladin',
				str: 15,
				dex: 10,
				con: 13,
				int: 8,
				wis: 12,
				cha: 14,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Ranger',
				str: 12,
				dex: 15,
				con: 13,
				int: 10,
				wis: 14,
				cha: 8,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Rogue',
				str: 10,
				dex: 15,
				con: 14,
				int: 12,
				wis: 8,
				cha: 13,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Sorcerer',
				str: 8,
				dex: 10,
				con: 14,
				int: 12,
				wis: 13,
				cha: 15,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Warlock',
				str: 8,
				dex: 10,
				con: 13,
				int: 12,
				wis: 14,
				cha: 15,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				class: 'Wizard',
				str: 8,
				dex: 10,
				con: 13,
				int: 15,
				wis: 14,
				cha: 12,
				created_at: new Date(),
				updated_at: new Date(),
			}
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Class', null, {});

	},
};
