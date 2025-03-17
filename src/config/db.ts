import config from "./index"
import { Sequelize } from 'sequelize-typescript'
import logger from './helpers/logger'

const { dbName, dbHost, dbPassword, dbUser, dbPort } = config.env

const sequelize = new Sequelize({
  database: dbName,
  dialect: "postgres",
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: Number(dbPort),
  logging: false,
  timezone: "UTC"
})

export async function dbConnection(
  retries = 5,
  delay = 3000
): Promise<Sequelize> {
  while (retries > 0) {
    try {
      await sequelize.authenticate()
      logger.info("Database connection established")

      return sequelize
    } catch (error) {
      logger.error(error)
      retries--
      logger.warn(`Retrying in ${delay / 1000} seconds...`)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
  throw new Error("Failed to connect to database!")
}

export default sequelize
