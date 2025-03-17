import type { Router } from "express"

export default function customerRoute(router: Router) {
  router.get("/customer", async (req, res, next) => {
    try {
      res.status(201).send({ message: "List of customers", data: [] })
    } catch (error) {
      console.error("Error fetching customers:", error)
      next(error)
    }
  })

  return router
}
