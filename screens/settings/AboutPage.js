import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView, Image} from 'react-native';
import solawareData from './AboutPageInfo.json';

var backIcon = require('../../images/icons8-back-96 1.png'); 
var image = require('../../images/HomePage.png');

export default function AboutPage({navigation}) {

  const aboutUsText = solawareData.AboutUs;
  const medBasisText = solawareData.DailyUVDosageAlgorithm.MED_Basis;
  const DataCollectionText = solawareData.DailyUVDosageAlgorithm.DataCollection;
  const SunscreenUsageText = solawareData.DailyUVDosageAlgorithm.SunscreenUsage;
  const CumulativeExposureAlgorithmText = solawareData.CumulativeExposureAlgorithm;
  const DeviceOperationText = solawareData.DeviceOperation;

  return (
    <SafeAreaView style={{flex:1, flexDirection: 'column'}}>
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: 430, height: 935, opacity: 1, position: 'absolute',justifyContent: 'center'}}>

          <View style={{height: '8%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 120, marginLeft: 20}}> 
            <TouchableOpacity onPress = {() => navigation.goBack()} style={styles.iconButton}>
              <Image source={backIcon} style={{width: 42, height: 42}} />
            </TouchableOpacity>
            <Text style={{fontSize: 30, fontFamily: 'Open Sans', marginLeft: 5, fontWeight: 700, color: '#08325D',}}>
              About
            </Text>
          </View>

          <Text style={{fontFamily: 'Tinos Bold', fontSize: 32, marginTop: 15, marginLeft: 30, marginRight: 70, marginBottom: 15, color: '#08325D',}}>
              Interested in learning more about our product? 
          </Text>
          <Text style={{fontFamily: 'Open Sans', fontSize: 18, fontWeight: 700, marginLeft: 30, marginBottom: 25, color: '#258DFB'}}>
              Scroll to find out more!
          </Text>

          <ScrollView style={{height: '80%', marginLeft: 25, marginRight: 25, padding: 5, marginBottom: 150, borderTopColor: '#FADA6C', borderTopWidth: 3}}>

            <View>
              <Text style={styles.sectionTitle}>About Solaware </Text> 
              <Text style={{fontSize: 15, fontFamily: 'Open Sans', marginVertical: 10, marginLeft: 12, marginRight: 3, color: '#08325D'}}> 
                {aboutUsText}
              </Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>How do we calculate your UV Dosage? </Text>
              
              <Text style={{ fontSize: 20, fontFamily: 'Tinos Bold', color: '#08325D', marginTop: 10, marginBottom: 7}}>
                Daily UV Dosage Algorithm
              </Text>
                
              <Text style={styles.subtext}>{medBasisText} </Text>
              <Text style={styles.subtext}>{DataCollectionText} </Text>
              <Text style={styles.subtext}>{SunscreenUsageText} </Text>

              <Text style={{ fontSize: 20, fontFamily: 'Tinos Bold', color: '#08325D', marginTop: 10, marginBottom: 10}}>
                Cumulative Exposure Algorithm
              </Text>
              <Text style={styles.subtext}>{CumulativeExposureAlgorithmText} </Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>How does our device work? </Text>
              <Text style={{fontSize: 15, fontFamily: 'Open Sans', marginVertical: 10, marginLeft: 12, marginRight: 3, color: '#08325D'}}>
                {DeviceOperationText}
              </Text>
            </View>

        </ScrollView>

      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 50, 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },  
  sectionTitle: {fontSize: 25,  marginTop: 10, fontFamily: 'Tinos Bold', color: '#08325D', marginTop: 25},
  subtext: {fontSize: 15, fontFamily: 'Open Sans', marginVertical: 6, marginLeft: 12, marginRight: 3, color: '#08325D'},

});