import "express-async-errors";
import express from "express";
import morgan from "morgan";
import { errorHandler, notFound } from "../middlewares/index.js";
import { todosRouter } from "../routes/todosRoute.js";

const App = async (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.use('/api/todos', todosRouter)
  app.use(notFound);
  app.use(errorHandler);

  return app;
};

export default App;
