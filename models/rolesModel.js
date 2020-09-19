'use strict';

module.exports = function (sequelize, DataTypes) {
    const player_race = sequelize.define('Race', {
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
    });
      return player_race;

};
