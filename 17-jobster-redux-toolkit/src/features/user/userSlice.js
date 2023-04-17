import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { addUserToLocalStorage, removeUserFromLocalStorage, getUserFromLocalStorage } from "../../utils/storage";
import { registerUserThunk, loginUserThunk, updateUserThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

// register user
// export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
//   try {
//     const response = await customFetch.post("/auth/register", user);
//     return response.data;
//     console.log(response.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.msg);
//   }
// });
// register refactored
export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
  return registerUserThunk("/auth/register", user, thunkAPI);
});

// login user
// export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
//   try {
//     const response = await customFetch.post("/auth/login", user);
//     return response.data;
//     console.log(response.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.msg);
//   }
// });

// login refactored
export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
  return loginUserThunk("/auth/login", user, thunkAPI);
});

// update user
// export const updateUser = createAsyncThunk("user/updateUser", async (user, thunkAPI) => {
//   try {
//     const response = await customFetch.patch("/auth/updateUser", user, {
//       headers: {
//         authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       thunkAPI.dispatch(logoutUser());
//       return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
//     }
//     console.log(error.response);
//     return thunkAPI.rejectWithValue(error.response.data.msg);
//   }
// });

// update user refactored
export const updateUser = createAsyncThunk("user/updateUser", async (user, thunkAPI) => {
  return updateUserThunk("/auth/updateUser", user, thunkAPI);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: builder => {
    //register
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    // builder.addCase(registerUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello, ${user.name}`);
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
      // state.user = {};
      //state.error = action.error;
    });
    // login
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
    // update user
    builder
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Profile updated: ${user.name}`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
