import * as React from 'react';
import { StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, Image, useColorScheme, Linking} from 'react-native';
import { Finance } from 'financejs'
import { Text, TextInput, View} from '../components/Themed';
import { Button } from 'react-native-elements';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';
import PersonalFinanceImg from '../assets/images/undraw_personal_finance_tqcd.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import { Scroller } from '../components/Scroller';
import PiggyPankSvg from '../assets/images/piggy-bank.svg'
import ExpenseTrackerIcon from '../assets/images/expensetrackericon.svg'
import SavingsImg from '../assets/images/budget.svg'
type CustomButtonProps = {
    title?: string,
    onPress?: () => void;
    children: string;
}
function CustomButton({title, onPress} : CustomButtonProps) {
    return(
        <TouchableOpacity style={{backgroundColor: 'blue', padding: 12, borderRadius: 6, marginVertical: 8}} onPress={() => onPress}>
            <Text style={{fontSize: 16}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function BudgetScreen({navigation} : StackScreenProps<MainStackParamList, 'Credit'>) {

  const insets = useSafeAreaInsets()
  const colorScheme = useColorScheme()
  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <SavingsImg width={350} height={100} style={{marginVertical: 20}}/>
        {/*<PersonalFinanceImg width={350} height={100} style={{marginVertical: 20}}/>*/}
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Budgeting: Our Services</Text>
        <Text style={{opacity: 0.6, marginVertical: 8, textAlign: 'center'}}>Want to get out of debt and stop living paycheck to paycheck?</Text>
        <Text style={styles.baseText}>Financial coaches can review your current spending patterns, create a spending plan that allows you to take charge of your financial situation on both month to-month basis and in the long term. They also discuss your financial goals and develop an action plan for overcoming challenges so you can achieve those goals. We provide you judgement-free options to get out of debt. 
        </Text>
      </View>
      <TouchableOpacity style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"}} onPress={() => navigation.navigate('ExpensesScreen')}>
        <ExpenseTrackerIcon width="100%" height={100} style={{marginVertical: 20}}/>
        <Text style={[styles.title, {paddingHorizontal: 14}]}>Expense Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"}} onPress={() => Linking.openURL("https://drive.google.com/file/d/1j18gafhvOeh7imXGiwVKCF-7TELB_9mo/view?usp=sharing")}>
        <PiggyPankSvg width="100%" height={100} style={{marginVertical: 20}}/>
        <Text style={[styles.title, {paddingHorizontal: 14}]}>Saving and Spending</Text>
      </TouchableOpacity>
    </Scroller>
  );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    cardContainer: {
      flex: 1,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginVertical: 8,
      textAlign: 'center'
    },
    baseText: {
        fontSize: 16,
        marginVertical: 8,
        textAlign: 'center'
    },
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  });
  