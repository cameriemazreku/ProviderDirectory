import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, SectionList } from 'react-native';
const ResultsOrganization = ({ route }) => {
    const { itemSelected, searchForPractitioner, search, plan } = route.params;
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

        const myPromise = new Promise((resolve, reject) => {
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
                    resolve();

                }

                );
        })

        myPromise.then(() => {
            callback(locationInfo)
        })

    }

    var providerD = []
    var dataEmpty = []

    const fetchData = () => {

        fetch('https://fhir.villagecare.org/OrganizationAffiliation?_include=OrganizationAffiliation:organization,OrganizationAffiliation:network,OrganizationAffiliation:location,OrganizationAffiliation:service&organizationActive=true&organizationName=' + search + '&organizationNetwork=' + plan + '&organizationSpecialty=', {

            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        })
            .then((json) => json.json())
            .then((json) => {
                for (let i = 0; i < json.entry.length; i++) {
                    if (json.entry[i].resource.organization) {
                        Location(json.entry[i].resource.location[0].id, (info) => {
                            providerD.push({ name: json.entry[i].resource.organization.resource.name, specialtyP: json.entry[i].resource.organization.resource.type[0].coding[0].code.display, location: info, tel: info.tel })
                            setData(providerD)
                        })

                    }
                    else {
                        console.log(" ")
                    }
                }



            })
            .catch((error) => { console.log("---------------------------> error", error.message); })

    }


    const ItemView = ({ item }) => {
        return (
            <View >
                <Text style={styles.itemName}>
                    {item.name}
                </Text>
                <Text style={styles.itemStyle}>
                    {item.organization}</Text>
                <Text style={styles.LocationStyle}>
                    {item.location.line}</Text>
                <Text style={styles.LocationStyle}>


                    {item.location.city}{' ,'}
                    {item.location.state}{' '}
                    {item.location.postalCode}

                </Text>
                <Text style={styles.itemStyle}>
                    {item.specialtyP}</Text>
                <Text style={styles.itemStyle}>
                    {'+1'}{item.tel}
                </Text>
            </View>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 1, width: '100%' }} />
        )
    }

    console.log(nameData, 'nameData')

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
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        flex: 1,
    },

    Results: {
        flex: 1,
        // margin: 5,
        borderRadius: 1,
        backgroundColor: 'white',
        width: '97%',
        borderColor: '#f0f8ff',
        borderWidth: 2,
        borderRadius: 5,
        //   margin:5,
        //   justifyContent: 'space-between'
        // alignContent: 'space-between',

    },
    itemName: {
        // flex:1,
        backgroundColor: '#f0ffff',
        color: 'black',
        width: '95%',
        alignSelf: 'center',
        fontSize: 20,
        borderBottomColor: 'black',
        //   justifyContent:'space-evenly',
        alignSelf: 'center',
        //   margin: 3,


    },
    LocationStyle: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        width: '95%',
        alignSelf: 'center',
        fontSize: 15,
        borderBottomColor: 'black',
        //   margin: 3

    },
    itemStyle: {
        backgroundColor: 'white',
        color: 'black',
        width: '95%',
        alignSelf: 'center',
        fontSize: 17,
        borderBottomColor: 'black',
        // margin: 3

    },


});
export default ResultsOrganization;