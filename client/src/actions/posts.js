// import EVERYTHING from api as  API
import * as api from '../api';

// ACTION CREATORS - function that return an 'action' (object with a type and a payload)
// getPosts arrow function with another function for async (dispatch)
export const getPosts = () => async dispatch => {
  try {
    // First we're getting the response from the async fetchPost() call, which we then destructure out 'data' from
    const { data } = await api.fetchPosts();

    // dispatch the object with payload of 'data'
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    // make api request to update the post
    const { data } = await api.updatePost(id, post);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
