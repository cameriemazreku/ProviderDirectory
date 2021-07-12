import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
// import ResultsByProviderName from './ResultsByProviderName';
import apiCall from '../assets/apiCall';
// import data2 from '../util/data1';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// https://www.npmjs.com/package/react-native-search-filter

const Select = ({ navigation }) => {
  const [search, setsearch] = useState('');
  const [searchbylocation, setsearchbylocation] = useState('');
  // console.log(data1.practitioner);

  
  const ResultsByProviderName = () => {  

    const endpoint = '/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir' ;
    console.log(endpoint);
    const promise = apiCall(endpoint, 'get')
  
    promise.then(blob => blob.json()).then(json => {
      console.log(json.entry[0].resource.practitioner.resource.name[0].given)
      // console.log(json.entry.practitioner.resource.name)
    })
    .catch((error)=>{console.log("---------------------------> error", error.message);})}

//     fetch('  https://vc202011.aidbox.app/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir')
//     // fetch(' https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')

//     .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((error) => console.error(error));


//     ;}

// const name ='sumir';
//     const test = fetch('https://vc202011.aidbox.app/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir',{
//       headers: {"Content-Type": "application/json"},
//       method: "GET"
//     });

// test.then(res => console.log(res)).catch(err => console.log('------------>', err));
//   }

  return (
    <SafeAreaView style={styles.Select}>

      <ModalDropdown options={['Adult Day Health Care', 'Assistive Technology', 'Audiology/Hearing Aids', 'Certified Home Health Agencies', 'Audiology/Hearing Aids', 'Certified Home Health Agencies', 'Audiology/Hearing Aids', 'Certified Home Health Agencies']}
        style={styles.Option1}
        defaultValue='Select by specialty'
        textStyle={styles.Text}
        dropdownStyle={styles.Dropdown}
        dropdownTextStyle={styles.Textstyle}
        animated={true}
        onSelect={() => navigation.navigate('Results')}
        // keyboardShouldPersistTaps='handled'
      />

      <TextInput
        style={styles.Option2}
        value={search}
        placeholder="Search by provider's name"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        // onChangeText={(search)=>setsearch(search)}
        // onChangeText={(text) => ResultsByProviderName(text)}
        // onSubmitEditing={() => navigation.navigate('ResultsByProviderName')}
        onSubmitEditing={ResultsByProviderName}
      />

      <TextInput
        style={styles.Option3}
        value={searchbylocation}
        placeholder="Enter your zip code"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        onChangeText={(text) => setsearchbylocation(text)}
        onSubmitEditing={() => navigation.navigate('Results')}
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

export default Select;