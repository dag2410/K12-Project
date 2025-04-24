import * as productService from "@/service/productService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAll = createAsyncThunk("products/getAll", async () => {
  const res = await productService.getAll();
  return res.data;
});

export const getOne = createAsyncThunk("products/getOne", async (id) => {
  const res = await productService.getOne(id);
  return res.data;
});

export const update = createAsyncThunk(
  "products/update",
  async ({ id, data }) => {
    const res = await productService.update(id, data);
    return res.data;
  }
);

export const del = createAsyncThunk("products/del", async (id) => {
  const res = await productService.del(id);
  return res.data;
});
