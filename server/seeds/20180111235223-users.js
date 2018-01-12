'use strict';
const { User } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const users = [{
      id: 1,
      fname: 'George',
      lname: 'Costanza',
      email: 'george_costanza@gmail.com',
      passwordHash: 'password'
    }];
    return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {}, User);
  }
};
