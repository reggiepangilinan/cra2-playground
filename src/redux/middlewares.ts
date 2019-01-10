import { applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

export default middlewares;