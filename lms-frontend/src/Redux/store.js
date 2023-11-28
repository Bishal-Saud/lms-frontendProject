import { configureStore } from "@reduxjs/toolkit";

import authSliceReducers from "./slices/authSlice";
import courseSliceReducers from "./slices/CourseSlice.js";
import razorpaySliceReducer from "./slices/RazorPaySlice.js";
import lectureSlice from "./slices/LectureSlice.js";
import StatSlice from "./slices/StatSlice.js";
const store = configureStore({
  reducer: {
    auth: authSliceReducers,
    course: courseSliceReducers,
    razorpay: razorpaySliceReducer,
    lecture: lectureSlice,
    stats: StatSlice,
  },
  devTools: true,
});

export default store;
