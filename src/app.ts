import createApp from "./config/boot/app";
import initRoutes from "./routes";
import initMiddleware from "./config/middleware";

const app = createApp({
  initMiddleware,
  initRoutes,
});

export default app;
