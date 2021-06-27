import {Pokemon} from './pokemonResponse';

export interface PokemonListState {
  pokemonList: Pokemon[];
  nextPageUrl: string;
}
