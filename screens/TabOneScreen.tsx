import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Linking } from 'react-native';
import { Button as NativeBaseButton, Content} from 'native-base'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import { MortgageCalculatorScreen } from './MortgageCalculatorScreen'
import { DebtCalculatorScreen } from './DebtCalculatorScreen'
import { FlatGrid } from 'react-native-super-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoins, faChartPie, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

const Stack = createStackNavigator();
library.add(faCoins, faChartPie, faCoffee)

function HomeScreen({navigation}) {
  const [items, setItems] = React.useState([
    { name: 'Mortgage Calculator', bgColor: '#3498db', onPress: () => {navigation.navigate('Mortgage Calculator')}},
    { name: 'Debt Calculator', bgColor: '#9b59b6', onPress: () => {navigation.navigate('Debt Calculator')}},
    { name: 'Budget', bgColor: '#16a085', onPress: () => {navigation.navigate('Budget Calculator')}},
    { name: 'Intake Form (opens external link)', bgColor: '#3498db', onPress: () => {Linking.openURL('http://tfaforms.com/335432/')}},
  ]);
  return (
    <View style={styles.container}>
      <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.bgColor }]}>
          <TouchableOpacity onPress={item.onPress}>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
    </View>
  );
}

export default function TabOneScreen() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Mortgage Calculator" component={MortgageCalculatorScreen}></Stack.Screen>
        <Stack.Screen name="Debt Calculator" component={DebtCalculatorScreen}></Stack.Screen>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
