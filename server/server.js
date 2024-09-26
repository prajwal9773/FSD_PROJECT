const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const boardRoutes = require("./routes/boardRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/planity", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use("/api/boards", boardRoutes);
app.use("/api/users", userRoutes); // Use the user routes

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
