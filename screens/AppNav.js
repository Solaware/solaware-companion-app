import React, {useContext} from 'react'

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import {View, ActivityIndicator} from 'react-native';

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import AuthorizingStack from './accountCreation/AuthorizingStack';
import Tabs from './Tabs';
import { auth } from '../config';
import useAuth from './AuthContext'

export default function AppNav() {
  // const {isLoading, userToken} = useContext(AuthContext);
  const {user} = useAuth(); 

  // if (isLoading) {
  //   <View style= {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
  //     <ActivityIndicator size = {'large'} />
  //   </View>
  // }

  return (
    <NavigationContainer>
        {user !== null ? <Tabs /> : <AuthorizingStack/>} 
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
