import {
  Association,
  Sequelize,
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'

@Table({
  modelName: "Person",
  tableName: 'person',
  timestamps: true,
})

export default class Person extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number

  @Column(DataType.STRING)
  khmerFirstName!: string

  @Column(DataType.STRING)
  khmerLastName!: string

  @Column(DataType.STRING)
  englishFirstName!: string

  @Column(DataType.STRING)
  englishLastName!: string

  @Unique
  @Column(DataType.STRING)
  email!: string

  @Column({
    type: DataType.STRING(64),
    validate: {
      is: /^[0-9a-f]{64}$/i,
    }
  })
  hashedPassword!: string

  @Default(null)
  @Column({
    type: DataType.STRING,
    validate: {
      is: /\d{3}-\d{3}-\d{4}/
    }
  })
  phone!: string

}