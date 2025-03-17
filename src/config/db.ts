import { Sequelize } from "sequelize";
import config from ".";

const { dbName, dbHost, dbPassword, dbUser, dbPort } = config.env;

const sequelize = new Sequelize({
  database: dbName,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  dialect: "postgres",
  port: Number(dbPort),
});

export async function dbConnection(
  retries = 5,
  delay = 3000
): Promise<Sequelize> {
  while (retries > 0) {
    try {
      await sequelize.authenticate();
      console.log("Database connection established");

      if (
        config.env.nodeEnv === "development" ||
        config.env.nodeEnv === "test"
      ) {
        await sequelize.sync({ force: true });
        console.log("Database synced");
      }
      return sequelize;
    } catch (error) {
      console.log(error);
      retries--;
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error("Failed to connect to database!");
}

export default sequelize;
