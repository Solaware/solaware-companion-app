import React from 'react'

import HomePage from './home/HomePage'
import DevicesPage from './home/DevicesPage'
import SettingsPage from './home/SettingsPage'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const CustomTabButton = ({children, onPress}) => (
    <TouchableOpacity
        onPress = {onPress}
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}>
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                backgroundColor: 'blue'
            }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    
    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarStyle : {
                    position: 'absolute',
                    bottom: 25, 
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15, 
                    height: 70,
                    ... styles.shadow
                },
                headerShown: false, 
                tabBarHideOnKeyboard: true
            }}
        > 
            <Tab.Screen
                name = {'Home'} component = {HomePage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name="home" size={24} color={focused ? 'black' : 'blue'} />
                    )
                }}
            />
            <Tab.Screen
                name = {'Devices'} component = {DevicesPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome6 name="add" size={24} color={focused ? 'black' : 'pink'} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name = {'Settings'} component = {SettingsPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="account" size={24} color={focused ? 'black' : 'blue'} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;