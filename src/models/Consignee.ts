import { Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'

@Table({
  modelName: "Consignee",
  tableName: 'consignee',
  timestamps: false
})
export default class Consignee extends Model {
  @PrimaryKey
  @Unique
  @Column(DataType.INTEGER)
  id!: number

}