import React from 'react';
import { ListRenderItem, View, StyleSheet, Linking } from 'react-native';
// import { Scroller } from '../components/Scroller';
import { Text } from '../components/Themed'
import { Scroller } from '../components/Scroller';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BudgetInfo, MainStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import qs from 'qs';

type ExpensesReportScreenProps = StackScreenProps<MainStackParamList, 'ExpensesReportScreen'>

export async function sendEmail(to: string, subject: string, body: string, options: {cc: string, bcc: string}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

const ExpensesReportScreen = ({route, navigation} : ExpensesReportScreenProps) => {
  const colorScheme = useColorScheme()
  const {budgetInfo} = route.params
  const totalMonthlyIncome = budgetInfo.salaryAndWages + budgetInfo.otherIncome
  const totalMonthlyExpenses = budgetInfo.housingExpenses + budgetInfo.foodExpenses + budgetInfo.transportationExpenses + budgetInfo.childCareExpenses + budgetInfo.loanExpenses + budgetInfo.insuranceExpenses + budgetInfo.entertainmentExpenses + budgetInfo.personalCareExpenses + budgetInfo.petsExpenses + budgetInfo.otherExpenses
  const totalMonthlySavings = budgetInfo.emergencyFunds + budgetInfo.retirementExpenses + budgetInfo.otherSavings + budgetInfo.investmentExpenses
  const overUnderBudget = totalMonthlyIncome - totalMonthlyExpenses - totalMonthlySavings
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  const styles = StyleSheet.create({
    currencyInput: {
      marginTop: 10, marginBottom: 10, marginHorizontal: 10, marginVertical: 10, fontSize: 20, borderColor: Colors[colorScheme!]["text"], borderWidth: 1, padding: 8, borderRadius: 5, color: Colors[colorScheme!]["text"]}
          
  })

  return(
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total Monthly Income</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>{formatter.format(totalMonthlyIncome)}</Text>
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total Monthly Expenses</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>{formatter.format(totalMonthlyExpenses)}</Text>
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total Monthly Savings</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>{formatter.format(totalMonthlySavings)}</Text>
      </View>
      <View style={{backgroundColor: overUnderBudget < 0 ? 'red' : 'green', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Under/Over Budget</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>{formatter.format(overUnderBudget)}</Text>
      </View>
      {/* <Button title='Submit to Isles' onPress={()=> sendEmail("apatel@isles.org", "Budget Report", "")/> */}
    </Scroller>
  )
}

export default ExpensesReportScreen
