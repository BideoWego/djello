'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name: DataTypes.STRING,
    boardId: DataTypes.INTEGER
  });

  List.associate = function(models) {
    List.belongsTo(models.Board, {
      foreignKey: 'boardId'
    });
  };

  return List;
};
