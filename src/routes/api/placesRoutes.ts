import { Router } from "express";

const placesRouter: Router = Router();

placesRouter.get("/", (req, res) => {
  res.send("w");
});

export default placesRouter;
