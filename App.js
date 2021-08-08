import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultsByProviderName from './Screens/ResultsByProviderName';
import ResultsDSNP from './Screens/ResultsDSNP';
import ResultsMLTC from './Screens/ResultsMLTC';
import ResultsMAP from './Screens/ResultsMAP';
import SelectMLTC from './Screens/SelectMLTC';
import SelectMAP from './Screens/SelectMAP';
import SelectDSNP from './Screens/SelectDSNP';
import Select from './Screens/Select';
import Results from './Screens/Results';


export default function App() {
  const Stack = createStackNavigator();
  return (

    <SafeAreaView style={styles.container} >
      <Image source={require('./assets/VillageCareMAX.jpg')} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ResultsDSNP" component={ResultsDSNP} />
          <Stack.Screen name="ResultsMAP" component={ResultsMAP} />
          <Stack.Screen name="ResultsMLTC" component={ResultsMLTC} />
          <Stack.Screen name="SelectMLTC" component={SelectMLTC} />
          <Stack.Screen name="SelectMAP" component={SelectMAP} />
          <Stack.Screen name="SelectDSNP" component={SelectDSNP} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Results" component={Results} />


          <Stack.Screen name='ResultsByProviderName' component={ResultsByProviderName} />
        </Stack.Navigator>
      </NavigationContainer>

      <Text style={styles.Text}>Provider Directory app</Text>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  Text: {
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: 'white'
  }
});
