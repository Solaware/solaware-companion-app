import React from 'react'
import Tabs from './screens/Tabs'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import AuthorizingStack from './screens/accountCreation/AuthorizingStack';

var image = require('./images/LoginPage.png');

export default function App() {
  let [fontsLoaded] = useFonts({
    'Tinos Regular': require('./assets/fonts/Tinos/Tinos-Regular.ttf'),
    'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
    'Tinos Bold': require('./assets/fonts/Tinos/Tinos-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
      <NavigationContainer>
        <AuthorizingStack /> 
       {/* <Tabs /> */}
      </NavigationContainer>
      
  );
}
