'use strict';
const { Board } = require('../models');

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
    const boards = [{
      id: 1,
      name: "Foo",
      userId: 1
    }, {
      id: 2,
      name: "Bar",
      userId: 1
    }];
    return queryInterface.bulkInsert('Boards', boards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Boards', null, {}, Board);
  }
};
