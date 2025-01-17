import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.json({
      message: "Signup success! Please signin",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
