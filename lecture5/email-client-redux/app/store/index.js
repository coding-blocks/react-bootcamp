import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './reducers';

const logger = store => next => action => {
  /*
  {
    prevState: {},
    action: {},
    nextsState: {},
  }
*/
  const prevState = store.getState();
  next(action);
  const nextsState = store.getState();

  console.log({
    prevState,
    action,
    nextsState,
  });
};

const customThunk = store => next => action =>
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);

// const store = createStore(Reducer, InitialState, middlewares);
const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
  ),
);

window.store = store;

export default store;
