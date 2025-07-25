// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: "isAuthSlice",

  initialState: {
    isAuth: false,
    user:{}
  },
  reducers: {
    onLogin(state, action) {
      state.isAuth = true;
      state.user = action.payload
    },
    onLogout(state) {
      state.isAuth = false;
      state.user = {}
    },
  },
});

export const { onLogin, onLogout } = isAuthSlice.actions;

export default isAuthSlice.reducer;
