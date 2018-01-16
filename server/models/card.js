'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    completedAt: DataTypes.DATE,
    listId: DataTypes.INTEGER
  });

  Card.associate = function(models) {
    Card.belongsTo(models.List, {
      foreignKey: 'listId'
    });
  };

  return Card;
};