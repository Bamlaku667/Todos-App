import mongoose from "mongoose";

const Todo = mongoose.model("Todo", new mongoose.Schema({
  todo: String,
  status: Boolean,
}));


export default Todo;    