import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Image, Platform, StyleSheet, TouchableOpacity, View,Picker } from 'react-native';
import { List, ListItem, Text, Card, Button  } from 'react-native-elements';
import { useState,useEffect } from 'react';

function useStats(){
  const [stats ,setStats]= useState();
  useEffect(()=>{
    async function fetchData(){
    
    console.log('fetching data');
   const data=await fetch("https://covid19.mathdro.id/api/countries").then
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
  return (<Text style={styles.developmentModeText}> loading
    </Text>
  );
}
// just create an on prres and that all     make a key code country url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
  return (
    <View style={styles.container}>
           <View>

                      {Object.entries(stats.countries).map(([country, code]) => (
                                                <Card>

                <Text
                key={code}
                value={stats.iso3[code]}
                
                  >
                    
                    <Text>{country}</Text>

                </Text>
                </Card>

              ))
            }

          </View>
      

        </View>
    



      
  );

}
export default function LinksSceen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
               <Stats></Stats>

    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
          
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
