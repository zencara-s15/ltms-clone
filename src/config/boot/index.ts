import { type Express } from "express"
import config from "../index"
import { dbConnection } from "../db"
import logger from '../helpers/logger'

/**
 * Boot the app
 * @param app Express app
 * @param stopAfterSync Stop after syncing the database
 */
export default async function bootApp(app: Express, stopAfterSync = false) {
  const start = Date.now()

  try {
    // stop early if needed
    if (stopAfterSync) {
      process.exit()
    }
    const { host, port, nodeEnv } = config.env

    // Connect to database
    logger.info("[boot] Connecting to database...")
    const sequelize = await dbConnection()

    // Sync only in development or testing environment.
    if (nodeEnv !== 'production') {
      await sequelize.sync({ force: true })
      logger.warn(`Database synced (Using '${nodeEnv}' environment!)`)
    }

    app.listen(port, () => {
      logger.info(`[boot] App listening on http://${host}:${port} 🚀`)
      logger.info(`[boot] App booted in ${Date.now() - start}ms ⌚`)
    })
  } catch (error) {
    logger.error("[boot] Unable to boot:", error)

    process.exit(70)
  }
}
