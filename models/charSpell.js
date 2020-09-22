'use strict';
// This charSpell.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under charSpell
//  3. define the forgine key relationship (if any)
//  4. export the charSpell table to the database

module.exports = function (sequelize, DataTypes) {
	const charSpell = sequelize.define(
		// the following 'charSpell' define the table name
		'charSpell',
		// the following object define the element inside this table
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
				unique: true,
				validate: {
					len: [1, 80],
				},
			},
			casting_class: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
			},
			casting_level: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isAlphanumeric: true,
			},
			casting_time: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			damage_dice: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			// properties: {
			//     type: DataTypes.STRING,
			//     allowNull: false
			// },
			// deleted_at: { type: DataTypes.DATE },
		},
		{
			// this is the option for the table setup
			// 1. freeze the table name (will not go to plurual)
			freezeTableName: true,
			// 2. underscore between two words for the column (i.e. updateAt will change to update_at)
			underscored: true,
			// 3. the data will not remove from the database (need to define what should be deleted)
			paranoid: true,
		}
	);

	// foreign key setup
	charSpell.associate = function (models) {
		charSpell.hasMany(models.mainDatabase, {
			onDelete: 'cascade',
		});
	};

	return charSpell;
};
