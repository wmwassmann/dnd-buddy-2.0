'use strict';
const date = new Date();

const inputData = [
	['Hobert', 'M', '11', '10', '11', '10', '12', '8', '15', '18', '15', '2'],
	['Tom', '$2y$10$INe1vl9eyXC3Hm3gCw954eH.3m2JeOAoxOjd7mVAXwQ3yWAfHUNsK'],
];

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const inputarray = [];
		for (let i = 0; i < inputData.length; i++) {
			inputarray.push({
				name: inputData[i][0],
				gender: inputData[i][1],
				level: inputData[i][2],
				stat_str: inputData[i][2],
				stat_dex: inputData[i][2],
				stat_con: inputData[i][2],
				stat_int: inputData[i][2],
				stat_wis: inputData[i][2],
				stat_cha: inputData[i][2],
				stat_hp: inputData[i][2],
				stat_ac: inputData[i][2],
				char_class_id: inputData[i][2],
				user_id: inputData[i][2],
				race_id: inputData[i][2],
				created_at: date,
				updated_at: date,
			});
		}
		await queryInterface.bulkInsert('user', inputarray, {
			validate: true,
			ignoreDuplicates: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user', null, {});
	},
};
