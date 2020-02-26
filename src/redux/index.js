import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMidleware);

const store = createStore(rootReducer, middlewares);

sagaMidleware.run(rootSaga);

export default store;
