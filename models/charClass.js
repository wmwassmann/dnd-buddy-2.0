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
		// We're saying that a charClass should belong to an Author
		// A charClass can't be created without an Author due to the foreign key constraint
		charClass.belongsTo(models.mainDatabase, {
		  foreignKey: {
			allowNull: false
		  }
		});
	  };
    
   
	return charClass;
};