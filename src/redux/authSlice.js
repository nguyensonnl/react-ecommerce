import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "../api/axiosClient";

export const userLogin = createAsyncThunk("auth/login", async (data) => {
  const res = await axios.post("http://localhost:5001/api/v1/auth/login", data);
  return res.data;
});

const initialState = {
  userInfor: {},
  loading: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.loading = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = "success";
      state.userInfor = action.payload;
    },
    [userLogin.rejected]: (state, aciton) => {
      state.loading = "error";
    },
  },
});

export const authReducer = authSlice.reducer;
