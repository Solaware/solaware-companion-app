import React from 'react'

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNav from './screens/AppNav';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Tinos Regular': require('./assets/fonts/Tinos/Tinos-Regular.ttf'),
    'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-Semibold.ttf'),
    'Tinos Bold': require('./assets/fonts/Tinos/Tinos-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
      <AppNav/>
  );
}
