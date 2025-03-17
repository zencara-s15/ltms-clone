import type { Router } from "express";

export default function authRoute(router: Router) {
  router.get("/auth", async (req, res, next) => {
    res.send({ message: "hello world!" });
  });

  return router;
}
