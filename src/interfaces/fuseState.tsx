import Fuse from 'fuse.js';
import {Pokemon} from './pokemonResponse';

export interface FuseState {
  fuse?: Fuse<Pokemon>;
  isLoaded: boolean;
  filteredList: Pokemon[];
}
