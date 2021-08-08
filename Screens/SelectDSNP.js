import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import apiCall from '../assets/apiCall';


const SelectDSNP = ({ navigation }) => {
  const [search, setsearch] = useState('');
  const [searchbylocation, setsearchbylocation] = useState('');
  


  return (
    <SafeAreaView style={styles.Select}>

      <ModalDropdown options={['Adult Day Health Care', 'Assistive Technology', 'Audiology/Hearing Aids', 'Certified Home Health Agencies', 'Audiology/Hearing Aids', 'Certified Home Health Agencies', 'Audiology/Hearing Aids', 'Certified Home Health Agencies']}
        style={styles.Option1}
        defaultValue='Select by specialty'
        textStyle={styles.Text}
        dropdownStyle={styles.Dropdown}
        dropdownTextStyle={styles.Textstyle}
        animated={true}
        onSelect={() => navigation.navigate('ResultsTotal')}
      />

      <TextInput
        style={styles.Option2}
        placeholder="Search by provider's name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(text) => ResultsByOrganization(text)}
 
      />

      <TextInput
        style={styles.Option3}
        value={searchbylocation}
        placeholder="Search by practitioner name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(text) => setsearchbylocation(text)}
        onSubmitEditing={() => navigation.navigate('ResultsTotal')}
      />
    </SafeAreaView>
  )

};
const styles = StyleSheet.create({

  Select: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',


  },
  itemStyle: {
    padding: 15,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    width: '95%',
    alignSelf: 'center'
  },
  Option1: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#000033',
    width: '97%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Option2: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#008ae6',
    width: '97%',
    height: '25%',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white',


  },
  Option3: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ff9900',
    width: '97%',
    height: '25%',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white'
  },
  Text: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white',
  },
  Textstyle: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'black',
  },
  Dropdown: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000033',
    borderRadius: 5,
    height: '50%',
    width: '77%',

  }


});

export default SelectDSNP;