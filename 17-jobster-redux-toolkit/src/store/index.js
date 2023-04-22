import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import jobReducer from "../features/job/jobSlice";
import jobsReducer from "../features/job/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    job: jobReducer,
    allJobs: jobsReducer,
  },
});
