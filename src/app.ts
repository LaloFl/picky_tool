import express, { Application } from "express";
import path from "path";
import indexRouter from "./routes/index";
import env from "./config/env";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(env.STATIC_PATH));

app.use("/", indexRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found") as any;
  err.status = 404;
  next(err);
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: req.app.get("env") === "development" ? err : {},
    });
  }
);

export default app;
