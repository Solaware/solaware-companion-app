import React from 'react'

import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, Image} from 'react-native';

import About from '../settings/AboutPage'
import AcctSettings from '../settings/AcctSettingsPage'
import HealthInfo from '../settings/HealthInfoPage'
import NotifsManager from '../settings/NotifsManagerPage'
import Sunscreen from '../settings/SunscreenPage'

import {styles} from '../../SettingsStyles.js'

var image = require('../../images/HomePage.png');
var icon = require('../../images/next_icon.png');
var image2 = require('../../images/LoginPage.png'); //temporary


export default function SettingsPage({navigation}) {

    const settingsListItems = [
        {id: '1', title: 'Your Sunscreens', link: 'Sunscreens'},
        {id: '2', title: 'Health Info', link: 'HealthInfo'},
        {id: '3', title: 'Account Settings', link: 'AcctSettings'},
        {id: '4', title: 'Notifications', link: 'NotifsManager'},
        {id: '5', title: 'About', link: 'About'},
    ];

    const renderListItem = ({item}) => (
        <TouchableOpacity onPress = {() => navigation.navigate(item.link)} style = {styles.ListItems}> 
            <Text style = {styles.ListText}> {item.title} </Text>
            <Image source = {icon} style = {{height: 28, width: 28, marginRight: 10, marginTop: 7}}/>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView>
            <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'flex-start',}}> 

            <View style = {{marginBottom: 20}}> 
                <Text style= {styles.SettingsTitle}>User's Name </Text>
            </View>

            <View style = {{alignItems: 'center', marginBottom: 30}}>
                <Image source = {image2} style = {styles.Image}/>
            </View>

            <View style = {{flex: 2, alignItems: 'center'}}> 
                <FlatList data = {settingsListItems} renderItem = {renderListItem} keyExtractor={item => item.id} />
            </View>

            </ImageBackground>
        </SafeAreaView>
    );
}