import {useState, useEffect} from 'react';
import {pokemonApi} from '../api/api';
import {PokemonSpecies} from '../interfaces/pokemonSpecies';
import {ApiConfig} from '../api/apiConfig';
import {parsePokemonDescription} from '../utils/utils';

export const usePokemonSpecies = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>(
    {} as PokemonSpecies,
  );

  const loadPokemonSpecies = async () => {
    setIsLoading(true);

    const resp = await pokemonApi.get<PokemonSpecies>(
      `${ApiConfig.apiUrl}/pokemon-species/${id}`,
    );

    setPokemonSpecies({
      ...resp.data,
      description: parsePokemonDescription(resp.data.flavor_text_entries),
    });

    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonSpecies();
  }, []);

  return {
    isLoading,
    pokemonSpecies,
  };
};
