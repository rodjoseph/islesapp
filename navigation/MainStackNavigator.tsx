import { createStackNavigator } from "@react-navigation/stack";
import HomebuyerScreen from "../screens/HomebuyerScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { MainStackParamList } from "../types";
import * as React from 'react';
import { Image } from 'react-native'
import { ContactScreen } from "../screens/AboutContact";
import ForeclosureScreen from "../screens/ForeclosureScreen";
import BudgetScreen from "../screens/BudgetScreen";
import CreditScreen from "../screens/Credit";
import { PrivacyPolicyScreen } from "../screens/PrivacyPolicy";
import { HowCreditScoresCalculatedScreen } from "../screens/HowCreditScoresCalculated";
import WebViewScreen from "../screens/WebViewScreen";
import PdfReaderScreen from "../screens/PdfReaderScreen";
import CardGameScreen from "../screens/CardGameScreen";
import ExpensesScreen from "../screens/Expenses";
import ExpensesReportScreen from "../screens/ExpenseReport";

const MainStack = createStackNavigator<MainStackParamList>();

const LogoTitle = () => {
    return (
        <Image
        style={{ width: 80, height: 30, padding: 4 }}
        source={require('../assets/images/isles_logo.png')}
        resizeMode="contain"
        />
    );
}

export function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle  />,}}
      />
      <MainStack.Screen name="Homebuying" component={HomebuyerScreen} options={{}}></MainStack.Screen>
      <MainStack.Screen name="Foreclosure" component={ForeclosureScreen} options={{}}></MainStack.Screen>
      <MainStack.Screen name="Budget" component={BudgetScreen} options={{}}></MainStack.Screen>
      <MainStack.Screen name="AboutContact" component={ContactScreen} options={{headerTitle: "About Us/ Contact"}}></MainStack.Screen>
      <MainStack.Screen name="Credit" component={CreditScreen} options={{}}></MainStack.Screen>
      <MainStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{}}></MainStack.Screen>
      <MainStack.Screen name="HowCreditScoresCalculated" component={HowCreditScoresCalculatedScreen} options={{headerTitle: "How Credit Scores are Calculated"}}></MainStack.Screen>
      <MainStack.Screen name="WebViewScreen" component={WebViewScreen}></MainStack.Screen>
      <MainStack.Screen name="PdfReaderScreen" component={PdfReaderScreen}></MainStack.Screen>
      <MainStack.Screen name="CardGameScreen" component={CardGameScreen} options={{headerTitle: "Learn About Credit"}}/>
      <MainStack.Screen name="ExpensesScreen" component={ExpensesScreen} options={{headerTitle: "Expenses"}}/>
      <MainStack.Screen name="ExpensesReportScreen" component={ExpensesReportScreen} options={{headerTitle: "Expenses"}}/>
    </MainStack.Navigator>
  );
}