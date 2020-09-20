'use strict';

module.exports = function (sequelize, DataTypes) {
	const charSpell = sequelize.define(
		'charSpell',
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
                isAlphanumeric: true
            },
            casting_level: {
                type: DataTypes.INTEGER,
                allowNull: false,
                isAlphanumeric: true
            },
            casting_time: {
                type: DataTypes.STRING,
                allowNull: false
            },
            damage_dice: {
                type: DataTypes.STRING,
                allowNull: true
            },
            // properties: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
			// deleted_at: { type: DataTypes.DATE },
		},
		{
			freezeTableName: true,
			// underscored: true,
			paranoid: true,
		}
	);

	return charSpell;
};