import {PokemonListAction} from '../types/pokemonListActionType';
import {Dispatch} from 'redux';
import {pokemonApi} from '../api/api';
import {Pokemon, PokemonResponse} from '../interfaces/pokemonResponse';
import {RootState} from '../interfaces/rootState';
import {mapPokemonList} from '../utils/utils';
import {FuseAction} from '../types/searchType';
import {ReducerAction} from '../interfaces/reducerAction';
import {AppConfig} from '../../appConfig';
import Fuse from 'fuse.js';
import {PokemonListState} from '../interfaces/pokemonState';

export const loadPokemonList = () => {
  console.log('loadPokemonList');
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {pokemonList: state} = getState();
    const {data} = await pokemonApi.get<PokemonResponse>(state.nextPageUrl!);
    const newPokemonList = mapPokemonList(data.results);

    dispatch(
      updatePokemonList([...state.pokemonList, ...newPokemonList], data.next),
    );
  };
};

export const createFuseInstance = () => {
  return async (dispatch: Dispatch) => {
    const {data} = await pokemonApi.get<PokemonResponse>(
      `${AppConfig.apiUrl}/pokemon?limit=50`,
    );
    const pokemonList = mapPokemonList(data.results);

    dispatch({
      type: FuseAction.createFuse,
      payload: {
        fuse: new Fuse<Pokemon>(pokemonList, AppConfig.fuseOptions),
        isLoaded: true,
      },
    });
  };
};

const updatePokemonList = (
  pokemonList: Pokemon[],
  nextPageUrl?: string,
): ReducerAction<PokemonListState> => {
  return {
    type: PokemonListAction.loadPokemonList,
    payload: {
      pokemonList,
      nextPageUrl,
    },
  };
};
