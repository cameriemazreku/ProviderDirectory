import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, SectionList} from 'react-native';
const ResultsMAP = () => 
{
  const [practitionerData, setData] = useState([]);
  const [specialty, setSpecialty] = useState([]);
useEffect(()=>{
  fetchData();
  return ()=>{
    setData();
    setSpecialty();
  }
},[])


  const Location=async(id)=>{
    var locationInfo={
    };
    await fetch('https://fhir.villagecare.org/Location/'+id,{
      headers:{
        "Content-Type":"application/json"},
      method: "GET"})
      .then((json) => json.json()) 
      .then((json)=>{
          locationInfo.line=json.address.line[0]
          locationInfo.city=json.address.city
          locationInfo.state=json.address.state
          locationInfo.postalCode=json.address.postalCode
          // console.log("")
          // console.log(json.id)
          // console.log(json.address.line[0])
          // console.log(json.address.city)
          // console.log(json.address.state)
          // console.log(json.address.postalCode)
          // console.log(locationInfo.line.length)
        // console.log(locationInfo)
          return locationInfo.line;
        }     

        );
        // while(json.id){
    // fetchData(LocationInfo);
  }
//MTLC
//MAP - health advantage
//D-SNP - total advantage
var practionerD=[]
  const fetchData=async()=>{
    fetch('https://fhir.villagecare.org/PractitionerRole?_include=PractitionerRole:organization,PractitionerRole:practitioner,PractitionerRole:network,PractitionerRole:location,PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir&practitionerNetwork=MAP', {
    headers:{
      "Content-Type":"application/json"},
    method: "GET"})
    .then((json) => json.json()) 
    .then(async(json)=>{
      for(let i=0;i<json.entry.length;i++){
      if(json.entry[i].resource.practitioner){
        
     const data= await Location(json.entry[i].resource.location[0].id)
        console.log("data eshte qekjo: ",data)
        practionerD.push( {name:json.entry[i].resource.practitioner.resource.name[0].given, specialtyP:json.entry[i].resource.practitioner.resource.qualification[0].code.coding[0].display, location:data})
       
        //  setData([...practitionerData,json.entry[i].resource.practitioner.resource.name[0].given, json.entry[i].resource.practitioner.resource.qualification[0].code.coding[0].display])
         setData(practionerD)
        //  console.log("")
        //  console.log(json.entry[i].resource.practitioner.resource.name[0])

        //  console.log(json.entry[i].resource.location[0].id)

        //   console.log(json.entry[i].resource.practitioner.resource.qualification[0].code.coding[0].display)
       
        var id=json.entry[i].resource.location[0].id;
          // setName(String(json.entry[i].resource.practitioner.resource.name[0].given)+' '+String(json.entry[i].resource.practitioner.resource.name[0].family))
          setSpecialty(json.entry[i].resource.practitioner.resource.qualification[0].code.coding[0].display)
      
     
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
      <View >
      <Text style ={styles.itemStyle}>
          {item.name} 
          {/* {item} */}
      </Text>
      <Text style ={styles.itemStyle}>
      {item.specialtyP}
      {item.data,"location"}

      </Text>
      </View>
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
data={practitionerData}
keyExtractor={(item, index)=>index.toString()}
ItemSeparatorComponent={ItemSeparatorView}
renderItem={ItemView}

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
      backgroundColor:'wheat',
      color:'black',
      width: '95%',
      alignSelf: 'center',
      fontSize: 20,
      borderBottomColor:'black',
      // margin: 3
  
    },
    Results:{
      flex:1,
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
export default ResultsMAP;