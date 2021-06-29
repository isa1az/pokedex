import {useState, useEffect, useCallback} from 'react';
import {pokemonApi} from '../api/api';
import {PokemonSpecies} from '../interfaces/pokemonSpecies';
import {AppConfig} from '../../appConfig';
import {parsePokemonDescription} from '../utils/utils';

export const usePokemonSpecies = (id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>(
    {} as PokemonSpecies,
  );

  const loadPokemonSpecies = useCallback(async () => {
    setIsLoading(true);

    const resp = await pokemonApi.get<PokemonSpecies>(
      `${AppConfig.apiUrl}/pokemon-species/${id}`,
    );

    setPokemonSpecies({
      ...resp.data,
      description: parsePokemonDescription(resp.data.flavor_text_entries),
    });

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    loadPokemonSpecies();
  }, [loadPokemonSpecies]);

  return {
    isLoading,
    pokemonSpecies,
  };
};
