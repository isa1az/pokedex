import React from 'react';
import { PokedexStack } from './src/navigation/PokedexStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <PokedexStack />
    </NavigationContainer>
  );
}
