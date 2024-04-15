import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {styles} from '../../OnboardingStyles.js';

var image3 = require('../../images/LoginPage.png');


export default OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex:1}}>
        <ImageBackground source={image3} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
        <Text style = {styles.TitleText}> 
          Take control of your UV exposure. 
        </Text>
        <View style = {{alignItems: 'center', bottom: 30, position: 'absolute', left: 46}}> 
          <TouchableOpacity style = {styles.ButtonStyle}
            onPress = {() => navigation.navigate('CreateAccount')}> 
            <Text style = {styles.ButtonText}>
              Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.ButtonStyle}
          onPress = {() => navigation.navigate('Login')}>
            <Text style = {styles.ButtonText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
        </SafeAreaView>
      )
  
}