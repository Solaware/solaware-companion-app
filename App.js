import React, {useContext} from 'react'

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import AuthorizingStack from './screens/accountCreation/AuthorizingStack';
import Tabs from './screens/Tabs';
import {AuthContext, AuthProvider} from './screens/AuthContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Tinos Regular': require('./assets/fonts/Tinos/Tinos-Regular.ttf'),
    'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
    'Tinos Bold': require('./assets/fonts/Tinos/Tinos-Bold.ttf'),
  })

  // const {isLoading, userToken} = useContext(AuthContext);

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (

      <AuthProvider> 
        <NavigationContainer>
          <AuthorizingStack /> 
        </NavigationContainer>
      </AuthProvider>
  );
}
