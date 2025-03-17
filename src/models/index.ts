import { Sequelize } from 'sequelize-typescript'
import Person from './Person'
import Customer from './Customer'
import Consignee from './Consignee'

export function initModels(sequelize: Sequelize) {
  sequelize.addModels([Person, Customer, Consignee])
}

export function initAssociations() {
  Customer.belongsTo(Person, {
    foreignKey: 'id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Consignee.belongsTo(Person, {
    foreignKey: 'id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Person.hasMany(Customer, {
    foreignKey: 'id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
}

export { Person, Customer }