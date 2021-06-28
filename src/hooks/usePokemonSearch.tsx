import {useEffect, useState} from 'react';
import Fuse from 'fuse.js';

import {pokemonApi} from '../api/api';
import {PokemonResponse} from '../interfaces/pokemonResponse';
import {mapPokemonList} from '../utils/utils';
import {AppConfig} from '../../appConfig';
import {FuseSearch} from '../interfaces/FuseSearch';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [fuse, setFuse] = useState<any>();

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonResponse>(
      `${AppConfig.apiUrl}/pokemon?limit=50`,
    );

    const pokemons = mapPokemonList(resp.data.results);
    const fuseInstance = new Fuse(pokemons, AppConfig.fuseOptions);
    setFuse(fuseInstance);
    setIsFetching(false);
  };

  const search = (pattern: string): FuseSearch[] => {
    if (!fuse) {
      return [];
    }

    return fuse.search(pattern);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    search,
  };
};
