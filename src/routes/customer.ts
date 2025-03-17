import type { Router } from "express";
import { Customer } from "../models";

export default function customerRoute(router: Router) {
  router.get("/customer", async (req, res, next) => {
    try {
      const customers = await Customer.findAll({});
      res.status(201).send({ message: "List of customers", data: customers });
    } catch (error) {
      console.error("Error fetching customers:", error);
      next(error);
    }
  });

  return router;
}
