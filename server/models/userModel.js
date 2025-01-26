import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    photoUrl:{
      type:String,
      default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verifyOtpExpires: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String, //why it is string because we are going to send otp to user email to reset
      default: "",
    },
    resetOtpExpires: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
