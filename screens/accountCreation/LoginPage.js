import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import {styles} from '../../OnboardingStyles.js';
var image2 = require('../../images/LoginPage.png');


export default function LoginPage() {
  return (
    <SafeAreaView style = {{flex:1}}> 
      <ImageBackground source={image2} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
        <Text style = {styles.TitleText}> Welcome Back. </Text>
        <View> 
          <View style = {{flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25}}> 
            <TextInput placeholder='Email' keyboardType = "email-address" style = {{flex: 1, paddingVertical: 0}}/> 
          </View>
          <View style = {{flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25}}> 
            <TextInput placeholder='Password' keyboardType = "email-address" style = {{flex: 1, paddingVertical: 0}}/> 
            <TouchableOpacity onPress = {() => {}}>
              <Text> Forgot? </Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style = {{alignItems: 'center', bottom: 30, position: 'absolute', left: 46}}> 
          <TouchableOpacity style = {styles.ButtonStyle}
            onPress = {() => navigation.navigate('CreateAccount')}> 
            <Text style = {styles.ButtonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}