import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerApi from "../api/customerApi";

//set up redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "customers",
  storage,
};
//end

export const register = createAsyncThunk("customers/register", async (data) => {
  const res = await customerApi.register(data);
  return res.data.data;
});

export const login = createAsyncThunk("customers/login", async (data) => {
  const res = await customerApi.login(data);
  return res.data;
});

const initialState = {
  customer: {},
  accessToken: null,
  isLoggedIn: false,
  loading: "idle",
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    logout(state, action) {
      state.accessToken = null;
      state.customer = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      state.loading = "pending";
    },
    [register.fulfilled]: (state, action) => {
      state.loading = "success";
      state.customer = action.payload.customer;
      state.accessToken = action.payload.accessToken;
    },
    [register.rejected]: (state, aciton) => {
      state.loading = "error";
    },

    [login.pending]: (state, action) => {
      state.loading = "pending";
    },
    [login.fulfilled]: (state, action) => {
      state.loading = "success";
      state.customer = action.payload.customer;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = "error";
    },
  },
});

const persistedCustomerReducer = persistReducer(
  persistConfig,
  customerSlice.reducer
);

export default persistedCustomerReducer;
export const { logout } = customerSlice.actions;
//export const customerReducer = customerSlice.reducer;