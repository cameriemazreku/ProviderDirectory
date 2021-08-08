import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { TabRouter } from 'react-navigation';
// import ResultsByProviderName from './ResultsByProviderName';
import apiCall from '../assets/apiCall';
// import data2 from '../util/data1';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// https://www.npmjs.com/package/react-native-search-filter

const SelectMLTC = ({ navigation }) => {
  const [search, setsearch] = useState('');
  const [searchForPractitioner, setsearchForPractitioner] = useState('');
  // console.log(data1.practitioner);
  return (
    <SafeAreaView style={styles.Select}>

      <ModalDropdown options={['ACUPUNCTURE',
        'ADULT DAY HEALTH CARE',
        'AMBULATORY SURGERY CENTER',
        'ASSISTIVE TECHNOLOGY',
        'AUDIOLOGY/HEARING AIDS',
        'BEHAVIORAL HEALTH &SUBSTANCE ABUSE PROVIDERS',
        'CERTIFIED HOME HEALTH AGENCIES (CHHAS)',
        'CHIROPRACTIC',
        'COMMUNITY HEALTH CENTERS/FEDERALLY QUALIFIED HEALTH CENTERS',
        'DENTAL CARE PROVIDERS',
        'DIALYSIS CENTERS',
        'DURABLE MEDICAL EQUIPMENT(DME)',
        'ENVIROMENTAL MODIFICATIONS',
        'FREE STANDING RADIOLOGY CENTERS',
        'HOSPITALS',
        'LABORATORIES',
        'NUTRITION',
        'OCCUPATIONAL THERAPY',
        'PHARMACIES',
        'PHYSICAL THERAPY',
        'PODIATRY',
        'PRIMARY CARE PROVIDERS',
        'RESPIRATORY THERAPY',
        'SKILLED NURSING FACILITIES/NURSING HOMES',
        'SOCIAL WORKER',
        'SPECIALTY CARE PROVIDERS',
        'SPEECH THERAPY',
        'TELEHEALTH',
        'TRANSPORTATION',
        'URGENGT CARE CENTERS',
        'VISION CARE PROVIDER']}
        style={styles.Option1}
        defaultValue='Select by specialty'
        textStyle={styles.Text}
        dropdownStyle={styles.Dropdown}
        dropdownTextStyle={styles.Textstyle}
        animated={true}
        onSelect={(idx, value) => navigation.navigate('Results', {
          itemSelected: value,
          visa: idx
        })}

      // keyboardShouldPersistTaps='handled'
      />

      <TextInput
        style={styles.Option2}
        value={search}
        placeholder="Search by provider's name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(search) => setsearch(search)}
        onEndEditing={() => navigation.navigate('Results', { providerName: search })}
      />

      <TextInput
        style={styles.Option3}
        value={searchForPractitioner}
        placeholder="Search by practitioner name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(text) => setsearchForPractitioner(text)}
        onSubmitEditing={() => navigation.navigate('ResultsMLTC', { practitionerName: searchForPractitioner })}
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

export default SelectMLTC;