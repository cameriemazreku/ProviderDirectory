import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, SectionList} from 'react-native';
// import data1 from '../util/data1';
import apiCall from '../assets/apiCall';
import organization from './SelectMAP';
const ResultsMLTC = ({route}) => 
{
  const {itemSelected, visa, practitonerName,plan} = route.params;
    console.log("qeky eshte plani",plan)


  console.log("qekjo eshte itemSelected: ",String(itemSelected))
  console.log("qekjo eshte practitonerName: ",String(practitonerName))

  var p=itemSelected
  const [Name, setName] = useState([]);
  const [specialty, setSpecialty] = useState([]);
useEffect(()=>{
  fetchData();
  return ()=>{
    setName();
    // setSpecialty();
  }
},[])
// var LocationInfo=[];
  const Location=(id)=>{
    var locationInfo={};

    fetch('https://fhir.villagecare.org/Location/'+id,{
      headers:{
        "Content-Type":"application/json"},
      method: "GET"})
      .then((json) => json.json()) 
      .then((json)=>{
        // for(let i=0;i<json.entry.length;i++){
          locationInfo.line=json.address.line[0]
        
          locationInfo.city=json.address.city
          // LocationInfo.push(json.address.state)
          // LocationInfo.push(json.address.postalCode)
          console.log("")
          console.log(json.id)
          console.log(json.address.line[0])
          console.log(json.address.city)
          console.log(json.address.state)
          console.log(json.address.postalCode)
          console.log(locationInfo.city)

          // return LocationInfo;
        }     
        );
        // while(json.id){
    // fetchData(LocationInfo);
  }
// var LocationInfo=[];
//MTLC
//MAP - health advantage
//D-SNP - total advantage
  const fetchData=()=>{
    // if(itemSelected==undefined && practitonerName){
    //   itemSelected=" ";
      // practitonerName=" ";
    fetch('https://fhir.villagecare.org/PractitionerRole?_include=PractitionerRole:organization,PractitionerRole:practitioner,PractitionerRole:network,PractitionerRole:location,PractitionerRole:healthcareService&practitionerActive=true&practitionerName=&practitionerSpecialty='+itemSelected+'&practitionerNetwork='+plan, {
    headers:{
      "Content-Type":"application/json"},
    method: "GET"})
    .then((json) => json.json()) 
    .then((json)=>{
      // console.log(json)

      for(let i=0;i<json.entry.length;i++){
      if(json.entry[i].resource.practitioner){
         setName(json.entry[i].resource.practitioner.resource.name[0].given)
         console.log(json.entry[i].resource)
           }
      else  
        { 
            console.log("Its empty")}
    }
    
    

    })
      .catch((error)=>{console.log("---------------------------> error", error.message);})

  }


  const ItemView =({item})=>{
    return (
      <Text style ={styles.itemStyle}>
{item}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View 
      style={{height:0.5, width: '100%'}}/>
    )
  }
  

return (
  <SafeAreaView style={styles.Select}>

  <View style={styles.Results}>

  <FlatList
data={Name}
keyExtractor={(item, index)=>index.toString()}
ItemSeparatorComponent={ItemSeparatorView}
renderItem={ItemView}
// renderItem={({item})=> (
//   <Text style={styles.itemStyle}>{item.given}</Text>
// )}
  />





{/* <Text style={styles.Name}> John May</Text>
<Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
    </View>
    
</View>

 */}
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
    itemStyle:{
      // padding: 15,
      // margin: 3,
      backgroundColor:'white',
      borderRadius: 10,
      color:'black',
      width: '95%',
      alignSelf: 'center',
      fontSize: 20,
  
    },
    Results:{
      // margin: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      width: '97%',
      height: '30%',
      borderColor: '#f0f8ff',
      borderWidth: 2,
      borderRadius: 5,
      // alignContent: 'space-between',

    },
    // Text:{
    //   fontFamily: 'Roboto',
    //   color: 'black',
    //   fontSize: 15
      
    // },
    // Name: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto',
    //     color: 'black',
    //     padding: 5,
    //   }
});
export default ResultsMLTC;