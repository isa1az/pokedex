import React from 'react';
import {Pokemon} from '../interfaces/pokemonResponse';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: Pokemon;
}

const PokemonListItem = ({pokemon}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('PokemonDetailScreen', {pokemon})}>
      <View style={[styles.itemContainer, {width: windowWidth * 0.275}]}>
        <Image source={{uri: pokemon.picture}} style={styles.pokemonImage} />

        <Text style={styles.name}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 100,
    width: 120,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textTransform: 'capitalize',
  },
  pokemonImage: {
    width: 70,
    height: 70,
  },
});

export default PokemonListItem;
