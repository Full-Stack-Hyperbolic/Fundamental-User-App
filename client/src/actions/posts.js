// import EVERYTHING from api as  API
import * as api from '../api';

// ACTION CREATORS - function that return an 'action' (object with a type and a payload)
// getPosts arrow function with another function for async (dispatch)
export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();

    // dispatch the object with payload of 'data'
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
