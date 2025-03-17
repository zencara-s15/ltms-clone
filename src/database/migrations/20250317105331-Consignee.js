'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('consignee', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: 'person',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('consignee')
	},
}
