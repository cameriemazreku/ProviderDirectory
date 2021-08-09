import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const Select = ({ route,navigation }) => {
  const [search, setsearch] = useState('');
  const [searchForPractitioner, setsearchForPractitioner] = useState('');
  const { plan} = route.params;
  console.log("qeky eshte plani",plan)
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
        defaultValue='Select by specialty ↓'
        textStyle={styles.Text}
        dropdownStyle={styles.Dropdown}
        dropdownTextStyle={styles.Textstyle}
        animated={true}
        onSelect={(idx, value) => navigation.navigate('ResultsSpecialty', {
          itemSelected: value,
          visa: idx,
          plan
        })}

      // keyboardShouldPersistTaps='handled'
      />

      <TextInput
        style={styles.Option2}
        value={search}
        placeholder="Search by provider's name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(search)=>{setsearch(search)}}
        onSubmitEditing={() => navigation.navigate('ResultsOrganization', { search, plan})}
      />

      <TextInput
        style={styles.Option3}
        value={searchForPractitioner}
        placeholder="Search by practitioner name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(search) => {setsearchForPractitioner(search)}}
        onSubmitEditing={() => navigation.navigate('ResultsPractitioner', {  searchForPractitioner, plan })}
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
    borderRadius: 10,
    backgroundColor: '#000033',
    width: '97%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'white',
    borderWidth:2,
  },
  Option2: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#4682b4',
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
    borderRadius: 15,
    borderColor: '#4682b4',
    backgroundColor:'#008ae6',
    borderWidth:2,
    width: '97%',
    height: '25%',
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white',
  },
  Text: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white',
    // color:'#000033'
  },
  Textstyle: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: 'black',
      },
  Dropdown: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4682b4',
    borderRadius: 5,
    height: '51%',
    width: '77%',

  }


});

export default Select;