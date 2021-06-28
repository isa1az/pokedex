import {FlavorTextEntry} from '../interfaces/pokemonSpecies';
import {Stat} from '../interfaces/pokemonResponse';

export function parsePokemonNumber(pokemonNumber: number): string {
  return pokemonNumber.toString().padStart(3, '0');
}

export function parsePokemonDescription(
  flavors: FlavorTextEntry[] = [],
): string {
  const enFlavors = flavors.filter(flavor => flavor.language.name === 'en');

  return enFlavors.length > 1
    ? enFlavors[enFlavors.length - 1].flavor_text
    : 'No description available.';
}

export function getMaxStat(stats: Stat[] = []): number {
  let maxStat = 0;

  stats.forEach(
    stat => (maxStat = stat.base_stat > maxStat ? stat.base_stat : maxStat),
  );

  return maxStat * 1.5;
}

export function parseStatName(statName: string) {
  switch (statName) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp Atk';
    case 'speed':
      return 'Speed';
    case 'special-defense':
      return 'Sp Def';
    default:
      return statName;
  }
}
