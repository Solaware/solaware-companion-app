import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

//font imports
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

//page imports 
import AuthorizingStack from './screens/accountCreation/AuthorizingStack';
import Tabs from './screens/Tabs';
import useAuth from './screens/AuthContext';

export default function App() {
  //load fonts
  let [fontsLoaded] = useFonts({
    'Tinos Regular': require('./assets/fonts/Tinos/Tinos-Regular.ttf'),
    'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-Semibold.ttf'),
    'Tinos Bold': require('./assets/fonts/Tinos/Tinos-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  //set up authorizing with firebase
  const {user} = useAuth(); 

  return (
    <NavigationContainer>
      {user !== null ? <Tabs /> : <AuthorizingStack/>} 
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
