import React from 'react'
import 'react-native-gesture-handler';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function AuthorizingStack() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}