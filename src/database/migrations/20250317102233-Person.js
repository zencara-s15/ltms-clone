'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('person', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			khmerFristName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			khmerLastName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			englishFristName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			englishLastName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			hashedPassword: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('person')
	},
}
