'use strict';
const data = require('./books.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
      data.forEach(el => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
      })
      return queryInterface.bulkInsert('Books', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
