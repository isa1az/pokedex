import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';
import {Pokemon} from '../interfaces/pokemonResponse';

export type PokedexStackParams = {
  HomeScreen: undefined;
  PokemonDetailScreen: {pokemon: Pokemon};
};

const Stack = createStackNavigator<PokedexStackParams>();

export const PokedexStack = () => {
  const getHeaderOptions = () => {
    return {
      headerTitle: () => (
        <Image
          source={require('../../assets/pokemon-logo.png')}
          style={styles.headerImage}
        />
      ),
      headerStyle: styles.headerBackground,
      headerBackTitle: 'Back',
      headerBackTitleStyle: styles.headerBackTitle,
      headerTintColor: 'white',
    };
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={getHeaderOptions}
      />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
        options={getHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 93.75,
    height: 34.5,
    alignSelf: 'center',
  },
  headerBackground: {
    backgroundColor: '#CC0000',
  },
  headerBackTitle: {
    color: 'white',
  },
});
