'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  Board.associate = function(models) {
    Board.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    Board.hasMany(models.List, {
      foreignKey: 'boardId'
    });
  };

  return Board;
};
