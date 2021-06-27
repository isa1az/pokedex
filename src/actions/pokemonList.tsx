import { PokemonListAction } from '../types/pokemonListActionType';
import { Dispatch } from 'redux';

export const loadPokemonList = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: PokemonListAction.loadPokemonList,
      payload: ['Bulbasaur', 'Charmander', 'Squirtle']
    });
  };
};
