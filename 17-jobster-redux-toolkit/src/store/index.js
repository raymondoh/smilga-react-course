import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import jobReducer from "../features/job/jobSlice";
import jobSlice from "../features/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    job: jobSlice,
  },
});
