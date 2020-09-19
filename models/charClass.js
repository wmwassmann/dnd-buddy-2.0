'use strict';

module.exports = function (sequelize, DataTypes) {
	const charClass = sequelize.define(
		'charClass',
		{
			name: {
				type: DataTypes.STRING,

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
    
    charClass.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        charClass.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };

	return charClass;
};