import express from "express";
import connectDB from "../database/database.js";
import "dotenv/config";
import userRoutes from "../routes/userRoutes.js";
import authRoutes from "../routes/authRoutes.js";

const app = express();
app.use(express.json());
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
app.use("/api/auth", authRoutes);
