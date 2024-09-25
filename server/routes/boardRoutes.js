const express = require("express");
const router = express.Router();
const Board = require("../models/Board"); // Ensure this path is correct

// POST route for creating a new board
router.post("/", async (req, res) => {
  try {
    const newBoard = new Board(req.body);
    await newBoard.save();
    res.status(201).send("Board created");
  } catch (error) {
    console.error("Error creating board:", error);
    res.status(500).send("Error creating board");
  }
});

// GET route for fetching board names
router.get("/", async (req, res) => {
  try {
    const boards = await Board.find({}, 'name'); // Fetch only the 'name' field
    res.json(boards); // Send the names as JSON
  } catch (error) {
    console.error("Error fetching boards:", error);
    res.status(500).send("Error fetching boards");
  }
});

// DELETE route for deleting a board by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find the board by ID and delete it
    const deletedBoard = await Board.findByIdAndDelete(id);
    
    if (!deletedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }
    
    res.status(200).json({ message: 'Board deleted successfully' });
  } catch (error) {
    console.error("Error deleting board:", error);
    res.status(500).send("Error deleting board");
  }
});

module.exports = router; // Ensure this line is present
