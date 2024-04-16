import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import {styles} from '../../OnboardingStyles.js';

var image2 = require('../../images/LoginPage.png');

import HomePage from '../home/HomePage.js';
import OnboardingPage from './OnboardingPage.js';
import Tabs from '../Tabs.js';

export default function LoginPage({navigation: {goBack}}) {
  return (
    <SafeAreaView style = {{flex:1}}> 
      <ImageBackground source={image2} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
        <View style = {{flex: 1, justifyContent: 'flex-start', marginTop: 225}}> 
          <Text style = {styles.SubpageTitleText}>Welcome Back. </Text>
        </View>
        <View style = {{flex: 4, justifyContent: 'flex-start', marginTop: 0}}> 
          <View style = {{marginHorizontal: 32, backgroundColor: '#08325D',opacity: .9,
          padding: 6, borderRadius: 10, height: 170,}}> 
            <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 25, 
            marginHorizontal: 20, marginTop: 30, borderColor: 'white'}}> 
              <TextInput placeholder='Email' keyboardType = "email-address" 
              style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white',}}/> 
            </View>
            <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 25, 
            marginHorizontal: 20, borderColor: 'white'}}> 
              <TextInput placeholder='Password' keyboardType = "default"
              style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white',}}/> 
            </View>
          </View> 

          <View style = {{flex: 1, alignItems: 'center', bottom: 315, position: 'absolute', left: 16, right: 16}}> 
            <TouchableOpacity style = {styles.ButtonStyle}
              onPress = {() => navigation.jumpTo('Home')}> 
              <Text style = {styles.ButtonText}> Sign In </Text>
            </TouchableOpacity>
          </View>
          <View style = {{flex: 1, alignItems: 'center', bottom: 255, position: 'absolute', marginLeft: 32}}> 
            <TouchableOpacity style = {styles.ButtonStyle}
              onPress = {() => goBack}> 
              <Text style = {styles.ButtonText}> Go Back </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}