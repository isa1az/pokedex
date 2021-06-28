import {useState, useEffect, useCallback} from 'react';
import {PokemonFull} from '../interfaces/pokemonResponse';
import {pokemonApi} from '../api/api';
import {parsePokemonNumber} from '../utils/utils';
import {AppConfig} from '../../appConfig';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = useCallback(async () => {
    const resp = await pokemonApi.get<PokemonFull>(
      `${AppConfig.apiUrl}/pokemon/${id}`,
    );
    setPokemon(mapPokemon(resp.data));
    setIsLoading(false);
  }, [id]);

  const mapPokemon = (pokemonFull: PokemonFull) => {
    const height = pokemonFull.height / 10;
    const weight = pokemonFull.weight / 10;
    const pokemonNumberText = parsePokemonNumber(pokemonFull.id);

    return {
      ...pokemonFull,
      height,
      weight,
      pokemonNumberText,
    };
  };

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  return {
    isLoading,
    pokemon,
  };
};
