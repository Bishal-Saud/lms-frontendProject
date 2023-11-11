import { configureStore } from "@reduxjs/toolkit";

import authSliceReducers from "./slices/authSlice";
import courseSliceReducers from "./slices/CourseSlice.js";
const store = configureStore({
  reducer: {
    auth: authSliceReducers,
    course: courseSliceReducers,
  },
  devTools: true,
});

export default store;
