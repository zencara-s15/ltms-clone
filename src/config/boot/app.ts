import express, { type Express } from "express"
import logger from '../helpers/logger'
import { Sequelize } from 'sequelize-typescript'
import sequelize from '../db'

type CreateAppProps = {
  initModels(sequelize: Sequelize): void
  initAssociations(): void
  initMiddleware: (app: Express) => void
  initRoutes: (app: Express) => void
}

/**
 * Create an express app
 * @param initModels Initialize models
 * @param initAssociations Initialize associations
 * @param initMiddleware Initialize middleware
 * @param initRoutes Initialize routes
 */
export default function createApp({
  initModels,
  initAssociations,
  initMiddleware,
  initRoutes,
}: CreateAppProps) {
  const app = express()

  logger.info('[App] Setting up models and associations...')
  initModels(sequelize)
  initAssociations()

  logger.info("[App] Setting up middleware...")
  initMiddleware(app)

  logger.info("[App] Setting up routes...")
  initRoutes(app)

  return app
}
