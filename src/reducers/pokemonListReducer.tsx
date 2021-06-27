import { ReducerAction } from '../interfaces/reducerAction';
import { PokemonListAction } from '../types/pokemonListActionType';
import { ApiConfig } from '../constants/apiConfig';

interface PokemonListState {
  pokemonList: any[]; // TODO Replace by pokemon
  nextPageUrl: string,
}

const initialState: PokemonListState = {
  pokemonList: [],
  nextPageUrl: `${ApiConfig.apiUrl}/pokemon?limit=40`,
};

export const pokemonListReducer = (state = initialState, action: ReducerAction<PokemonListState>) => {
  switch (action.type) {
    case PokemonListAction.loadPokemonList:
      return {...action.payload};
  }

  return state;
};
