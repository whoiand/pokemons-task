import {Dispatch} from 'redux';
import {DataActions, FetchType} from './types';
import {POKEMON_BASE_ACTION} from './reducers/pokemonBaseReducer';
import {POKEMON_ENTITY_ACTION} from './reducers/pokemonEntityReducer';

const API_BASE_URI = 'https://pokeapi.co/api/v2/';

const API_ENDPOINT = {
  POKEMON_BASE_LIST: `${API_BASE_URI}pokemon/?offset=0&limit=151"`,
};

const fetchDataByUri = <ReponseDataType>(fetchUri: string, type: FetchType) => {
  return async (dispatch: Dispatch<DataActions<ReponseDataType>>) => {
    const action = {list: POKEMON_BASE_ACTION, entity: POKEMON_ENTITY_ACTION}[
      type
    ];

    dispatch({type: action.PENDING});

    try {
      const response = await fetch(fetchUri, {method: 'GET'});

      const data: {results: ReponseDataType} | ReponseDataType =
        await response.json();

      const responseData = {
        list: data?.results,
        entity: data,
      }[type];

      dispatch({
        type: action.SUCCESS,
        payload: responseData,
      });
    } catch (error) {
      dispatch({
        type: action.FAILURE,
        payload: error,
      });
    }
  };
};

const fetchPokemonBaseList = () =>
  fetchDataByUri<PokemonBase[]>(API_ENDPOINT.POKEMON_BASE_LIST, 'list');

const fetchPokemon = (uri: string) =>
  fetchDataByUri<PokemonEntity>(uri, 'entity');

export {fetchPokemonBaseList, fetchPokemon};
