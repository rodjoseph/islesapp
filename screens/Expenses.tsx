import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ListRenderItem, View, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons'
import {FloatingButton, ListItem, MaskedInput, Picker, TextField, Modal} from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, TopNavigationAction} from '@ui-kitten/components';
import CurrencyInput from 'react-native-currency-input';

// import { Scroller } from '../components/Scroller';
import { Text } from '../components/Themed'
import { Scroller } from '../components/Scroller';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Button } from 'react-native-elements';


type BudgetInfo = {
  salaryAndWages: number,
  otherIncome: number,
  housingExpenses: number,
  foodExpenses: number,
  transportationExpenses: number,
  childCareExpenses: number,
  loanExpenses: number,
  insuranceExpenses: number,
  entertainmentExpenses: number,
  personalCareExpenses: number,
  petsExpenses: number,
  otherExpenses: number,
  emergencyFunds: number,
  retirementExpenses: number,
  investmentExpenses: number,
  otherSavings: number
}
const ExpensesScreen = () => {
  const colorScheme = useColorScheme()
  const [budgetInfo, setBudgetInfo] = React.useState<BudgetInfo>({
    salaryAndWages: 0,
    otherIncome: 0,
    housingExpenses: 0,
    foodExpenses: 0,
    transportationExpenses: 0,
    childCareExpenses: 0,
    loanExpenses: 0,
    insuranceExpenses: 0,
    entertainmentExpenses: 0,
    personalCareExpenses: 0,
    petsExpenses: 0,
    otherExpenses: 0,
    emergencyFunds: 0,
    retirementExpenses: 0,
    investmentExpenses: 0,
    otherSavings: 0
  })

  const styles = StyleSheet.create({
    currencyInput: {
      marginTop: 10, marginBottom: 10, marginHorizontal: 10, marginVertical: 10, fontSize: 20, borderColor: Colors[colorScheme!]["text"], borderWidth: 1, padding: 8, borderRadius: 5, color: Colors[colorScheme!]["text"]}
          
  })

  return(
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Income</Text>
        <Text>Salary and wages</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Other income</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Income</Text>
        <Text>Housings</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Food</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Transportation</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Child care</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Credit cards and loans</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Insurance</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Entertainment</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Retirement</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Personal care</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Pets</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Other</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Savings</Text>
        <Text>Emergency fund</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Retirement</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
        <Text>Investments</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        /><Text>Other</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
      </View>
      <Button title='Submit' onPress={()=>{}}/>

    </Scroller>
  )
}

export default ExpensesScreen

