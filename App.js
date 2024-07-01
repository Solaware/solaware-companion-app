import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

//font imports
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

//page imports 
//import AuthorizingStack from './screens/accountCreation/AuthorizingStack';
import Tabs from './screens/Tabs';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';
//import useAuth from './screens/AuthContext';

export default function App() {
  //set up authorizing with firebase
  //const {user} = useAuth(); 

  //load fonts
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
      <View style={styles.container}>
      <Text style={styles.blackText}>Hi</Text>
    </View>
      {/* {user !== null ? <Tabs /> : <AuthorizingStack/>}  */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackText: {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: 20,
  },
});

