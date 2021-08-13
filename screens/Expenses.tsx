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
import { BudgetInfo, MainStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';


type ExpensesScreenProps = StackScreenProps<MainStackParamList, 'ExpensesScreen'>

const ExpensesScreen = ({navigation} : ExpensesScreenProps) => {
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
      marginTop: 10, marginBottom: 10, marginHorizontal: 10, marginVertical: 10, fontSize: 20, 
      borderColor: Colors[colorScheme!]["text"], borderWidth: 1, padding: 8, 
      borderRadius: 5, color: Colors[colorScheme!]["text"], 
      borderTopColor: Colors[colorScheme!]["background"], borderTopWidth: 1, 
      borderBottomColor: Colors[colorScheme!]["background"], borderBottomWidth: 1, 
      borderLeftColor: Colors[colorScheme!]["background"], borderLeftWidth: 1,
      borderRightColor: Colors[colorScheme!]["background"], borderRightWidth: 1,
      backgroundColor: Colors[colorScheme!]["background"]
    }
  })

  return(
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Income</Text>
        <Text>Salary and wages</Text>
        <CurrencyInput
          value={budgetInfo?.salaryAndWages ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, salaryAndWages: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Other income</Text>
        <CurrencyInput
          value={budgetInfo?.otherIncome}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, otherIncome: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Income</Text>
        <Text>Housings</Text>
        <CurrencyInput
          value={budgetInfo?.housingExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, housingExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Food</Text>
        <CurrencyInput
          value={budgetInfo?.foodExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, foodExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Transportation</Text>
        <CurrencyInput
          value={budgetInfo?.transportationExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, transportationExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Child care</Text>
        <CurrencyInput
          value={budgetInfo?.childCareExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, childCareExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Credit cards and loans</Text>
        <CurrencyInput
          value={budgetInfo?.loanExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, loanExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Insurance</Text>
        <CurrencyInput
          value={budgetInfo?.insuranceExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, insuranceExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Entertainment</Text>
        <CurrencyInput
          value={budgetInfo?.entertainmentExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, entertainmentExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Retirement</Text>
        <CurrencyInput
          value={budgetInfo?.retirementExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, retirementExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Personal care</Text>
        <CurrencyInput
          value={budgetInfo?.personalCareExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, personalCareExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Pets</Text>
        <CurrencyInput
          value={budgetInfo?.petsExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, petsExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Other</Text>
        <CurrencyInput
          value={budgetInfo?.otherExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, otherExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Monthly Savings</Text>
        <Text>Emergency fund</Text>
        <CurrencyInput
          value={budgetInfo?.emergencyFunds ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, emergencyFunds: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Retirement</Text>
        <CurrencyInput
          value={budgetInfo?.retirementExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, retirementExpenses: value!})}
          //onChangeValue={setBudgetInfo(value => setBudgetInfo({...budgetInfo!, salaryAndWages: value}))}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
        <Text>Investments</Text>
        <CurrencyInput
          value={budgetInfo?.investmentExpenses ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, investmentExpenses: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        /><Text>Other</Text>
        <CurrencyInput
          value={budgetInfo?.otherSavings ?? 0}
          style={styles.currencyInput}
          onChangeValue={value => setBudgetInfo({...budgetInfo!, otherSavings: value!})}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
      </View>
      <Button title='Submit' onPress={()=>{navigation.navigate('ExpensesReportScreen', {budgetInfo: budgetInfo})}}/>

    </Scroller>
  )
}

export default ExpensesScreen

