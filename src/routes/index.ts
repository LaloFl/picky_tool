import { Router } from "express";
import placesRouter from "./api/placesRoutes";

const router: Router = Router();

// Main route
router.get("/", (req, res) => {
  res.send("Express main route");
});

// Places route
router.use("/places", placesRouter);

// 404 routes
router.get("*", (req, res) => {
  res.status(404).send("Not found");
});

export default router;
