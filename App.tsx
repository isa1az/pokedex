import React from 'react';
import {PokedexStack} from './src/navigation/PokedexStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PokedexStack />
      </NavigationContainer>
    </Provider>
  );
}
