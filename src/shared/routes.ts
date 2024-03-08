import { Router } from "express";

const routes = Router();

routes.get("/healthChecker", (_, response) => {
  response.json({
    status: "success",
    message: "Welcome!",
  });
});

export { routes }