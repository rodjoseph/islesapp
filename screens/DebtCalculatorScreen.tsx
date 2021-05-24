import * as React from 'react';
import { StyleSheet, View, Alert, Keyboard, TextInput, Text } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements'
import { Finance } from 'financejs'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let finance = new Finance();

export function DebtCalculatorScreen({navigation}) {
  const [principal, setPrincipal] = React.useState<number>()
  const [interestRate, setInterestRate] = React.useState<number>()
  const [numberOfPayments, setNumberOfPayments] = React.useState<number>() 

  const buttons = ['years', 'months']
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0)
  const updateSelectedIndex = (n: number) => {setSelectedIndex(n)}
  var radio_props = [
    {label: <Text>years</Text>, value: 0 },
    {label: <Text>months</Text>, value: 1 }
  ];

   function getInitialState () {
    return {
      value: 0,
    }
  }

  const [result, setResult] = React.useState<number>(null)

  return (
    <View style={styles.container}>

      <Input style={styles.textinput} 
        leftIcon={{ type: 'font-awesome', name: 'dollar', color: 'grey' }}
        placeholder="Amount ($)"
        keyboardType='numeric'
        onChangeText={(text1) => setPrincipal(Number(text1))}
      />
      <Input style={styles.textinput} 
        leftIcon={{ type: 'font-awesome', name: 'percent', color: 'grey' }}
        placeholder="Interest Rate (%)"
        keyboardType='numeric'
        onChangeText={(text2) => setInterestRate(Number(text2))}
      />
      <Input style={styles.textinput} 
        leftIcon={{ type: 'font-awesome', name: 'comment', color: 'grey' }}
        placeholder="Number of payments"
        keyboardType='numeric'
        onChangeText={(text3) => setNumberOfPayments(Number(text3))}
      />
      <ButtonGroup
      onPress={updateSelectedIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 40, borderRadius: 10}}
    />
      <Button title="Calculate payment"
        onPress={() => {
          Keyboard.dismiss(); 
          try {
            setResult(finance.AM(principal!, interestRate!, numberOfPayments!, Number(selectedIndex)));
          }
          catch (error) {
            Alert.alert(error);
          }
          console.log(result)
        }
      }
      />
      {result? (
        <>
      <Text style={{fontSize: 58, fontWeight: 'bold', alignContent: 'center', alignItems: 'center'}}>
        ${result.toFixed(2)}
      </Text><Text style={{fontSize: 24, color: 'grey'}}>/month</Text></>) : <></>
      }
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      paddingLeft: 0,
      backgroundColor: '#cccccc',
      color: '#424242',
      width: '100%',
      padding: 12,
      borderRadius: 4,
      textAlignVertical: 'top'
    },
    result: {
      fontSize: 15,
      justifyContent: 'center',
    },
  });
  