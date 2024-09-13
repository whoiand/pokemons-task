import {DataAction, DataActions} from '../types';

interface DataState {
  loading: boolean;
  data: PokemonBase[];
  error: string;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: '',
};

const POKEMON_BASE_ACTION: DataAction = {
  PENDING: 'BASE_PENDING',
  SUCCESS: 'BASE_SUCCESS',
  FAILURE: 'BASE_FAILURE',
};

const pokemonBaseReducer = (
  state = initialState,
  action: DataActions<PokemonBase[]>,
): DataState => {
  switch (action.type) {
    case POKEMON_BASE_ACTION.PENDING:
      return {...state, loading: true};
    case POKEMON_BASE_ACTION.SUCCESS:
      return {...state, loading: false, data: action.payload};
    case POKEMON_BASE_ACTION.FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export {pokemonBaseReducer, POKEMON_BASE_ACTION};
