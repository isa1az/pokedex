import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Image, StyleSheet } from 'react-native';

export type PokedexStackParams = {
  HomeScreen: undefined,
};

const Stack = createStackNavigator<PokedexStackParams>();

export const PokedexStack = () => {
  const getHeaderOptions = () => {
    return {
      headerTitle: () => <Image source={require('../../assets/pokemon-logo.png')} style={styles.headerImage} />,
      headerStyle: styles.headerBackground,
    };
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={getHeaderOptions} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 125,
    height: 46,
    alignSelf: 'center',
  },
  headerBackground: {
    backgroundColor: '#CC0000',
  }
});
