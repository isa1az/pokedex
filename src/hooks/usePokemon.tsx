import {useState, useEffect} from 'react';
import {PokemonFull} from '../interfaces/pokemonResponse';
import {pokemonApi} from '../api/api';
import {parsePokemonNumber} from '../utils/utils';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(mapPokemon(resp.data));
    setIsLoading(false);
  };

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
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
