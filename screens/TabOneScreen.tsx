import * as React from 'react';
import { StyleSheet, Button} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import { Formik, Form, Field } from 'formik';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resources</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Mortgage calculator"                                                                                                                                                                             
        onPress={() => navigation.push('Mortgage Calculator')}
      />
      <Button
        title="Debt calculator"
        onPress={() => navigation.push('Debt Calculator')}
      /> 
    </View>
  );
}

function MortgageCalculatorScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* TODO: Mortgage calculator form */}
    </View>
  );
}

function DebtCalculatorScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* TODO: Loan calculator form */}
    </View>
  );
}

export default function TabOneScreen() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Mortgage Calculator" component={MortgageCalculatorScreen}></Stack.Screen>
        <Stack.Screen name="Debt Calculator" component={DebtCalculatorScreen}></Stack.Screen>
      </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
