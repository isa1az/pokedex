import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {pokemonListReducer} from '../reducers/pokemonListReducer';
import {fuseReducer} from '../reducers/pokemonSearchReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  pokemonList: pokemonListReducer,
  fuse: fuseReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
