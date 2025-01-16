import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});
