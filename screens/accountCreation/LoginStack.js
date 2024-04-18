import React from 'react'
import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from './LoginPage.js';
import Home from '../Tabs.js';

const Stack = createNativeStackNavigator();

export default function CreateAccountStack() {
  return ( 
    <Stack.Navigator> 
        <Stack.Screen name= "Login" component = {LoginPage} options = {{headerShown: false}}/> 
        <Stack.Screen name= "Home" component = {Home} options = {{headerShown: false}}/> 
    </Stack.Navigator>  
  )
}