import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { actions as getCurrentUser } from "@/reducers/auth";

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async () => {
    const res = await authService.getCurrentUser();
    return res.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: null,

  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const { action, reducer } = authSlice;

// export const {} = authSlice.actions;

export default authSlice.reducer;
