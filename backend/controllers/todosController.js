// todosController.js
import Todo from "../models/todo.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;

    if (!todo) {
      return res.status(400).json({ mssg: "Error: no todo found" });
    }

    const newTodo = await Todo.create({ todo, status: false });

    res.status(201).json({ todo, status: false, _id: newTodo._id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const _id = req.params.id;

    const deletedTodo = await Todo.deleteOne({ _id });

    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const _id = req.params.id;
    const { status } = req.body;

    if (typeof status !== "boolean") {
      return res.status(400).json({ mssg: "Invalid status" });
    }

    const updatedTodo = await Todo.updateOne(
      { _id },
      { $set: { status: !status } }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
