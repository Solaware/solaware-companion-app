import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

var image = require('../../images/HomePage.png');

import {styles} from '../../OnboardingStyles.js';
export default function PreSetupInformationPage({navigation}) {
    return (
        <SafeAreaView style = {{flex:1}}> 
          <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
            <View style = {{flex: 1, marginTop: 150}}> 
                <Text style = {{fontFamily: 'Tinos Bold', fontSize: 30, color: '#08325D', marginLeft: 42, marginRight: 60, marginTop: 0, alignItems: 'center',}}>
                    In order to get personalized results, we'll need you to answer some questions about yourself. 
                </Text>
            </View>
            <View style = {{flex: 1, marginTop: 0}}> 
                <Text style = {{fontFamily: 'Open Sans', fontSize: 18, color: '#258DFB', marginLeft: 42, marginRight: 60, marginTop: 0, alignItems: 'center',}}>
                    Please select the option which best describes your phenotype.
                </Text>
            </View>

            <View style = {{flex: 2, marginTop: 0}}>
                <Text> 
                    Questionnaire
                </Text>
            </View>

            <View style = {{flex: 1, alignItems: 'center', bottom: 110, position: 'absolute', left: 16, right: 16}}> 
                <TouchableOpacity style = {styles.ButtonStyle}
                onPress = {() => navigation.navigate('Home')}> 
                <Text style = {styles.ButtonText}> Next </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, alignItems: 'center', bottom: 50, position: 'absolute', marginLeft: 32}}> 
                <TouchableOpacity style = {styles.ButtonStyle}
                onPress = {() => navigation.goBack()}> 
                <Text style = {styles.ButtonText}> Go Back </Text>
                </TouchableOpacity>
            </View>

          </ImageBackground>
    </SafeAreaView>
    );
  }