import {DataAction, DataActions} from '../types';

interface DataState {
  loading: boolean;
  data: PokemonEntity | null;
  error: string;
}

const initialState: DataState = {
  loading: false,
  data: null,
  error: '',
};

const POKEMON_ENTITY_ACTION: DataAction = {
  PENDING: 'POKEMON_PENDING',
  SUCCESS: 'POKEMON_SUCCESS',
  FAILURE: 'POKEMON_FAILURE',
};

const pokemonEntityReducer = (
  state = initialState,
  action: DataActions<PokemonEntity>,
): DataState => {
  switch (action.type) {
    case POKEMON_ENTITY_ACTION.PENDING:
      return {...state, loading: true};
    case POKEMON_ENTITY_ACTION.SUCCESS:
      return {...state, loading: false, data: action.payload};
    case POKEMON_ENTITY_ACTION.FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export {pokemonEntityReducer, POKEMON_ENTITY_ACTION};
