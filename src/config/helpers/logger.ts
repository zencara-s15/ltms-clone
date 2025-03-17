import chalk from "chalk"
import { format, createLogger, transports } from "winston"
import { resolve as resolvePath } from "node:path"
import { loadJSON } from "./json"

type Level = "info" | "warn" | "error"

const pkg = loadJSON(resolvePath("package.json"))

const { timestamp, combine, label, printf, errors } = format

const levels = {
  info: { color: chalk.gray, icon: "✅" },
  warn: { color: chalk.yellow, icon: "☢️ " },
  error: { color: chalk.red, icon: "⛔ " },
}

const logFormat = printf(
  ({ level, message, label, timestamp }) =>
    `${timestamp} [${label}][${level}] ${message}`
)

const consoleFormat = printf(({ level, message, label, timestamp }) =>
  levels[level as Level].color(
    `${timestamp} [${label}][${level}]${levels[level as Level].icon} ${message}`
  )
)

const { name: appName } = pkg

const logger = createLogger({
  format: combine(
    label({ label: appName }),
    errors({ stack: true }),
    timestamp(),
    logFormat
  ),
})

const environment = process.env.NODE_ENV
if (!environment || environment === "production") {
  logger.add(
    new transports.Console({
      format: combine(
        label({ label: appName }),
        errors({ stack: true }),
        timestamp(),
        consoleFormat
      ),
    })
  )
} else {
  logger.add(
    new transports.File({ filename: "logs/errors.log", level: "error" })
  )
  logger.add(new transports.File({ filename: "logs/combined.log" }))
}
logger.info(`Starting '${appName}' application.`)

const originalError = logger.error
logger.error = (error: any): any => {
  if (error instanceof Error) {
    return originalError(error.stack)
  } else {
    try {
      return originalError(JSON.stringify(error))
    } catch (error) {
      return originalError(error)
    }
  }
}

export default logger
