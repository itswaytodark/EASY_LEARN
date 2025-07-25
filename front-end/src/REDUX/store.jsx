import { configureStore } from "@reduxjs/toolkit";
import isAuthSlice from "./slices/isAuth"

export const store = configureStore({
    reducer: {
        isAuth: isAuthSlice
    }
})