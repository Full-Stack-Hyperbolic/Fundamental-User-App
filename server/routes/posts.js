import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';

const router = express.Router();

// This designates what happens when someone visits: `localhost:5000/`
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

// Export the router for use with app in index.js.
export default router;
