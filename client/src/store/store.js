import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
