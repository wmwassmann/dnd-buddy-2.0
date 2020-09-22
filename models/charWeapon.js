'use strict';
// This charWeapon.js server for:
//  1. define the setup of the table in the database
//  2. define the type and set the restriction for all the variable under charWeapon
//  3. define the forgine key relationship (if any)
//  4. export the charWeapon table to the database

module.exports = function (sequelize, DataTypes) {
	const CharWeapon = sequelize.define(
		// the following 'charWeapon' define the table name
		'CharWeapon',
		// the following object define each element inside this table
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
			proficiency: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
			},
			damage_dice: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			damage_type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			properties: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			deleted_at: { type: DataTypes.DATE },
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
	CharWeapon.associate = function (models) {
		CharWeapon.hasMany(models.MainDatabase, {
			onDelete: 'cascade',
		});
	};

	return CharWeapon;
};
