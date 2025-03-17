import { Router, type Express } from "express";
import authRoute from "./auth";
import customerRoute from "./customer";

const router = Router();

export default function initRoutes(app: Express) {
  app.use("/api", customerRoute(router));
  app.use("/api", authRoute(router));
}
