import createApp from "./config/boot/app"
import initRoutes from "./routes"
import initMiddleware from "./config/middleware"
import { initAssociations, initModels } from './models'


const app = createApp({
  initModels,
  initAssociations,
  initMiddleware,
  initRoutes,
})

export default app
