import {Pokemon, PokemonResponse} from '../src/interfaces/pokemonResponse';

export const pokemonResponseMock: PokemonResponse = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=5&limit=5',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
  ],
};

export const pokemonListMock: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    id: 2,
    name: 'ivysaur',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
  },
  {
    id: 3,
    name: 'venusaur',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
  },
  {
    id: 4,
    name: 'charmander',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    id: 5,
    name: 'charmeleon',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
  },
];
