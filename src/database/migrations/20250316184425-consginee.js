"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consginee", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        references: {
          model: "person",
          key: "id",
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("consginee");
  },
};
