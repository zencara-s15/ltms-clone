import express, { type Express } from "express";

type CreateAppProps = {
  initMiddleware: (app: Express) => void;
  initRoutes: (app: Express) => void;
};

/**
 * Create an express app
 * @param initMiddleware Initialize middleware
 * @param initRoutes Initialize routes
 */
export default function createApp({
  initMiddleware,
  initRoutes,
}: CreateAppProps) {
  const app = express();

  console.log("Setting up middleware...");
  initMiddleware(app);

  console.log("Setting up routes...");
  initRoutes(app);

  return app;
}
