import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import _ from 'lodash';

import { loadState, saveState } from './localstorage';
import reducers from './reducers';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(promise)
);

store.subscribe(_.throttle(
  () => {
  saveState({
    form: store.getState().form
  });
}),5000);

export default store;