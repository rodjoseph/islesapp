import { createStackNavigator } from "@react-navigation/stack";
import { DebtCalculatorScreen } from "../screens/DebtCalculatorScreen";
import HomebuyerScreen from "../screens/HomebuyerScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { MortgageCalculatorScreen } from "../screens/MortgageCalculatorScreen";
import { MainStackParamList } from "../types";
import * as React from 'react';
import { Image } from 'react-native'
import { ContactScreen } from "../screens/AboutContact";
import BudgetCalculatorScreen from "../screens/BudgetCalculatorScreen";
import ForeclosureScreen from "../screens/ForeclosureScreen";
import BudgetScreen from "../screens/BudgetScreen";

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
        options={{ headerTitle: props => <LogoTitle  />}}
      />
      <MainStack.Screen name="Mortgage" component={MortgageCalculatorScreen} options={{headerTransparent: true}}></MainStack.Screen>
      <MainStack.Screen name="Debt" component={DebtCalculatorScreen} options={{headerTransparent: true}}></MainStack.Screen>
      <MainStack.Screen name="Homebuying" component={HomebuyerScreen} options={{headerTransparent: true}}></MainStack.Screen>
      <MainStack.Screen name="Foreclosure" component={ForeclosureScreen} options={{headerTransparent: true}}></MainStack.Screen>
      <MainStack.Screen name="Budget" component={BudgetScreen} options={{headerTransparent: true}}></MainStack.Screen>
      <MainStack.Screen name="AboutContact" component={ContactScreen} options={{headerTransparent: true}}></MainStack.Screen>
    </MainStack.Navigator>
  );
}