import React, {useState} from 'react'
import 'react-native-gesture-handler';

import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../config.js';

import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native';

import {styles} from '../../OnboardingStyles.js';
import { Entypo } from '@expo/vector-icons';

var image2 = require('../../images/LoginPage.png');


export default function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
      if(email && password) {
          try {
              await signInWithEmailAndPassword(auth, email, password)
          } catch (e) {
              console.log('handleSubmit error: ', e.message);
          }
      } else {
        Alert.alert(
          'Alert',
          'Please fill out all fields',
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
      <ImageBackground source={image2} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>
        <View style = {{flex: 1, justifyContent: 'flex-start', marginTop: 225}}> 
          <Text style = {styles.SubpageTitleText}>Welcome Back! </Text>
        </View>
        <View style = {{flex: 4, justifyContent: 'flex-start', marginTop: 0}}> 
          <View style = {{marginHorizontal: 32, backgroundColor: '#08325D',opacity: .9,
          padding: 6, borderRadius: 10, height: 180,}}> 
            <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 25, 
            marginHorizontal: 20, marginTop: 30, borderColor: 'white'}}> 
              <Entypo name="email" size={18} color="white" style={{ marginTop: 5, marginRight: 10, marginBottom: 5}} />
              <TextInput value = {email} onChangeText = {value => setEmail(value)}
              placeholder='Email' placeholderTextColor="white" keyboardType = "email-address" autoCapitalize="none"
              style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white', fontSize: 18}}/> 
            </View>
            <View style = {{flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 8, marginBottom: 25, 
            marginHorizontal: 20, borderColor: 'white'}}> 
              <Entypo name="lock" size={18} color="white" style={{ marginTop: 10, marginRight: 10, marginBottom: 5}} />
              <TextInput value = {password} onChangeText = {value => setPassword(value)} secureTextEntry={true} 
              placeholder='Password' placeholderTextColor="white" keyboardType = "default" autoCapitalize="none"
              style = {{flex: 1, paddingVertical: 0, fontFamily: 'Open Sans', color: 'white',fontSize: 18}}/> 
            </View>
          </View> 

          <View style = {{flex: 1, alignItems: 'center', bottom: 305, position: 'absolute', left: 16, right: 16}}> 
            <TouchableOpacity style = {styles.ButtonStyle}
              onPress = {handleSubmit}> 
              <Text style = {styles.ButtonText}> Sign In </Text>
            </TouchableOpacity>
          </View>
          <View style = {{flex: 1, alignItems: 'center', bottom: 245, position: 'absolute', marginLeft: 32}}> 
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