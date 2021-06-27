import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {PokedexStackParams} from '../navigation/PokedexStack';
import {usePokemon} from '../hooks/usePokemon';
import {usePokemonSpecies} from '../hooks/usePokemonSpecies';
// import {PokemonSpecies} from '../interfaces/pokemonSpecies';
import PokemonStatistics from '../components/PokemonStatistics';

interface Props extends StackScreenProps<PokedexStackParams, 'PokemonDetailScreen'> {}

const PokemonDetailScreen = ({route}: Props) => {
  const {id, name, picture} = route.params.pokemon;
  const {pokemon} = usePokemon(id);
  const {pokemonSpecies} = usePokemonSpecies(id);

  return (
    <View style={styles.detailContainer}>
      <Image source={{uri: picture}} style={styles.pokemonPicture} />
      <View style={styles.descriptionContainer}>
        <Text>#{pokemon.pokemonNumberText}</Text>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text>Height: {pokemon.height} m</Text>
        <Text>Weight: {pokemon.weight} kg</Text>
      </View>

      <View>
        <Text>{pokemonSpecies.description}</Text>
      </View>

      <PokemonStatistics />
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {},
  descriptionContainer: {},
  pokemonPicture: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    textTransform: 'capitalize',
  },
});

export default PokemonDetailScreen;
