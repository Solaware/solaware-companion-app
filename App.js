import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

// Setting up notification handling behaviors
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [timerActive, setTimerActive] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10); // SET TIMER HERE

  // Function to request permission and retrieve the push token
  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push token:", token);
  }

  // Function to start the timer and trigger notification after specified duration
  const handleTimerStart = () => {
    setTimerActive(true);
    setTimeout(() => {
      sendNotification();
      setTimerActive(false);
    }, timerDuration * 1000); // Convert seconds to milliseconds
  };

  // Function to trigger an immediate notification
  async function sendNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello!",
        body: 'This is a test notification',
      },
      trigger: null, // triggers immediately
    });
  }

  // Main component rendering buttons to register and send notifications
  return (
    <View style={styles.container}>
      <Button
        title="Register for Notifications"
        onPress={registerForPushNotificationsAsync}
      />
      <Button
        title={timerActive ? 'Timer Running...' : `Start Timer (${timerDuration} seconds)`}
        onPress={handleTimerStart}
        disabled={timerActive}
      />
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
