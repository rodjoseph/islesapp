import * as React from 'react';
import { StyleSheet, Alert, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Finance } from 'financejs'
import { blue100 } from 'react-native-paper/lib/typescript/src/styles/colors';
import {Text, TextInput, View} from '../components/Themed';

export default function BudgetCalculatorScreen({navigation}) {
  var monthlyIncome = 0;
  var housingExpenses = 0;
  var foodExpenses = 0;
  var transportationExpenses = 0;
  var healthExpenses = 0;
  var debtPayments = 0;
  var miscellaneousExpenses = 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View>
      <Text style={styles.introText}>Taking out a loan? Enter the details here to see what your monthly payment will be.</Text>
      <TextInput style={styles.textinput} 
        placeholder="Monthly income ($)"
        keyboardType='numeric'
        onChangeText={(_text) => monthlyIncome = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Housing expenses ($)"
        keyboardType='numeric'
        onChangeText={(_text) => housingExpenses = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Food expenses($)"
        keyboardType='numeric'
        onChangeText={(_text) => foodExpenses = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Transportation expenses/ Car payment ($)"
        keyboardType='numeric'
        onChangeText={(_text) => transportationExpenses = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Healthcare expenses ($)"
        keyboardType='numeric'
        onChangeText={(_text) => healthExpenses = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Debt repayments ($)"
        keyboardType='numeric'
        onChangeText={(_text) => debtPayments = Number(_text)}
      />
      <TextInput style={styles.textinput} 
        placeholder="Miscellaneous/ Other expenses ($)"
        keyboardType='numeric' 
        onChangeText={(_text) => monthlyIncome = Number(_text)}
      />
      <Button title="Calculate leftover"
        onPress ={() => 
            {
            let x = monthlyIncome - (housingExpenses + foodExpenses + transportationExpenses + 
                healthExpenses + debtPayments + miscellaneousExpenses);
            if( x < 0) Alert.alert("Over budget by $" + String(x))
            else(Alert.alert("Meets budget with remaining amount of $" + String(x)))
            }
          }
      /> 
    </View>
    </TouchableWithoutFeedback>
  );
  }



  const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      height: 50,
      fontSize: 16,
      borderColor: '#2196f3',
      borderWidth: 1,
      color: '#2196f3'
    },
    radio: {
      marginHorizontal: 20
    },
    introText: {
      fontSize: 18,
      margin: 10,
    },
    result: {
      fontSize: 15,
      justifyContent: 'center',
    },
  });
  