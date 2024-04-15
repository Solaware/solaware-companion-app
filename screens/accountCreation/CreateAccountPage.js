import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountSetupPage from './AccountSetupPage.js';
import PreSetupInformationPage from './PreSetupInformationPage.js';
import MEDInfoPage from './MEDInfoPage.js';

const Stack = createNativeStackNavigator();

export default function CreateAccountPage() {
  return ( 
    <Stack.Navigator> 
        <Stack.Screen name= "AccountSetup" component = {AccountSetupPage} options = {{headerShown: false}}/> 
        <Stack.Screen name= "PreSetupInformation" component = {PreSetupInformationPage} options = {{headerShown: false}}/> 
        <Stack.Screen name= "MEDInfo" component = {MEDInfoPage} options = {{headerShown: false}}/> 
    </Stack.Navigator>  
  )
}