import { config } from "dotenv"

config()

export default {
  env: {
    nodeEnv: process.env.NODE_ENV!,
    host: process.env.HOST!,
    port: process.env.PORT!,

    dbHost: process.env.DB_HOST!,
    dbPort: process.env.DB_PORT!,
    dbUser: process.env.DB_USER!,
    dbPassword: process.env.DB_PASSWORD!,
    dbName: process.env.DB_NAME!,
  },
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(","), // Allow multiple origins
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  },
}
