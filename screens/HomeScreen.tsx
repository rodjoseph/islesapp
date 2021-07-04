import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Linking, Alert, ImageURISource, ListRenderItem, Image } from 'react-native';
import { createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import { Text, View, TextInput } from '../components/Themed';
import { faCoins, faChartPie, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library, IconName } from '@fortawesome/fontawesome-svg-core'
import * as WebBrowser from 'expo-web-browser';
import { MainStackParamList } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Scroller } from '../components/Scroller';
import PDFReader from 'rn-pdf-reader-js'

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

type HomeScreenProps = StackScreenProps<MainStackParamList, 'Home'>

export function HomeScreen({navigation} : HomeScreenProps) {
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
    { name: 'Budgeting',
      imageSrc: require('../assets/images/budgeting.png'),
      subtitle: "Know where your money is going",
      onPress: () => {navigation.navigate('Budget')}, 
      id: 1
    },
    { 
      name: 'Credit', 
      imageSrc: require('../assets/images/risk.png'),
      subtitle: "Learn about Isles or contact us.",
      onPress: () => {navigation.navigate('Credit')},
      id: 6
    },
    { name: 'Homebuying',
    imageSrc: require('../assets/images/mortgage.png'),
      subtitle: "Want to buy your first home?",
      onPress: () => {navigation.navigate('Homebuying')},
      id: 2
    },
    // { 
    //   name: 'Intake Form', 
    //   imageSrc: require('../assets/images/check-list.png'),
    //   subtitle: "Send your information to Isles for a follow-up",
    //   onPress: () => {navigation.navigate('WebViewScreen', {url: 'http://tfaforms.com/335432/'})},
    //   id: 3
    // },
    { name: 'Foreclosure',
    imageSrc: require('../assets/images/bank-risk.png'),
      subtitle: 'Stop foreclosure and learn about your options',
      onPress: () => {navigation.navigate('Foreclosure')},
      id: 4
    },


    // { 
    //   name: 'Member Update', 
    // }
  ]);

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme]
  

  const _renderCard: ListRenderItem<IslesAppNavItem> = ({item}) => {
    return(
      <View style={[styles.itemContainer, { backgroundColor: theme.surface}]}>
      <TouchableOpacity onPress={item.onPress}>
        {item.imageSrc?
          <Image style={{height: 100, width: "100%", marginVertical: 14}} source={item.imageSrc} resizeMode="contain"/> : 
          <></>
        }
        <Text style={styles.itemName}>{item.name}</Text>
        {/*<Text numberOfLines={2} style={styles.itemSubtitle}>{item.subtitle}</Text>*/}
      </TouchableOpacity>
    </View>
    );
  }
  
  const insets = useSafeAreaInsets()

  return (
    <Scroller>
      <FlatList
      data={items}
      numColumns={2}
      renderItem={_renderCard}
      style={{paddingVertical: 24}}
      ListHeaderComponent={<Text style={{fontSize: 16, opacity: 0.8, marginVertical: 8, marginHorizontal: 8, textAlign: "center"}}>Isles Financial Solutions (IFS) is a financial health service for low to moderate income individuals. IFS tailor’s financial solutions to meet your goals and needs with our innovative approach.</Text>}
      ListFooterComponent={
      <View style={[styles.itemContainer, { backgroundColor: theme.surface, width: "98%", height: 180}]}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutContact')}>
            <Image style={{height: 100, width: "100%", marginVertical: 14}} source={require('../assets/images/1480796.png')} resizeMode="contain"/>
          <Text style={styles.itemName}>About/Contact Us</Text>
        </TouchableOpacity>
      </View>
      }
    />
    
    </Scroller>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginHorizontal: 8
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 14,
    shadowRadius: 50,
    width: "48%",
    height: 200,
    margin: "1%"
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 5
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
