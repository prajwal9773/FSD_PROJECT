import mongoose from "mongoose";

// Define schema
const boardSchema = new mongoose.Schema({
  name: String,
  description: String,
  template: String,
});

// Export the model
const Board = mongoose.model("Board", boardSchema);
export default Board;
