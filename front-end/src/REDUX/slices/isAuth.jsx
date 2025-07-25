// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('authUser');
const storedIsAuth = localStorage.getItem('isAuth') === 'true';

const isAuthSlice = createSlice({
  name: "isAuthSlice",
  
  initialState: {
    isAuth: storedIsAuth || false,
    user: storedUser ? JSON.parse(storedUser) : {},
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
