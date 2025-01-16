import express from "express";
import connectDB from "../database/database.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.Error(`Error: ${error.message}`);
    console.log("Server is not running");
  });
