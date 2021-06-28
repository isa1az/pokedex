import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {PokedexStackParams} from '../navigation/PokedexStack';
import {usePokemon} from '../hooks/usePokemon';
import {usePokemonSpecies} from '../hooks/usePokemonSpecies';
import PokemonStatistics from '../components/PokemonStatistics';

interface Props
  extends StackScreenProps<PokedexStackParams, 'PokemonDetailScreen'> {}

const PokemonDetailScreen = ({route}: Props) => {
  const {id, name, picture} = route.params.pokemon;
  const {pokemon, isLoading} = usePokemon(id);
  const {pokemonSpecies} = usePokemonSpecies(id);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image source={{uri: picture}} style={styles.pokemonPicture} />
        <View style={styles.descriptionContainer}>
          <Text>#{pokemon.pokemonNumberText}</Text>
          <Text style={styles.pokemonName}>{name}</Text>
          <Text>
            <Text style={styles.boldText}>Height:</Text> {pokemon.height} m
          </Text>
          <Text>
            <Text style={styles.boldText}>Weight:</Text> {pokemon.weight} kg
          </Text>
        </View>
      </View>

      <Text style={styles.descriptionText}>{pokemonSpecies.description}</Text>

      <PokemonStatistics isLoading={isLoading} pokemon={pokemon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  detailContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  descriptionContainer: {
    flex: 7,
  },
  pokemonPicture: {
    width: 100,
    height: 100,
    flex: 5,
  },
  pokemonName: {
    textTransform: 'capitalize',
    fontSize: 30,
    fontWeight: 'bold',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default PokemonDetailScreen;
