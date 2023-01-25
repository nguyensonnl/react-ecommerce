import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const getProductFeatured = createAsyncThunk(
  "products/productFeatured",
  async (count) => {
    const res = await productApi.getProductFeatured(count);
    return res.data;
  }
);

const initialState = {
  products: [],
  loading: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductFeatured.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getProductFeatured.fulfilled]: (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    },
    [getProductFeatured.rejected]: (state, action) => {
      state.loading = "error";
    },
  },
});

export const productReducer = productSlice.reducer;
