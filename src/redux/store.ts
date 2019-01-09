import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Store } from 'redux';
import reducers from './reducers';
import { AppState } from './AppState';

export const store: Store<AppState> = createStore(reducers,composeWithDevTools());