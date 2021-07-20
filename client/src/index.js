import React from 'react';
import ReactDom from 'react-dom';
// Provider allows us to access the state from anywhere in the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import combined reducers from /reducers/index.js to createStore() with
import reducers from './reducers';
import './index.css';
import App from './App';

// Set up redux store state using the combined reducers from reducers/index.js
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  // Wrap the entire app in a provider to give access to the redux state
  // pass the store state value through
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
