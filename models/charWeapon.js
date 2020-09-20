'use strict';

module.exports = function (sequelize, DataTypes) {
	const charWeapon = sequelize.define(
		'charWeapon',
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
			// deleted_at: { type: DataTypes.DATE },
		},
		{
			freezeTableName: true,
			// underscored: true,
			paranoid: true,
		}
	);

	charWeapon.associate = function (models) {
		// We're saying that a charWeapon should belong to an Author
		// A charWeapon can't be created without an Author due to the foreign key constraint
		// charWeapon.belongsTo(models.mainDatabase, {
		// 	foreignKey: {
		// 		allowNull: true,
		// 	},
		// });
		charWeapon.hasMany(models.mainDatabase, {
			onDelete: 'cascade',
		});
	};

	return charWeapon;
};
