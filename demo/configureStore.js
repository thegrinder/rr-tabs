import { createStore, combineReducers } from 'redux';
import { reducer } from '../src';


const configureStore = () => {
  const store = createStore(
    combineReducers({ tabs: reducer }),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );

  if (module.hot) {
    module.hot.accept('../src', () => {
      store.replaceReducer(combineReducers({ tabs: reducer }));
    });
  }

  return store;
};

export default configureStore;
