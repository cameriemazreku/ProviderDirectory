import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {

  return (


    <SafeAreaView style={styles.Home}>




      <View styles={styles.Plan}>
        <Text style={styles.SelectPlan}>Select the type of care you’re looking for</Text>
      </View>

      <TouchableOpacity style={styles.Option1} onPress={() => navigation.navigate('Select', { plan: 'MLTC' })}>
        <Text style={styles.Text}>MLTC</Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.Option2} onPress={() => navigation.navigate('Select', { plan: 'MAP' })}>

        <Text style={styles.Text}>Medicare Health Advantage</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Option3} onPress={() => navigation.navigate('Select', { plan: 'DSNP' })}>

        <Text style={styles.Text}>
          Medicare Total Advantage
        </Text>

      </TouchableOpacity>

    </SafeAreaView>

  )
};

const styles = StyleSheet.create({

  Home: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  Plan: {
    width: '97%',
    height: '15%',
    justifyContent: 'center'
  },
  SelectPlan: {
    margin: 10,
    color: '#000033',
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center'

  },
  Option1: {
    margin: 10,
    borderRadius: 15,
    // backgroundColor: '#000033',
    backgroundColor: '#008ae6',

    width: '97%',
    height: '23%',
    justifyContent: 'center',
  },
  Option2: {
    margin: 10,
    borderRadius: 15,
    // backgroundColor: '#008ae6',
    backgroundColor: '#4682b4',

    width: '97%',
    height: '23%',
    justifyContent: 'center',
  },
  Option3: {
    margin: 10,
    borderRadius: 15,
    // backgroundColor: '#4682b4',
    backgroundColor: '#000033',

    width: '97%',
    height: '23%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white'
  }

});
export default Home;