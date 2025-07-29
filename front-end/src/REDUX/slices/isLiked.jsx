import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const storedLikedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];

export const isLiked_Slice = createSlice({
  name: 'blog_liked_slice',
  initialState: {
    blogItem: storedLikedBlogs
  },
  reducers: {
    likeBlog: (state, action) => {
      const existing = state.blogItem.find(item => item.id === action.payload.id);
      if (!existing) {
        state.blogItem.push({ ...action.payload, qty: 1 });
        // Save to localStorage
        localStorage.setItem('likedBlogs', JSON.stringify(state.blogItem));
      }
    },
    unlikeBlog: (state, action) => {
      state.blogItem = state.blogItem.filter(item => item.id !== action.payload.id);
      // Save to localStorage
      localStorage.setItem('likedBlogs', JSON.stringify(state.blogItem));
    }
  }
});

export const { likeBlog, unlikeBlog } = isLiked_Slice.actions;

export default isLiked_Slice.reducer;
