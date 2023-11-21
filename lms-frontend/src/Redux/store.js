import { configureStore } from "@reduxjs/toolkit";

import authSliceReducers from "./slices/authSlice";
import courseSliceReducers from "./slices/CourseSlice.js";
import razorpaySliceReducer from "./slices/RazorPaySlice.js";
const store = configureStore({
  reducer: {
    auth: authSliceReducers,
    course: courseSliceReducers,
    razorpay: razorpaySliceReducer,
  },
  devTools: true,
});

export default store;
