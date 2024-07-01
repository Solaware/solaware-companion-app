import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

var backIcon = require('../../assets/icons/back.png'); 
var image = require('../../assets/images/HomePage.png');

export default function HealthInfo({navigation, route}) {
  const { userData } = route.params; 

  const handlePress = () => {
    Alert.alert(
      'Alert',
      'This feature is coming soon!',
      [
          {
              text: 'OK',
          },
      ],
      {cancelable: false}
  );
  }
   
    return (
      <SafeAreaView> 
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center'}}>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 110, marginLeft: 20}}> 
          <TouchableOpacity onPress = {() => navigation.goBack()} style={styles.iconButton}>
            <Image source={backIcon} style={{width: 42, height: 42}} />
          </TouchableOpacity>
          <Text style={{fontSize: 30, fontFamily: 'Open Sans', marginLeft: 5, fontWeight: 700, color: '#08325D',}}>
            Health Info
          </Text>
        </View>

        <View style={{flex: 5, alignItems: 'center'}}>

        <View style = {{flexDirection: 'row', flex: 1}}> 
            <View style={styles.container1}> 
              <Text style={styles.text1} > Fitzpatrick Type </Text>
              <Text style={styles.text2}>{userData.fitzpatrickType}</Text>
            </View>
            <View style={styles.container1}> 
              <Text style={styles.text1}> Your MED </Text>
              <Text style={styles.text2}>{userData.estimatedMED}</Text>
            </View>
          </View>

        <View style = {{flexDirection: 'column', flex: 4}}>
          <TouchableOpacity style={styles.container2} onPress = {handlePress}> 
              <Text style={styles.text3} > Your medications </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container2} onPress = {handlePress}> 
              <Text style={styles.text3} > Your photosensitive conditions </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container2} onPress = {handlePress}> 
              <Text style={styles.text3} > Send data to your doctor </Text>
          </TouchableOpacity>
        </View>

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
    container1: {
      backgroundColor: 'white',
      borderColor: '#FADA6C',
      borderWidth: 2,
      padding: 6,
      borderRadius: 10,
      width: 170,
      height: 110,
      marginBottom: 6,
      alignItems: 'center',
      
      shadowColor: '#000000',
      shadowOpacity: .15,
      shadowRadius: 8,
      marginHorizontal: 10,

    },
    container2: {
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
    text1: {
      fontFamily: 'Open Sans',
      fontSize: 16,
      padding: 10,
      color: '#08325D',
      textAlign: 'center'
    },
    text2: {
      fontFamily: 'Open Sans',
      fontSize: 40,
      color: '#08325D',
      textAlign: 'center',
    },
    text3: {
      fontFamily: 'Open Sans',
      fontSize: 18,
      padding: 10,
      textAlign: 'center',
      color: '#08325D'
    }
  });