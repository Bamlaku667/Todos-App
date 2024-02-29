
// todos.js
import express from "express";
import { getAllTodos, createTodo, deleteTodo, updateTodo } from "../controllers/todosController.js";
const router = express.Router();

// GET /todos
router.route("/").get(getAllTodos);

// POST /todos
router.route("/").post(createTodo);

// DELETE /todos/:id
router.route("/:id").delete(deleteTodo);

// PUT /todos/:id
router.route("/:id").put(updateTodo);

export {router as todosRouter}  