import * as React from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';
import { TextInput, Text} from 'react-native-paper'
import { Formik, Form, Field } from 'formik';
import { Finance } from 'financejs'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let finance = new Finance();

export function DebtCalculatorScreen({navigation}) {
  var principal : number;
  var interestRate : number; 
  var numberOfPayments : number; 
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
        placeholder="Amount ($)"
        keyboardType='numeric'
        onChangeText={(text1) => principal = Number(text1)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Interest Rate (%)"
        keyboardType='numeric'
        onChangeText={(text2) => interestRate = Number(text2)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Number of payments"
        keyboardType='numeric'
        onChangeText={(text3) => numberOfPayments = Number(text3)}
      />
      <RadioForm style={styles.textinput}
          radio_props={radio_props}
          initial={0}
          onPress={(number_pressed) => {value=number_pressed}}
        />
      <Button title="Calculate payment"
        onPress={() => Alert.alert("Monthly payment of $" + String(finance.AM(principal, interestRate, numberOfPayments, Number(value))))}
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
  