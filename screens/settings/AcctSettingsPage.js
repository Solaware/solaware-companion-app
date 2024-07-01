import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config';

var backIcon = require('../../assets/icons/back.png'); 
var image = require('../../assets/images/HomePage.png');

export default function AcctSettingsPage({navigation}) {

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleDelete = () => {
    const user = auth.currentUser;

    user.delete()
      .then(() => {
        Alert.alert('Success', 'Your account has been deleted');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <SafeAreaView> 
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center'}}>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 110, marginLeft: 20}}> 
        <TouchableOpacity onPress = {() => navigation.goBack()} style={styles.iconButton}>
          <Image source={backIcon} style={{width: 42, height: 42}} />
        </TouchableOpacity>
        <Text style={{fontSize: 30, fontFamily: 'Open Sans', marginLeft: 5, fontWeight: 700, color: '#08325D',}}>
          Account Settings
        </Text>
      </View>

      <View style = {{flexDirection: 'column', flex: 4, alignItems: 'center'}}>

        <TouchableOpacity style={styles.container} onPress = {handleLogout}> 
            <Text style={styles.text} > Sign out </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress = {handleDelete}> 
            <Text style={[styles.text, {color: '#FA6C6C'}]} > Delete Account </Text>
        </TouchableOpacity>

      </View>

      </ImageBackground>
    </SafeAreaView>
  );
  }

  const styles = StyleSheet.create({
    iconButton: {
      width: 50, 
      height: 50, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },  
    container: {
      backgroundColor: 'white',
      padding: 6,
      borderRadius: 10,
      display: 'flex',
      width: 360,
      height: 60,
      marginBottom: 6,
      marginTop: 6,
      justifyContent: 'space-between',
      alignItems: 'center',
      
      shadowColor: '#000000',
      shadowOpacity: .15,
      shadowRadius: 8,
      marginHorizontal: 10,

    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: 18,
      padding: 10,
      textAlign: 'center',
      color: '#08325D'
    }
  });