import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
// import transporter from "../config/nodemailer.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set cookie for the token
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Email content
    // const mailOptions = {
    //   from: process.env.SENDER_EMAIL,
    //   to: email,
    //   subject: `Welcome to aneesh.Blog`,
    //   text: `You have successfully registered with ${email}. Enjoy blogging!`,
    // };

    // // Send the email
    // transporter.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.error("Error occurred:", err);
    //   } else {
    //     console.log("Email sent successfully:", info.response);
    //   }
    // });
    // Respond with success message
    return res.status(201).json({
      message: "Signup success! Please sign in.",
    });
  } catch (err) {
    console.error("Signup Error:", err); // Log the error
    return res.status(500).json({
      message: "An error occurred during signup.",
      error: err.message,
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Creditentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Creditentials",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      user: user,
      message: "Signin success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const signout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({
      message: "Signout success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    console.log(user);
    if (user.isVerified) {
      return res.status(400).json({
        message: "User is already verified",
      });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpires = Date.now() + 600000;
    await user.save();
    // const mailOptions = {
    //   from: process.env.SENDER_EMAIL,
    //   to: user.email,
    //   subject: `OTP to verify your email`,
    //   text: `OTP to verify your email is ${otp}`,
    // };
    // transporter.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.error("Error occurred:", err);
    //   } else {
    //     console.log("Email sent successfully:", info.response);
    //   }
    // });
    return res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body; //but how can we get userid from the request body? it should be in the cookie we
  if (!userId || !otp) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    console.log(user);
    if (user.verifyOtp !== otp || user.verifyOtp === "") {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }
    if (user.verifyOtpExpires < Date.now()) {
      return res.status(400).json({
        message: "OTP expired",
      });
    }
    user.isVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpires = 0;
    await user.save();
    return res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({
      message: "Email is required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "User is not found",
      });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.resetOtp = otp;
    user.resetOtpExpires = Date.now() + 600000;
    await user.save();
    // const mailOption = {
    //   from: process.env.SENDER_EMAIL,
    //   to: user.email,
    //   subject: `OTP to reset your password`,
    //   text: `OTP to reset your password is ${otp}`,
    // };
    // transporter.sendMail(mailOption, function (err, info) {
    //   if (err) {
    //     console.error("Error occurred:", err);
    //   } else {
    //     console.log("Email sent successfully:", info.response);
    //   }
    // });
    return res.status(200).json({
      message: "Reset OTP sent successfully",
    });
  } catch (error) {
    console.error("Send OTP Error:", error);
  }
};

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!otp || !email || otp == "") {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    if (otp !== user.resetOtp || user.resetOtpExpires < Date.now()) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpires = 0;
    await user.save();
    return res.status(200).json({
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return res.status(500).json({
      message: "An error occurred during password reset",
    });
  }
};
