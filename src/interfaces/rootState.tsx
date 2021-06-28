import {PokemonListState} from './pokemonState';
import {FuseState} from './fuseState';

export interface RootState {
  pokemonList: PokemonListState;
  fuse: FuseState;
}
