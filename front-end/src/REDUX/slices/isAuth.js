import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('authUser');
const storedIsAuth = localStorage.getItem('isAuth') === 'true';

const parsedUser = storedUser ? JSON.parse(storedUser) : {};

const isAuthSlice = createSlice({
  name: "isAuthSlice",

  initialState: {
    isAuth: storedIsAuth || false,
    user: parsedUser,
    isVerified: parsedUser?.isAccountVerified || false,
  },

  reducers: {
    onLogin(state, action) {
      state.isAuth = true;
      state.user = action.payload;
      state.isVerified = action.payload.isAccountVerified || false;

      localStorage.setItem('authUser', JSON.stringify(action.payload));
      localStorage.setItem('isAuth', 'true');
    },
    onLogout(state) {
      state.isAuth = false;
      state.user = {};
      state.isVerified = false;

      localStorage.removeItem('authUser');
      localStorage.removeItem('isAuth');
    },
    updateVerificationStatus(state, action) {
      state.isVerified = action.payload;
      if (state.user) {
        state.user.isAccountVerified = action.payload;
        localStorage.setItem('authUser', JSON.stringify(state.user));
      }
    },
  },
});

export const { onLogin, onLogout, updateVerificationStatus } = isAuthSlice.actions;
export default isAuthSlice.reducer;
