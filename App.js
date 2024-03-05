import React from 'react'
import Tabs from './screens/Tabs'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}