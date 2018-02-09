import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// import seed data
import comments from './data/comments';
import posts from './data/posts';

// create object for the default data

const defaultState = {
	posts,
	comments
};

// createStore takes two arguments: reducer for interfacing with store, defaultState for initializing
const store = createStore(rootReducer, defaultState);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);
