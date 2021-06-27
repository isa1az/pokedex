import {FlavorTextEntry} from '../interfaces/pokemonSpecies';

export function parsePokemonNumber(pokemonNumber: number): string {
  return pokemonNumber.toString().padStart(3, '0');
}

export function parsePokemonDescription(flavors: FlavorTextEntry[]): string {
  const enFlavors = flavors.filter(flavor => flavor.language.name === 'en');

  return enFlavors.length > 1
    ? enFlavors[enFlavors.length - 1].flavor_text
    : 'No description available.';
}
