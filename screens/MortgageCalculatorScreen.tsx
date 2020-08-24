import * as React from 'react';
import { StyleSheet, Button, Alert} from 'react-native';
import { Text, View, TextInput } from '../components/Themed';
import { Finance } from 'financejs'

let finance = new Finance();

export function MortgageCalculatorScreen({navigation}) {
    var principal : number;
    var downPayment: number;
    var interestRate : number; 
    var numberOfPayments : number; 
    var monthlyHOA : number;

    let value = 0;
  
    var radio_props = [
      {label: 'years', value: 0 },
      {label: 'months', value: 1 }
    ];
  
     function getInitialState () {
      return {
        value: 0,
      }
    }
  
    return (
      <View>
  
        <TextInput style={styles.textinput} 
          mode="flat"
          placeholder="Price ($)"
          keyboardType='numeric'
          onChangeText={(text1) => principal = Number(text1)}
        />
        <TextInput style={styles.textinput} 
          placeholder="Interest Rate (%)"
          keyboardType='numeric'
          onChangeText={(text2) => interestRate = Number(text2)}
        />
        <TextInput style={styles.textinput} 
          placeholder="Down Payment (%)"
          keyboardType='numeric'
          onChangeText={(text3) => downPayment = Number(text3)}
        />
        <TextInput style={styles.textinput} 
          placeholder="Number of years"
          keyboardType='numeric'
          onChangeText={(text4) => numberOfPayments = Number(text4)}
        />
        <TextInput style={styles.textinput} 
          placeholder="Monthly HOA"
          keyboardType='numeric'
          onChangeText={(text5) =>  monthlyHOA = Number(text5)}
        />
        <Button title="Calculate payment"
          onPress={() => Alert.alert("Monthly payment of $" + String(finance.AM(principal * (1 - (downPayment/100)), interestRate, numberOfPayments, Number(value) + monthlyHOA)))}
        />
      </View>
    );
    }

const styles = StyleSheet.create({
  container: {     
    alignItems: 'center',
    justifyContent: 'center',
  },
    textinput: {
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      paddingLeft: 0,
      color: '#424242',
    },
    result: {
      fontSize: 15,
      justifyContent: 'center',
    },
});