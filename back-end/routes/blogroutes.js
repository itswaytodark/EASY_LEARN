import express from 'express';
import { createBlog, deleteBlog, updateBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post('/blog-create', createBlog);
blogRouter.delete('/blog-delete/:id', deleteBlog);
blogRouter.put('/blog-update/:id', updateBlog);

export default blogRouter;
