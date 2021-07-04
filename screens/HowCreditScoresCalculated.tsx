import * as React from 'react';
import { StyleSheet, Linking, Image, useColorScheme } from 'react-native';
import { Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Scroller } from '../components/Scroller';
import Markdown from 'react-native-markdown-display';
import { MainStackParamList } from '../types';

import CreditScoreImg from '../assets/images/speedometer.svg'
import DebtNounImg from '../assets/images/speedometer.svg'
import CreditHistory from '../assets/images/credithistory.svg'
import PaymentHistory from '../assets/images/paymenthistory.svg'
import DebtGraph from '../assets/images/debtgraph.svg'
import NewCredit from '../assets/images/newcredit.svg'
import Loans from '../assets/images/loans.svg'
type HowCreditScoresCalculatedScreenProps = StackScreenProps<MainStackParamList, 'HowCreditScoresCalculated'>
export function HowCreditScoresCalculatedScreen({navigation} : HowCreditScoresCalculatedScreenProps) {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 20, width: '100%'}}>
        <CreditScoreImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.title}>How Credit Scores are Calculated</Text>
        <Text style={styles.baseText}>Credit scores are based on the information in a person's credit report. While scoring models may vary, the way you use and repay debt affects your credit score. Paying loans on time and staying well below your credit limit helps you get and keep good credit.</Text>
        <PaymentHistory width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.subtitle}>Payment history</Text>
        <Text style={styles.baseText}>Whether a person is paying bills on time and as agreed.</Text>
        <DebtGraph width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.subtitle}>Total debt, balances, and utilization</Text>
        <Text style={styles.baseText}>Total owed and available credit remaining.</Text>
        <CreditHistory width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.subtitle}>Depth/length of credit history</Text>
        <Text style={styles.baseText}>How long a person has had an account or loan.</Text>
        <NewCredit width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.subtitle}>New/recent credit</Text>
        <Text style={styles.baseText}>All new loans or accounts and all creditor credit report requests.</Text>
        <Loans width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={styles.subtitle}>Types of credit used</Text>
        <Text style={styles.baseText}>Credit cards (revolving credit) and loans (installment credit).</Text>
      </View>
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
    width: "100%",
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8
  },
  baseText: {
      fontSize: 16,
      marginVertical: 8,
      opacity: 0.6
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
});
