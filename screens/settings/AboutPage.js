import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import solawareData from './AboutPageInfo.json';

// Placeholder for navigation icons
//const backIcon = require('../../assets/back.png'); // Replace with your actual back icon
//const separatorImage = require('../../assets/line.png');

var image = require('../../images/HomePage.png');

const AboutPage = () => {
  // Placeholder functions for handling button presses
  const handleBackPress = () => console.log('Back pressed');

  const aboutUsText = solawareData.AboutUs;
  const medBasisText = solawareData.DailyUVDosageAlgorithm.MED_Basis;
  const DataCollectionText = solawareData.DailyUVDosageAlgorithm.DataCollection;
  const SunscreenUsageText = solawareData.DailyUVDosageAlgorithm.SunscreenUsage;
  const CumulativeExposureAlgorithmText = solawareData.CumulativeExposureAlgorithm;
  const DeviceOperationText = solawareData.DeviceOperation;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center',}}>

        <View style={styles.container}> 
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
              {/* <Image source={backIcon} style={styles.icon} /> */}
            </TouchableOpacity>
            <Text style={{fontSize: 30, fontFamily: 'Tinos Bold', marginLeft: 16, fontWeight: 700,}}>
              About
            </Text>
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={styles.introContainer}>
              <Text style={styles.introText}>
                Interested in learning more about our product?
              </Text>
              <Text style={styles.subText}>
                Scroll to find out more!
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>About Solaware</Text>
              <Text style={styles.bodyText}>{aboutUsText}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>How we calculate your Daily UV Dosage?</Text>
              <Text style={styles.infoSubtitle}>Daily UV Dosage Algorithm</Text>
              <View style={styles.bulletPointLine}>
                <Text style={styles.bulletPoint}>-</Text>
                <Text style={styles.bodyText}>{medBasisText}</Text>
              </View>
              <View style={styles.bulletPointLine}>
                <Text style={styles.bulletPoint}>-</Text>
                <Text style={styles.bodyText}>{DataCollectionText}</Text>
              </View>
              <View style={styles.bulletPointLine}>
                <Text style={styles.bulletPoint}>-</Text>
                <Text style={styles.bodyText}>{SunscreenUsageText}</Text>
              </View>
              <Text style={styles.infoSubtitle}>Cumulative Exposure Algorithm</Text>
              <View style={styles.bulletPointLine}>
                <Text style={styles.bulletPoint}>-</Text>
                <Text style={styles.bodyText}>{CumulativeExposureAlgorithmText}</Text>
              </View>
              <Text style={styles.infoSubtitle}>UV Index</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>How our device works?</Text>
              <Text style={styles.bodyText}>{DeviceOperationText}</Text>
            </View>

          </ScrollView>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconButton: {
    width: 50, 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },  
  icon: {
    width: 40, 
    height: 40, 
  },
  scrollView: {
    padding: 16,
  },
  introContainer: {
    paddingHorizontal: 10, 
    paddingVertical: 10,   
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 18,
  },
  infoContainer: {
    marginBottom: 24,
    paddingHorizontal: 10, 
    paddingVertical: 10
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoContent: {
    fontSize: 18,
  },
  bulletPointLine: {
    flexDirection: 'row', // Align bullet and text in one line
    alignItems: 'top',
  },
  bulletPoint: {
    marginLeft: 12,
    fontSize: 30, // Match font size with the text or adjust as needed
    color: 'black', // Bullet color
  },
  bodyText: {
    marginLeft: 12,
    marginRight: 10,
    marginTop: 7,
    fontSize: 18,
    flex: 1, // Take up all space available after accounting for the bullet
  },
  infoSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 9,
    marginBottom: 3,
    marginLeft: 3
   
},
});

export default AboutPage;
