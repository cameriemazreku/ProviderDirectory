import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, SectionList } from 'react-native';
const ResultsSpecialty = ({ route }) => {
    const { itemSelected, plan } = route.params;
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

        fetch('https://fhir.villagecare.org/OrganizationAffiliation?_include=OrganizationAffiliation:organization,OrganizationAffiliation:network,OrganizationAffiliation:location,OrganizationAffiliation:service&organizationActive=true&organizationName=&organizationNetwork=' + plan + '&organizationSpecialty=' + itemSelected, {

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
                            providerD.push({ name: json.entry[i].resource.organization.resource.name, specialtyP: itemSelected, tel: info.tel, state: info.state, postalCode: info.postalCode, line: info.line,city:info.city })
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
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 1, width: '100%', borderBottomColor: '#dcdcdc',
                borderBottomWidth: 2 }} />
        )
    }


    return (
        <SafeAreaView style={styles.Select}>

            <View style={styles.Results}>

                <FlatList
                    data={nameData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    ListHeaderComponent={() => (nameData == 0 ?
                        <Text style={styles.emptyList}>The list is empty</Text>

                        : null)} />
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
        backgroundColor: '#e6f9ff',
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
    emptyList: {
        backgroundColor: 'white',
        color: '#2f4f4f',
        width: '95%',
        alignSelf: 'center',
        fontSize: 30,
        borderBottomColor: 'black',
        margin: 2,
        textAlign: 'center',
        marginTop: '50%',
    }
});
export default ResultsSpecialty;