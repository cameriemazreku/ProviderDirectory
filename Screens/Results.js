import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, } from 'react-native';

const Results = () => 
{

return (
  <SafeAreaView style={styles.Select}>

  <View style={styles.Results}>
<Text style={styles.Name}> John May</Text>
<Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
    </View>
    <View style={styles.Results}>
      <Text style={styles.Name}>
        Will Smith
      </Text>
      <Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
</View>
    </SafeAreaView>
)

};
const styles = StyleSheet.create({

    Select:{
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        flex:1,
    },
    Results:{
      margin: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      width: '97%',
      height: '22%',
      borderColor: '#f0f8ff',
      borderWidth: 2,
      borderRadius: 5,
      alignContent: 'space-between',

    },
    Text:{
      fontFamily: 'Roboto',
      color: 'black',
      fontSize: 15
      
    },
    Name: {
        fontSize: 30,
        fontFamily: 'Roboto',
        color: 'black',
        padding: 5,
      }
});
export default Results;