"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customer", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        references: {
          model: "person",
          key: "id",
        },
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customer");
  },
};
