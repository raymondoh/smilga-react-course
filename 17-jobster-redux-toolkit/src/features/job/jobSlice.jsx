import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
//import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/storage";
import { logoutUser } from "../user/userSlice";
//import { getAllJobs, hideLoading, showLoading } from "./allJobsSlice";
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

// create/add job
// export const createJob = createAsyncThunk("job/addJob", async (job, thunkAPI) => {
//   try {
//     const response = await customFetch.post("/jobs", job, {
//       headers: {
//         authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//       },
//     });
//     thunkAPI.dispatch(clearValues());
//     return response.data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       thunkAPI.dispatch(logoutUser());
//       return thunkAPI.rejectWithValue("Unauthorised! Logging out");
//     }
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// });
export const createJob = createAsyncThunk("job/addJob", createJobThunk);
// delete job
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
// edit job
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

// slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: (state, action) => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isEditing: true,
      };
    },
  },
  extraReducers: builder => {
    // createJob
    builder
      .addCase(createJob.pending, state => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        //const { user } = payload;
        state.isLoading = false;
        //state.user = user;
        //addUserToLocalStorage(user);
        toast.success(`Job created `);
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //delete
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      // edit
      .addCase(editJob.pending, state => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, state => {
        state.isLoading = false;
        toast.success("Job Modified...");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
