import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../api/categoryApi";

export const getAllCateogry = createAsyncThunk(
  "categories/getAll",
  async () => {
    const res = await categoryApi.getAllCateogry();
    return res.data;
  }
);

const initialState = {
  categories: [],
  loading: "idle",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCateogry.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllCateogry.fulfilled]: (state, action) => {
      state.loading = "success";
      state.categories = action.payload;
    },
    [getAllCateogry.rejected]: (state, aciton) => {
      state.loading = "error";
    },
  },
});

export const categoryReducer = categorySlice.reducer;