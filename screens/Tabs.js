import React, {useState, useEffect} from 'react'

import HomePage from './home/HomePage'
import DevicesPage from './home/DevicesPage'
import SettingsStack from './settings/SettingsStack'
import useAuth from './AuthContext'

import { doc, getDoc } from 'firebase/firestore';
import { database } from '../config.js'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View , TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native'

import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}) => ( //for center tab button
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
                backgroundColor: '#258DFB',
                opacity: 1,
                ... styles.shadow,
            }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    //fetch user data
    const { user, init } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (init) {
        const fetchData = async () => {
            try {
                const userRef = doc(database, 'UserData', user.uid);
                const userDoc = await getDoc(userRef);
                if(userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserData(userData);
                }
                setLoading(false);
            } catch (error) {
                console.log("error fetching data", error );
            }
        };
  
        fetchData();
        console.log(userData);
    }}, [user, init]);

    if (loading) {
        return <ActivityIndicator size = "large" color="#FADA6C" style = {{flex: 1}}/>
    }
  
    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                headerShown: false, 
                tabBarHideOnKeyboard: true,

                tabBarStyle : {
                    position: 'absolute',
                    bottom: 25, 
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'white',
                    height: 80,
                    borderRadius: 20,
                    ... styles.shadow,
                },
                
            }}
        > 
            <Tab.Screen
                name = {'Home'} component = {HomePage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name="home" size={36} color={focused ? 'black' : '#258DFB'} style={{ marginTop: 15 }} />
                    )
                }}
            />
            <Tab.Screen
                name = {'Devices'} component = {DevicesPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome6 name="add" size={30} color={focused ? 'black' : 'white'} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name = {'Settings'} initialParams={{ userData }} component = {SettingsStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="account" size={40} color={focused ? 'black' : '#258DFB'} style={{ marginTop: 15}} />
                    )
                }}
            />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .1,
        shadowRadius: 3.5,
        elevation: 5
    },
});

export default Tabs;