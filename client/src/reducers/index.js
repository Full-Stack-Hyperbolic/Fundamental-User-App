import { combineReducers } from 'redux';

import posts from './posts';

// export combined reducers (only post in this project)
export default combineReducers({ posts });
