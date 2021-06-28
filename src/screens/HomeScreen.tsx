import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {createFuseInstance, loadPokemonList} from '../actions/pokemonList';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../interfaces/rootState';
import PokemonListItem from '../components/PokemonListItem';
import {SearchInput} from '../components/SearchInput';
import {Pokemon} from '../interfaces/pokemonResponse';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState<Pokemon[]>([]);
  const {
    pokemonList: {pokemonList},
    fuse: {fuse, isLoaded: isFuseLoaded},
  } = useSelector<RootState, RootState>(state => state);

  const loadPokemons = useCallback(() => {
    dispatch(loadPokemonList());
  }, [dispatch]);

  const searchPokemons = (pattern: string) => {
    if (isFuseLoaded) {
      const filteredList = fuse?.search(pattern);
      const mapList = filteredList?.map(item => item.item) || [];
      setSearchList(mapList);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  useEffect(() => {
    dispatch(createFuseInstance());
  }, [dispatch]);

  return (
    <View style={styles.pokemonListContainer}>
      <SearchInput
        onSearch={value => searchPokemons(value)}
        style={styles.searchInput}
        disabled={!isFuseLoaded}
      />

      {isFuseLoaded && searchList?.length > 0 ? (
        <FlatList
          style={styles.pokemonList}
          data={searchList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={item => <PokemonListItem pokemon={item.item} />}
        />
      ) : (
        <FlatList
          style={styles.pokemonList}
          data={pokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({item}) => <PokemonListItem pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={styles.activityIndicator}
              size={20}
              color="grey"
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonListContainer: {
    alignItems: 'center',
  },
  pokemonList: {
    paddingTop: 80,
    maxHeight: 600,
  },
  activityIndicator: {
    height: 100,
  },
  searchInput: {
    position: 'absolute',
    zIndex: 999,
    width: screenWidth - 40,
    top: 20,
  },
});

export default HomeScreen;
