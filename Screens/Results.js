import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, SectionList } from 'react-native';
const Results = ({ route }) => {
    const { searchForPractitioner, plan } = route.params;
    //   console.log("qeky eshte plani",plan)
    //   console.log("qekjo eshte itemSelected: ",String(itemSelected))
    //   console.log("qekjo eshte practitonerName: ",String(searchForPractitioner))
    const [nameData, setData] = useState([]);

    useEffect(() => {
        fetchData();
        return () => {
            setData();
        }
    }, [])
    const Location = (id, callback) => {
        var locationInfo = {};

        fetch('https://fhir.villagecare.org/Location/' + id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        })
            .then((json) => json.json())
            .then((json) => {
                locationInfo.line = json.address.line[0]
                locationInfo.city = json.address.city
                locationInfo.state = json.address.state
                locationInfo.postalCode = json.address.postalCode
                locationInfo.tel = json.telecom[0].value
                callback(locationInfo)
            }

            );

    }

    var practitionerD = []
    var dataEmpty = []


    const fetchData = () => {
        fetch('https://fhir.villagecare.org/PractitionerRole?_include=PractitionerRole:organization,PractitionerRole:practitioner,PractitionerRole:network,PractitionerRole:location,PractitionerRole:healthcareService&practitionerActive=true&practitionerName=' + searchForPractitioner + '&practitionerSpecialty=&practitionerNetwork=' + plan, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        })
            .then((json) => json.json())
            .then((json) => {
                console.log(json.entry.length,"length")
                if(json.entry.length==0){
                    console.log("that")
                    // practionerD.push(  "its empty" )
                        
                    // setData(practitionerD)
                    console.log(practitionerD.length,'gjatsia')
                }
                else{
                for (let i = 0; i < json.entry.length; i++) {
                   console.log(json.entry.length,"length")
                    if (json.entry[i].resource.practitioner) {
                        

    
                        Location(json.entry[i].resource.location[0].id, (info) => {
                            practitionerD.push({
                                name: json.entry[i].resource.practitioner.resource.name[0].given[0], name2: json.entry[i].resource.practitioner.resource.name[0].given[1], lastName: json.entry[i].resource.practitioner.resource.name[0].family, specialtyP: json.entry[i].resource.practitioner.resource.qualification[0].code.coding[0].display, state: info.state, postalCode: info.postalCode, line: info.line, organization: json.entry[i].resource.organization.resource.name,
                                tel: info.tel, city: info.city
                            })
                            setData(practitionerD)
                        })}

                    
                    else {
                       
                        console.log("")
                    }
                }}



            })
            .catch((error) => { console.log("---------------------------> error", error.message); })

    }


    const ItemView = ({ item }) => {
        if(practitionerD.length==0){
            return(
                <View>
                <Text style={styles.itemName}>
                    {/* {item.name} */}
                    {'Search for a different name'}
                </Text></View>
            )
        }
        else{
        return (
            <View >
                
                <Text style={styles.itemName}>
                    {item.lastName}{', '}{item.name}{' '}
                    {item.name2}
                </Text>
                <Text style={styles.itemStyle}>
                    {item.organization}</Text>
                <Text style={styles.LocationStyle}>
                    {item.line}</Text>
                <Text style={styles.LocationStyle}>
                    {item.city}{' ,'}
                    {item.state}{' '}
                    {item.postalCode}

                </Text>
                <Text style={styles.itemStyle}>
                    {item.specialtyP}</Text>
                <Text style={styles.itemStyle}>
                    {'+1'}{item.tel}
                </Text>
            </View>
        )}
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 1, width: '100%', borderBottomColor: '#dcdcdc',
                    borderBottomWidth: 5, 
                }} />
        )
    }

    // console.log(nameData, 'nameData')

    return (
        <SafeAreaView style={styles.Select}>

            <View style={styles.Results}>

                <FlatList
                    data={nameData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView} />
            </View>
        </SafeAreaView>
    )

};
const styles = StyleSheet.create({

    Select: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
    },

    Results: {
        flex: 1,
        borderRadius: 1,
        backgroundColor: 'white',
        width: '97%',
        borderColor: '#f0f8ff',
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'space-between'

    },
    itemName: {
        flex: 1,
        backgroundColor: '#f0ffff',
        color: 'black',
        width: '99%',
        alignSelf: 'center',
        fontSize: 25,
        borderBottomColor: 'black',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        margin: 2,
        padding:10


    },
    LocationStyle: {
        flex: 1,
        backgroundColor: 'white',
        color: '#2f4f4f',
        width: '95%',
        alignSelf: 'center',
        fontSize: 15,
        borderBottomColor: 'black',
        margin: 2,
        padding: 3,
    },
    itemStyle: {
        backgroundColor: 'white',
        color: '#2f4f4f',
        width: '95%',
        alignSelf: 'center',
        fontSize: 17,
        borderBottomColor: 'black',
        margin: 2,
        padding: 3,
    },


});
export default Results;