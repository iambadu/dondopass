import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
