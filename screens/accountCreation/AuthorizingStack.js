import React from 'react'
import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnboardingPage from './OnboardingPage.js';
import LoginPage from './LoginPage.js';
import CreateAccountStack from './CreateAccountPage.js';

const Stack = createNativeStackNavigator();

export default function AuthorizingStack() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen component= {OnboardingPage} name = "Onboarding" options = {{headerShown: false}}/>
      <Stack.Screen component= {LoginPage} name = "Login" options = {{headerShown: false}}/>
      <Stack.Screen component= {CreateAccountStack} name = "CreateAccount" options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
}