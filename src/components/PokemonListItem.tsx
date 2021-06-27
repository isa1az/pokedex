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
      onPress={() => navigation.navigate('PokemonDetailScreen', {pokemon, color: 'white'})}>
      <View style={{...styles.cardContainer, width: windowWidth * 0.4,}}>
        <Image source={{uri: pokemon.picture}} style={styles.pokemonImage} />

        <Text style={styles.name}>
          {pokemon.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100
  },
});

export default PokemonListItem;
