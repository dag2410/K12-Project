import { createSlice } from "@reduxjs/toolkit";
import { getAll, getOne, update, del } from "./productsAsync"; // Nhập các async actions

const initialState = {
  products: [],
  currentProduct: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Lấy tất cả
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Lấy
      .addCase(getOne.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(getOne.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Cập nhật
      .addCase(update.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
        state.isLoading = false;
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Xóa
      .addCase(del.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(del.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(del.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
