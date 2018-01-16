'use strict';
const { List } = require('../models');

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
    const lists = [{
      id: 1,
      name: 'Fiz',
      boardId: 1
    }, {
      id: 2,
      name: 'Baz',
      boardId: 2
    }];
    return queryInterface.bulkInsert('Lists', lists);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Lists', null, {}, List);
  }
};
