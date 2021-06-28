import {ReducerAction} from '../interfaces/reducerAction';
import {PokemonListAction} from '../types/pokemonListActionType';
import {AppConfig} from '../../appConfig';
import {PokemonListState} from '../interfaces/pokemonState';

const initialState: PokemonListState = {
  pokemonList: [],
  nextPageUrl: `${AppConfig.apiUrl}/pokemon?limit=50`,
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
