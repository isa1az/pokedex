import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { loadPokemonList } from '../actions/pokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/rootState';
import { Pokemon } from '../interfaces/pokemonResponse';
import PokemonListItem from '../components/PokemonListItem';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector<RootState, Pokemon[]>(({pokemonList}) => pokemonList.pokemonList);

  const loadPokemons = () => dispatch(
    loadPokemonList()
  );

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={pokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonListItem pokemon={item}/>}
        // onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey"/>
        }
      />
    </View>
  );
};
