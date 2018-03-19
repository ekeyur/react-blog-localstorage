import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import _ from 'lodash';


// import { loadState, saveState } from './localstorage';
import { save, load } from 'redux-localstorage-simple';
import reducers from './reducers';

// const persistedState = loadState();

const createStoreWithMiddleware = applyMiddleware(
  promise,
  // persistedState,
  save({ states: ["form"]})
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  
  load({ states: ["form"]}),
);

// store.subscribe(_.throttle(
//   () => {
//   saveState({
//     form: store.getState().form
//   });
// }),500);

export default store;