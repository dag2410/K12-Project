import { createSlice } from "@reduxjs/toolkit";

import {
  getCurrentUser,
  postRegister,
  postLogOut,
  postLogIn,
} from "./authAsync";

const initialState = {
  currentUser: null,
  isLoading: false,
  isLoggerIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isLoggerIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get current user
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = null;
        state.isLoggerIn = false;
      })

      // Register new user
      .addCase(postRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Log out
      .addCase(postLogOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postLogOut.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoggerIn = false;
        state.isLoading = false;
      })
      .addCase(postLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Log in
      .addCase(postLogIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postLogIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
      })
      .addCase(postLogIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
