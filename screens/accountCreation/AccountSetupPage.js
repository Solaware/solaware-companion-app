import React, {useState} from 'react'
import 'react-native-gesture-handler';

import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native';


var image = require('../../images/LoginPage.png');

import {styles} from '../../OnboardingStyles.js';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function AccountSetupPage({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setName] = useState('');

    const handleSubmit = async () => {
        if(userName && email && password) {
          navigation.navigate('PreSetupInformation', { userName, email, password });
        } else if (userName && email && !password) {
            Alert.alert(
                'Alert',
                'Password should have at least 8 characters',
                [
                    {
                        text: 'OK',
                    },
                ],
                {cancelable: false}
            );
        } else {
            Alert.alert(
                'Alert',
                'Please fill in all fields',
                [
                    {
                        text: 'OK',
                    },
                ],
                {cancelable: false}
            );
        }
    }

    return (
        <SafeAreaView style = {{flex:1}}> 
          <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
            <View style = {{flex: 1, justifyContent: 'flex-start', marginTop: 225}}> 
                <Text style = {styles.SubpageTitleText}>Welcome to Solaware! </Text>
            </View>
            <View style = {{flex: 4, justifyContent: 'flex-start', marginTop: 0}}> 
            <View style = {{marginHorizontal: 32, backgroundColor: '#08325D',opacity: .9,padding: 6, borderRadius: 10, height: 223,}}> 
                <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 0, 
                marginHorizontal: 20, marginTop: 18, borderColor: 'white'}}> 
                    <MaterialCommunityIcons name="account" size={22} color="white" style={{ marginTop: 5, marginRight: 10, marginBottom: 5}} />
                    <TextInput value = {userName} onChangeText={value => setName(value)}
                    placeholder='First Name' placeholderTextColor="white" keyboardType = "default" autoCapitalize="none"
                    style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white',fontSize: 18}}/> 
                </View>

                <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 19, 
                marginHorizontal: 20, marginTop: 23, borderColor: 'white'}}> 
                    <Entypo name="email" size={18} color="white" style={{ marginTop: 5, marginRight: 10, marginBottom: 5}} />
                    <TextInput value = {email} onChangeText={value => setEmail(value)}
                    placeholder='Email' placeholderTextColor="white" keyboardType = "email-address" autoCapitalize="none"
                    style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white', fontSize: 18}}/> 
                </View>

                <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 25, 
                marginHorizontal: 20, borderColor: 'white'}}> 
                    <Entypo name="lock" size={18} color="white" style={{ marginTop: 10, marginRight: 10, marginBottom: 5}} />
                    <TextInput value = {password} onChangeText={value => setPassword(value)} secureTextEntry={true} 
                    placeholder='Password' placeholderTextColor="white" keyboardType = "default" autoCapitalize="none"
                    style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white',fontSize: 18}}/> 
                </View>

            </View> 

            <View style = {{flex: 1, alignItems: 'center', bottom: 266, position: 'absolute', left: 16, right: 16}}> 
                <TouchableOpacity style = {styles.ButtonStyle} onPress = {() => handleSubmit()} >
                {/* onPress = {() => navigation.navigate('PreSetupInformation')}>  */}
                <Text style = {styles.ButtonText}> Create Account </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, alignItems: 'center', bottom: 206, position: 'absolute', marginLeft: 32}}> 
                <TouchableOpacity style = {styles.ButtonStyle}
                onPress = {() => navigation.goBack()}> 
                <Text style = {styles.ButtonText}> Go Back </Text>
                </TouchableOpacity>
            </View>
            </View>
          </ImageBackground>
    </SafeAreaView>
  );
  }