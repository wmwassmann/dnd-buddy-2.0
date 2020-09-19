'use strict';

module.exports = function (sequelize, DataTypes) {
	const charName = sequelize.define(
		'charName',
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

	return charName;
};
