import { configureStore } from "@reduxjs/toolkit";
import isAuthSlice from "./slices/isAuth"
import isLikedReducer  from "./slices/isLiked.js";

export const store = configureStore({
    reducer: {
        isAuth: isAuthSlice,
        likedBlog: isLikedReducer 
    }
})