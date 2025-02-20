import bcrypt from "bcrypt";
import User from "../models/userModel.js"; // Import the User model

export const test = (req, res) => {
  res.json({ message: "API running..." });
};

export const updateUser = async (req, res) => {
  console.log(req.body.userId);
  console.log(req.params.id);

  if (req.body.userId !== req.params.id) {
    return res.status(403).json("You can update only your account!");
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return res.status(400).json("Password must be at least 6 characters long!");
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 6 || req.body.username.length > 10) {
      return res.status(400).json("Username must be between 6 and 10 characters long!");
    }
    if (req.body.username.includes(" ")) {
      return res.status(400).json("Username must not contain spaces!");
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]*$/)) {
      return res.status(400).json("Username must contain only letters and numbers!");
    }
  }

  if (req.body.email) {
    if (req.body.email.includes(" ")) {
      return res.status(400).json("Email must not contain spaces!");
    }
    if (!req.body.email.includes("@") || !req.body.email.includes(".")) {
      return res.status(400).json("Email must be valid!");
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const { password, ...others } = updatedUser._doc;
    console.log(others);
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
};