'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Board, {
      foreignKey: 'userId'
    });
  };

  return User;
};
