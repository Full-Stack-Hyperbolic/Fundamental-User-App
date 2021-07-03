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
    console.log(error.message);
  }
};
