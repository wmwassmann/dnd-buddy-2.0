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
                isAlphanumeric: true
            },
            damage_dice: {
                type: DataTypes.STRING,
                allowNull: false
            },
            damage_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            properties: {
                type: DataTypes.STRING,
                allowNull: false
            },
			// gender: {
			// 	type: DataTypes.STRING.BINARY,
			// 	allowNull: false,
			// 	len: [1],
			// },
			deleted_at: { type: DataTypes.DATE },
		},
		{
			freezeTableName: true,
			// underscored: true,
			paranoid: true,
		}
	);

	return charWeapon;
};
