import React, {useContext} from 'react'

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import {View, ActivityIndicator} from 'react-native';

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import AuthorizingStack from './screens/accountCreation/AuthorizingStack';
import Tabs from './screens/Tabs';
import {AuthContext, AuthProvider} from './screens/AuthContext';
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
      <AuthProvider> 
        <AppNav/>
      </AuthProvider>
  );
}
