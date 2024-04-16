import React from 'react'
import 'react-native-gesture-handler';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from './HomePage.js';
import Tabs from '../Tabs.js';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Tabs />
  );
}