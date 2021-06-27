import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { loadPokemonList } from '../actions/pokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/rootState';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector<RootState, any[]>(state => state.pokemonList);

  useEffect(() => {
    console.log('useEffect');
    dispatch(
      loadPokemonList()
    );
  }, []);

  return (
    <Text>{JSON.stringify(pokemonList)}</Text>
  );
};
