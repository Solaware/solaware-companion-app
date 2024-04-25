import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../config.js'

var image = require('../../images/HomePage.png');

import {styles} from '../../OnboardingStyles.js';

export default function PreSetupInformationPage({navigation, route}) {
    const { userName, email, password } = route.params;

    const handleSubmit = async () => {
        if(userName && email && password) { //add questionnaire param as well
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (e) {
                console.log('handleSubmit error: ', e.message);
            }
        }
    }

    const fitzpatrickOptions = [
        {id: '1', estimatedMED: '25', type: 'I',
            phenotype: 'Very pale skin, blue or green eyes, freckles, Northern European descent. You easily burn and never tan.'},
        {id: '2', estimatedMED: '35', type: 'II',
            phenotype: 'Pale skin, any eye color, red, blonde, or brown hair, European descent. You easily burn and very rarely tan.'},
        {id: '3', estimatedMED: '45', type: 'III',
            phenotype: 'Pale or olive skin, brown eyes, dark hair, Southern or Central European descent. You burn moderately and sometimes tan.'},
        {id: '4', estimatedMED: '55', type: 'IV',
            phenotype: 'Olive or lightly tanned skin, dark hair, dark eyes, Mediterranean, Asian, or Latino descent. You burn minimally and easily tan.'},
        {id: '5', estimatedMED: '85', type: 'V',
            phenotype: 'Brown skin, dark eyes, dark hair, South Asian, Native American, Latino, or African descent. You rarely burn and easily and substantially tan.'},
        {id: '6', estimatedMED: '130', type: 'VI',
            phenotype: 'Dark skin, dark hair, dark eyes, African or Aboriginal descent. You almost never burn and very easily tan.'},
    ];

    const renderListItem = ({item}) => (
        <TouchableOpacity style = {styles.ListItems}> 
            <Text style = {{fontFamily: 'Tinos Bold', fontSize: 40, color: '#08325D', fontWeight: 700, marginRight: 30, marginLeft: 15}}> 
                {item.type} 
            </Text>
            <Text style = {[styles.ListText , {maxWidth: 255}]}> {item.phenotype} </Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style = {{flex:1, flexDirection: 'column'}}> 
          <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
            <View style = {{flex: 1, marginTop: 160}}> 
                <Text style = {{fontFamily: 'Tinos Bold', fontSize: 30, color: '#08325D', marginLeft: 42, marginRight: 60, marginTop: 0, alignItems: 'center',}}>
                Please select the option which best describes your phenotype. This will help us calculate your personalized results. 
                </Text>
            </View>

            <View style = {{flex: 1, alignItems: 'center'}}>
                <FlatList data = {fitzpatrickOptions} renderItem = {renderListItem} keyExtractor={item => item.id} />
            </View>

            <View style = {{flex: 1, alignItems: 'center', bottom: 80, position: 'absolute', left: 16, right: 16}}> 
                <TouchableOpacity style = {styles.ButtonStyle}
                onPress = {() => handleSubmit()}> 
                <Text style = {styles.ButtonText}> Next </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, alignItems: 'center', bottom: 20, position: 'absolute', marginLeft: 32}}> 
                <TouchableOpacity style = {styles.ButtonStyle}
                onPress = {() => navigation.goBack()}> 
                <Text style = {styles.ButtonText}> Go Back </Text>
                </TouchableOpacity>
            </View>

          </ImageBackground>
    </SafeAreaView>
    );
  }