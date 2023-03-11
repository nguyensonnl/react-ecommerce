import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import axiosClient from "../api/axiosClient";

//set up redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "auth",
  storage,
};
//end

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:5001/api/v1/auth/login", {
        email,
        password,
      });
      //const { user, accessToken } = res.data;
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        return res.data;
      } else {
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken") || null,
  status: "idle",
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("accessToken");
      state.accessToken = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.accessToken = null;
        state.user = null;
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export const { logout, getUser } = authSlice.actions;
//export const authReducer = authSlice.reducer;

export default persistedAuthReducer;
