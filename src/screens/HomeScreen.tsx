import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {loadPokemonList} from '../actions/pokemonList';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../interfaces/rootState';
import {Pokemon} from '../interfaces/pokemonResponse';
import PokemonListItem from '../components/PokemonListItem';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector<RootState, Pokemon[]>(
    ({pokemonList: state}) => state.pokemonList,
  );

  const loadPokemons = () => dispatch(loadPokemonList());

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View style={styles.pokemonListContainer}>
      <FlatList
        style={styles.pokemonList}
        data={pokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({item}) => <PokemonListItem pokemon={item} />}
        // onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.activityIndicator}
            size={20}
            color="grey"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonListContainer: {
    alignItems: 'center',
  },
  pokemonList: {
    marginTop: 20,
  },
  activityIndicator: {
    height: 100,
  },
});
