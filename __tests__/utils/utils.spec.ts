import {mapPokemonList, parsePokemonNumber} from '../../src/utils/utils';
import {pokemonListMock, pokemonResponseMock} from '../../mocks/mockData';

describe('utils.js', () => {
  it('should map pokemon list', () => {
    const {results} = pokemonResponseMock;
    const mappedData = mapPokemonList(results);

    expect(mappedData).toEqual(pokemonListMock);
  });

  it('should return empty array for empty results', () => {
    const mappedData = mapPokemonList([]);
    expect(mappedData).toEqual([]);
  });

  it('should return an empty array for undefined values', () => {
    // @ts-ignore
    const mappedData = mapPokemonList(undefined);
    expect(mappedData).toEqual([]);
  });

  it('should return an empty array for null values', () => {
    // @ts-ignore
    const mappedData = mapPokemonList(null);
    expect(mappedData).toEqual([]);
  });

  it('should parse pokemon number less than 1', () => {
    const number = parsePokemonNumber(-5);
    expect(number).toBe('000');
  });

  it('should parse pokemon number equal to 0', () => {
    const number = parsePokemonNumber(0);
    expect(number).toBe('000');
  });

  it('should parse pokemon number less than 10', () => {
    const number = parsePokemonNumber(9);
    expect(number).toBe('009');
  });

  it('should parse pokemon number less than 100', () => {
    const number = parsePokemonNumber(99);
    expect(number).toBe('099');
  });

  it('should parse pokemon number less than 1000', () => {
    const number = parsePokemonNumber(999);
    expect(number).toBe('999');
  });
});
