// used to make API calls
import axios from 'axios';

const url = 'http://localhost:5000/posts';

// axios get request to our API for returning posts
export const fetchPosts = () => axios.get(url);
