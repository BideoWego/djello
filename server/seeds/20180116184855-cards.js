'use strict';
const { Card } = require('../models');

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
    const cards = [{
      id: 1,
      name: 'Barfoo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae amet deserunt nobis ut fugit numquam maxime ducimus blanditiis quis earum nisi aliquid error, praesentium quas consequatur dicta distinctio eum suscipit.',
      priority: 1,
      listId: 1
    }, {
      id: 2,
      name: 'Bazfiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae amet deserunt nobis ut fugit numquam maxime ducimus blanditiis quis earum nisi aliquid error, praesentium quas consequatur dicta distinctio eum suscipit.',
      priority: 2,
      listId: 1
    }, {
      id: 3,
      name: 'Farboo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae amet deserunt nobis ut fugit numquam maxime ducimus blanditiis quis earum nisi aliquid error, praesentium quas consequatur dicta distinctio eum suscipit.',
      priority: 1,
      listId: 2
    }, {
      id: 4,
      name: 'Bizfaz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae amet deserunt nobis ut fugit numquam maxime ducimus blanditiis quis earum nisi aliquid error, praesentium quas consequatur dicta distinctio eum suscipit.',
      priority: 2,
      listId: 2
    }];
    return queryInterface.bulkInsert('Cards', cards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Cards', null, {}, Card);
  }
};
