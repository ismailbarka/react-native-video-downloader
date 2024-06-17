
import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/appNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  let a = 5;
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}

export default App;
