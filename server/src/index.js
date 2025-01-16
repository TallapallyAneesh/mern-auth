import express from "express";
import connectDB from "../database/database.js";
import "dotenv/config";
import userRoutes from "../routes/userRoutes.js";

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

app.use("/api/user", userRoutes); //this is just a test route to check if the server is running
