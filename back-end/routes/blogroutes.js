import express from 'express';
import { createBlog, deleteBlog, getBlogs, updateBlog } from '../controllers/blogController.js';
import { userAuth } from '../middelware/userAuth.js';

const blogRouter = express.Router();

blogRouter.post('/blog-create',userAuth, createBlog);
blogRouter.delete('/blog-delete/:id',userAuth, deleteBlog);
blogRouter.put('/blog-update/:id',userAuth, updateBlog);
blogRouter.get('/blogs', getBlogs);

export default blogRouter;
