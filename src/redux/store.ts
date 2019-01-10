import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, Store } from 'redux';
import reducers from './reducers';
import middlewares, { sagaMiddleware } from './middlewares';
import { AppState } from './AppState';
import sagas from '../features/posts/duck/sagas';

export const store: Store<AppState> = createStore(reducers,composeWithDevTools(middlewares));

sagaMiddleware.run(sagas);