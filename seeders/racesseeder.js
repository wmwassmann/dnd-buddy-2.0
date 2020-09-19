'use strict';
const date = new Date();

const inputData = [
	['Human', 1, 1, 1, 1, 1, 1, 'Common', 'Player chosen'],
	['Dwarf', 0, 0, 2, 0, 0, 0, 'Common', 'Dwarvish'],
	['Elf', 0, 2, 0, 0, 0, 0, 'Common', 'Elvish'],
	['Gnome', 0, 0, 0, 2, 0, 0, 'Common', 'Gnomish'],
	['Half-Orc', 0, 0, 0, 0, 0, 0, 'Common', 'Orc'],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				name: inputData[i],
				createdAt: date,
				updatedAt: date,
			});
		}

		await queryInterface.bulkInsert('charname', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('charName', null, {});
	},
};
