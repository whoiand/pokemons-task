import {combineReducers} from 'redux';
import {pokemonBaseReducer} from './pokemonBaseReducer';
import {pokemonEntityReducer} from './pokemonEntityReducer';

const rootReducer = combineReducers({
  pokemonBaseList: pokemonBaseReducer,
  pokemonEntityReducer: pokemonEntityReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
