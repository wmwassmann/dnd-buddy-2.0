'use strict';

module.exports = function (sequelize, DataTypes) {
	const player_race = sequelize.define(
		'Races',
		{
			race: DataTypes.STRING,
			as_str: DataTypes.INTEGER,
			as_dex: DataTypes.INTEGER,
			as_con: DataTypes.INTEGER,
			as_int: DataTypes.INTEGER,
			as_wis: DataTypes.INTEGER,
			as_cha: DataTypes.INTEGER,
			language: DataTypes.STRING,
			language2: DataTypes.STRING,
		},
		{
			freezeTableName: true,
			paranoid: true,
		}
	);

	player_race.associate = function (models) {
		// We're saying that a racesModel should belong to an Author
		// A racesModel can't be created without an Author due to the foreign key constraint
		player_race.belongsTo(models.mainDatabase, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return player_race;
};
