import React from 'react'
import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SettingsPage from '../home/SettingsPage.js';
import About from './AboutPage.js';
import AcctSettings from './AcctSettingsPage.js';
import HealthInfo from './HealthInfoPage.js';
import NotifsManager from './NotifsManagerPage.js';
import Sunscreens from './SunscreenPage.js';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return ( 
    <Stack.Navigator initialRouteName="SettingsPage"> 
        <Stack.Screen name= "SettingsPage" component = {SettingsPage} options = {{headerShown: false}}/> 
        <Stack.Screen name= "About" component = {About} options = {{headerShown: false}}/> 
        <Stack.Screen name= "AcctSettings" component = {AcctSettings} options = {{headerShown: false}}/>
        <Stack.Screen name= "HealthInfo" component = {HealthInfo} options = {{headerShown: false}}/> 
        <Stack.Screen name= "NotifsManager" component = {NotifsManager} options = {{headerShown: false}}/> 
        <Stack.Screen name= "Sunscreens" component = {Sunscreens} options = {{headerShown: false}}/>  
    </Stack.Navigator>  
  )
}