import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import connectDB from "../config/database.js";

import userRoutes from "../routes/userRoutes.js";
import authRoutes from "../routes/authRoutes.js";
import postRoutes from "../routes/postRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://aneesh-blog.netlify.app",
];

//common middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());

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
app.use("/api/post", postRoutes);