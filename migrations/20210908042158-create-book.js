'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      country:{
        type : Sequelize.STRING
      },
      imageLink : {
        type : Sequelize.STRING
      },
      language : {
        type : Sequelize.STRING
      },
      link : {
        type : Sequelize.STRING
      },
      pages: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      released_year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};