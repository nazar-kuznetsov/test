import {createStore, applyMiddleware, compose} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
// import rootSaga from '../saga/root';
import rootReducer from '../reducers';

// const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );

  // sagaMiddleware.run(rootSaga);

  return store;
}
