import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandApi from "../api/brandApi";

export const getAllBrand = createAsyncThunk("brands/getAll", async () => {
  const res = await brandApi.getAllBrand();
  return res.data;
});

const initialState = {
  brands: [],
  loading: "idle",
};

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBrand.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllBrand.fulfilled]: (state, action) => {
      state.loading = "success";
      state.brands = action.payload;
    },
    [getAllBrand.rejected]: (state, aciton) => {
      state.loading = "error";
    },
  },
});

export const brandReducer = brandSlice.reducer;
