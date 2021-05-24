import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Linking, Alert, ImageURISource, ListRenderItem, Image } from 'react-native';
import { Button as NativeBaseButton, Content} from 'native-base'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import { MortgageCalculatorScreen } from './MortgageCalculatorScreen'
import { DebtCalculatorScreen } from './DebtCalculatorScreen'
import { FlatGrid, GridRenderItem } from 'react-native-super-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoins, faChartPie, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import HomebuyerScreen from './HomebuyerScreen';
import * as WebBrowser from 'expo-web-browser';
import { MainStackParamList } from '../types';
import { useTheme } from '../hooks/useTheme';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { inlineStyles } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
library.add(faCoins, faChartPie, faCoffee)

type NavigationItem = [
  name: string,
  description: string,
  bgColor: string,
  onPress: Function
]

async function openLink(url: string) {
  await WebBrowser.openBrowserAsync(url);
}


type IslesAppNavItem = {
  name?: string;
  subtitle?: string;
  imageSrc?: ImageURISource;
  onPress?: () => void;
}
export function HomeScreen({navigation}) {
  const [items, setItems] = React.useState([
    // { 
    //   name: 'Mortgage Calculator', 
    //   imageSrc: require('../assets/images/loan.png'),
    //   onPress: () => {navigation.navigate('Mortgage')}
    // },
    // { 
    //   name: 'Debt Calculator', 
    //   imageSrc: require('../assets/images/loan.png'),
    //   subtitle: "\"I want to get out of debt and stop living paycheck to paycheck\"", 
    //   onPress: () => {navigation.navigate('Debt')}
    // },
    { name: 'Budget',
      imageSrc: require('../assets/images/budgeting.png'),
      subtitle: "Know where your money is going",
      onPress: () => {navigation.navigate('Budget')}
    },
    
    { name: 'Homebuying',
    imageSrc: require('../assets/images/mortgage.png'),
      subtitle: "Want to buy your first home?",
      onPress: () => {navigation.navigate('Homebuying')}
    },
    { 
      name: 'Intake Form', 
      imageSrc: require('../assets/images/check-list.png'),
      subtitle: "Send your information to Isles for a follow-up",
      onPress: () => {openLink('http://tfaforms.com/335432/')}
    },
    { name: 'Foreclosure',
    imageSrc: require('../assets/images/bank-risk.png'),
      subtitle: 'Stop foreclosure and learn about your options',
      onPress: () => {navigation.navigate('Foreclosure')}
    },
    { 
      name: 'About Us/Contact', 
      imageSrc: require('../assets/images/help.png'),
      subtitle: "Learn about Isles or contact us.",
      onPress: () => {navigation.navigate('AboutContact')}
    },
    { 
      name: 'Credit', 
      imageSrc: require('../assets/images/risk.png'),
      subtitle: "Learn about Isles or contact us.",
      onPress: () => {navigation.navigate('AboutContact')}
    },
    { 
      name: 'Member Update', 
    }
  ]);

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme]
  

  const _renderCard: ListRenderItem<IslesAppNavItem> = ({item}) => {
    return(
      <View style={[styles.itemContainer, { backgroundColor: theme.surface}]}>
      <TouchableOpacity onPress={item.onPress}>
        {item.imageSrc?
          <Image style={{height: 100, width: "100%", marginVertical: 12}} source={item.imageSrc} resizeMode="contain"/> : 
          <></>
        }
        <Text style={styles.itemName}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.itemSubtitle}>{item.subtitle}</Text>
      </TouchableOpacity>
    </View>
    );
  }
  
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container]}>
      <FlatList
      data={items}
      numColumns={2}
      renderItem={_renderCard}
      style={{paddingVertical: "1%"}}
    />
    </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    shadowRadius: 50,
    width: "48%",
    height: 220,
    margin: "1%"
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemSubtitle: {
    fontSize: 14,
    opacity: 0.6
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
