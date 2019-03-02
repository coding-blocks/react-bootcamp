import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './reducers';

// const store = createStore(Reducer, InitialState, middlewares);
const store = createStore(Reducer, undefined, applyMiddleware(thunk));

export default store;
