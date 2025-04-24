import authService from "@/service/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    const res = await authService.getCurrentUser();
    return res.data;
  }
);

export const postRegister = createAsyncThunk("auth/postRegister", async () => {
  const res = await authService.postRegister();
  return res.data;
});

export const postLogOut = createAsyncThunk("auth/postLogOut", async () => {
  const res = await authService.postLogOut();
  return res.data;
});

export const postLogIn = createAsyncThunk("auth/postLogIn", async () => {
  const res = await authService.postLogIn();
  return res.data;
});
