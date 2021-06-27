import { PokemonListAction } from '../types/pokemonListActionType';
import { Dispatch } from 'redux';
import { pokemonApi } from '../api/api';
import { PokemonResponse, Result } from '../interfaces/pokemonResponse';
import { RootState } from '../interfaces/rootState';

const mapPokemonList = (pokemonResults: Result[]) => pokemonResults.map(({name, url}) => {
  const urlParts = url.split('/');
  const id = urlParts[urlParts.length - 2];
  // const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return {id, name, picture};
});

export const loadPokemonList = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {pokemonList: state} = getState();
    const {data} = await pokemonApi.get<PokemonResponse>(state.nextPageUrl);
    const newPokemonList = mapPokemonList(data.results);

    dispatch({
      type: PokemonListAction.loadPokemonList,
      payload: {
        pokemonList: [...state.pokemonList, ...newPokemonList],
        nextPageUrl: data.next,
      }
    });
  };
};
