// Combine all of the reducers in this app in here and export combined
import { combineReducers } from 'redux';

import posts from './posts';

// export combined reducers (only post in this project)
// use within relevant componenets with useSelector callback function state.posts
export default combineReducers({ posts });
