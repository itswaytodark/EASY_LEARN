// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: "isAuthSlice",

  initialState: {
    isAuth: false,
  },
  reducers: {
    onLogin(state) {
      state.isAuth = true;
    },
    onLogout(state) {
      state.isAuth = false;
    },
  },
});

export const { onLogin, onLogout } = isAuthSlice.actions;

export default isAuthSlice.reducer;
