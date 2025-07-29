import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogItem: [],
};

const isLikedSlice = createSlice({
  name: 'likedBlog',
  initialState,
  reducers: {
    likeBlog: (state, action) => {
      const blog = action.payload;
      const exists = state.blogItem.some(item => item._id === blog._id);
      if (!exists) {
        state.blogItem.push(blog);
      }
    },
    unlikeBlog: (state, action) => {
      const blog = action.payload;
      state.blogItem = state.blogItem.filter(item => item._id !== blog._id);
    },
  },
});

export const { likeBlog, unlikeBlog } = isLikedSlice.actions;
export default isLikedSlice.reducer;
