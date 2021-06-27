import {ReducerAction} from '../interfaces/reducerAction';
import {PokemonListAction} from '../types/pokemonListActionType';
import {ApiConfig} from '../api/apiConfig';
import {PokemonListState} from '../interfaces/pokemonState';

const initialState: PokemonListState = {
  pokemonList: [],
  nextPageUrl: `${ApiConfig.apiUrl}/pokemon?limit=6`,
};

export const pokemonListReducer = (
  state = initialState,
  action: ReducerAction<PokemonListState>,
) => {
  switch (action.type) {
    case PokemonListAction.loadPokemonList:
      return {...action.payload};
  }

  return state;
};
