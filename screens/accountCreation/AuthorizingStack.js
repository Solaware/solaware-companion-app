import React from 'react'
import 'react-native-gesture-handler';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnboardingPage from './OnboardingPage.js';
import LoginPage from './LoginPage.js';
import CreateAccountPage from './CreateAccountPage.js';

const Stack = createNativeStackNavigator();

export default function AuthorizingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component= {OnboardingPage} name = "Onboarding" options = {{headerShown: false}}/>
      <Stack.Screen component= {LoginPage} name = "Login" options = {{headerShown: false}}/>
      <Stack.Screen component= {CreateAccountPage} name = "CreateAccount" options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
}