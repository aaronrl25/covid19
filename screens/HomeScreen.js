import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import { useState,useEffect } from 'react';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

import { MonoText } from '../components/StyledText';
function useStats(){
  const [stats ,setStats]= useState();
  useEffect(()=>{
    async function fetchData(){
    
    console.log('fetching data');
   const data=await fetch('https://covid19.mathdro.id/api').then
    (res=>res.json()
    
    
    );
    setStats(data);
  }
  fetchData();
},[]);
return stats;
}
function Stats(){
  const stats=useStats();
 console.log(stats);

if(!stats) {
  return (
    
    <Text style={styles.developmentModeText}>
      loading
    </Text>
  );
}
  return (
    <View style={styles.container}>
          <Card style={styles.container}>

    <Text style={styles.getStartedText}>
      confirirmed {stats.confirmed.value}
    </Text>
    </Card>
    <Card style={styles.container}>

<Text style={styles.getStartedText}>
  Deaths {stats.deaths.value}
</Text>
</Card>
    {/* Deaths{stats.deaths.value}.
      recovered{stats.recovered.value} */}
          <Card style={styles.container}>

<Text style={styles.getStartedText}>
  recovered {stats.recovered.value}
</Text>
</Card>

      </View>
  );

}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*  */}

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Stats></Stats>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          </View>

         
        
        </View>

        <View style={styles.helpContainer}>
        </View>
      </ScrollView>

     
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

