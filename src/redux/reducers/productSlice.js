import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const getProductFeatured = createAsyncThunk(
  "products/productFeatured",
  async (count) => {
    const res = await productApi.getProductFeatured(count);
    return res.data;
  }
);

export const getAllProduct = createAsyncThunk("products/getAll", async () => {
  const res = await productApi.getAllProduct();
  return res.data;
});

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    await productApi.createProduct(data);
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const res = await productApi.getProductById(id);
    return res.data;
  }
);

const initialState = {
  productsFeatured: [],
  products: [],
  productById: {},
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
      state.productsFeatured = action.payload;
    },
    [getProductFeatured.rejected]: (state, action) => {
      state.loading = "error";
    },
    [getAllProduct.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    },
    [getAllProduct.rejected]: (state, aciton) => {
      state.loading = "error";
    },
    [getProductById.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getProductById.fulfilled]: (state, action) => {
      state.loading = "success";
      state.productById = action.payload;
    },
    [getProductById.rejected]: (state, aciton) => {
      state.loading = "error";
    },
  },
});

export const productReducer = productSlice.reducer;
