import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  //cartItems: cartItems,
  cartItems: [],
  amount: 3,
  total: 0,
  isLoading: true,
};

// fetch products
export const getCartItems = createAsyncThunk("cart/getCartItems", async (name, thunkAPI) => {
  try {
    const resp = await axios(url);

    return resp.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue("something went wrong");
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      // option 1
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      // this is NOT amount in state
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      // payload not object
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      // this is NOT amount in state
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state, action) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCartItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.error;
    });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
