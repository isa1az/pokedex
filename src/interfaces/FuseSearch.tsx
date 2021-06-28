import {Pokemon} from './pokemonResponse';

export interface FuseSearch {
  item: Pokemon;
  refIndex: number;
  score: number;
}
