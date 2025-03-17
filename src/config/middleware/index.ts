import { type Express, json } from "express";
import cors from "cors";
import config from "..";

export default function initMiddleware(app: Express) {
  app
    .use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://example.com"); // Replace with your frontend domain
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      next();
    })
    .use(cors(config.cors))
    .use(json());
}
