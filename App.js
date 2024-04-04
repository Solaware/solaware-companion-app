import React from 'react'
import Tabs from './screens/Tabs'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

var image = require('./images/LoginPage.png');
const Stack = createNativeStackNavigator();

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
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen component= {Main} name = "Main" />
      //     <Stack.Screen component= {Main} name = "Home" />
      //   </Stack.Navigator>
      //  {/* <Tabs /> */}
      // </NavigationContainer>
      <SafeAreaView style = {{flex:1}}>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
        <Text style = {styles.TitleText}> 
          Take control of your UV exposure. 
        </Text>
        <View style = {{alignItems: 'center', bottom: 30, position: 'absolute', left: 46}}> 
          <TouchableOpacity style = {styles.ButtonStyle}> 
            <Text style = {styles.ButtonText}>
              Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.ButtonStyle}>
            <Text style = {styles.ButtonText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    </SafeAreaView>

  );
}

// const Main = ({navigation}) => {
//   return (
//     <SafeAreaView style={{backgroundColor: 'transparent'}}>
//       <ImageBackground source={image} style={{flex: 1, width: 400, height: 100, position:"absolute", opacity: 1, justifyContent: 'center',}}>
//       <Text> 
//         Take control of your UV exposure.
//       </Text>
//       <View> 
//         <TouchableOpacity> 
//           <Text>
//             Create account.
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text>
//             Sign in.
//           </Text>
//         </TouchableOpacity>
//       </View>
//       </ImageBackground>
//     </SafeAreaView>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  TitleText: {
    fontFamily: 'Tinos Bold', 
    fontSize: 50,
    color: '#08325D',
    marginLeft: 42,
    marginRight: 82,
    marginTop: 30,
  },
  ButtonText: {
    fontFamily: 'Open Sans', 
    fontSize: 20,
    color: 'white',
  },
  ButtonStyle: {
    backgroundColor: '#08325D',
    opacity: .9,
    padding: 6,
    borderRadius: 10,
    display: 'flex',
    width: 330,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
});
