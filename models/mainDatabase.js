'use strict';

module.exports = function (sequelize, DataTypes) {
	const mainDatabase = sequelize.define(
		'mainDatabase',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
				unique: true,
				validate: {
					len: [1, 50],
				},
			},
			gender: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				len: [1],
			},
			// race: {
			//     // Foreign Key
			//     type: DataTypes.STRING,
			//     allowNull: false,
			//  	len: [10],
			// },
			// class: {
			//     // Foreign Key
			//     type: DataTypes.STRING,
			// },
			// weaponsSpells: {
			//     // Foreign Key
			//     type: DataTypes.STRING,
			// },
			level: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_str: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_dex: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_con: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_int: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_wis: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_cha: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_hp: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},
			stat_ac: {
				type: DataTypes.INTEGER,
				allowNull: false,
				len: [2],
			},

			deleted_at: { type: DataTypes.DATE },
		},
		{
			freezeTableName: true,
			// underscored: true,
			paranoid: true,
		}
	);

	mainDatabase.associate = function (models) {
		// Associating mainDatabase with Posts
		// When an mainDatabase is deleted, also delete any associated Posts
		// mainDatabase.hasMany(models.racesModel, {
		// 	onDelete: 'cascade',
		// });
		mainDatabase.belongsTo(models.racesModel, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	mainDatabase.associate = function (models) {
		// Associating mainDatabase with Posts
		// When an mainDatabase is deleted, also delete any associated Posts
		// mainDatabase.hasMany(models.charClass, {
		// 	onDelete: 'cascade',
		// });
		mainDatabase.belongsTo(models.charClass, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	mainDatabase.associate = function (models) {
		// Associating mainDatabase with Posts
		// When an mainDatabase is deleted, also delete any associated Posts
		// mainDatabase.hasMany(models.charSpell, {
		// 	onDelete: 'cascade',
		// });
		mainDatabase.belongsTo(models.charSpell, {
			foreignKey: {
				allowNull: true,
			},
		});
	};

	mainDatabase.associate = function (models) {
		// Associating mainDatabase with Posts
		// When an mainDatabase is deleted, also delete any associated Posts
		// mainDatabase.hasMany(models.charWeapon, {
		// 	onDelete: 'cascade',
		// });
		mainDatabase.belongsTo(models.charWeapon, {
			foreignKey: {
				allowNull: true,
			},
		});
	};

	return mainDatabase;
};
