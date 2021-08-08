import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, } from 'react-native';
import apiCall from '../assets/apiCall';
const ResultsByProviderName = ({route}) => {
  const [data, setData] = useState([]);
  const {searchbyLocation}= route.params
 console.log("cka po kthen: ",searchbyLocation)
  
useEffect(()=>{
  PN();
  return ()=>{
    setData();
  }
},[])
  const PN = () => {  
  const endpoint = '/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir';
  console.log(endpoint);
  const promise = apiCall(endpoint, 'get')

  promise.then(blob => blob.json()).then(json => {
    // console.log(json.entry[0].resource.practitioner.resource.name[0].given)
    // setData(String(json.entry[0].resource.practitioner.resource.name[0].given));
  });
     
  }
  
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%' }} />
    )
  }

  return (
    <SafeAreaView style={styles.Result}>

      <View style={styles.Results}>

        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => (
            <Text style={styles.itemStyle}>
              {item}
            </Text>)} />

      </View>


    </SafeAreaView>
  )

};
const styles = StyleSheet.create({

  Result: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    flex: 1,
  },
  Results: {
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
  Text: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 15

  },
  Name: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'black',
    padding: 5,
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
});
export default ResultsByProviderName;