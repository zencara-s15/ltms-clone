import { type Express } from "express";
import config from "..";
import { dbConnection } from "../db";

/**
 * Boot the app
 * @param app Express app
 * @param stopAfterSync Stop after syncing the database
 */
export default async function bootApp(app: Express, stopAfterSync = false) {
  const start = Date.now();

  try {
    // stop early if needed
    if (stopAfterSync) {
      process.exit();
    }
    const { host, port } = config.env;

    // Connect to database
    console.info("[boot] Connecting to database...");
    await dbConnection();

    app.listen(port, () => {
      console.info(`[boot] App listening on http://${host}:${port} 🚀`);
      console.info(`[boot] App booted in ${Date.now() - start}ms ⏱`);
    });
  } catch (error) {
    console.error("[boot] Unable to boot:", error);

    process.exit(70);
  }
}
