import { Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'

@Table({
  modelName: "Customer",
  tableName: 'customer',
  timestamps: false
})
export default class Customer extends Model {
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id!: number

  @Column(DataType.STRING)
  address: string | null = null

}