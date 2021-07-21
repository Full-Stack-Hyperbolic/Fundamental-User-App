// used to make API calls for our Posts
import axios from 'axios';

// const url = 'https://localhost:5000/posts'
const url = 'https://klh-memories.herokuapp.com/posts';

// axios get request to our API for returning posts
export const fetchPosts = () => axios.get(url);
export const createPost = newPost => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = id => axios.delete(`${url}/${id}`);
export const likePost = id => axios.patch(`${url}/${id}/likePost`);
