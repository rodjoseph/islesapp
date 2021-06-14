import * as React from 'react';
import { StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, Image, useColorScheme, Linking} from 'react-native';
import { Finance } from 'financejs'
import { Text, TextInput, View} from '../components/Themed';
import { Button, Card } from 'react-native-elements';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';
import BuyHouseImg from '../assets/images/undraw_buy_house_560d.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import MortgageLoan from '../assets/images/mortgage-loan.svg'
import { Scroller } from '../components/Scroller';
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

export default function ForeclosureScreen({navigation}: StackScreenProps<MainStackParamList, 'Foreclosure'>) {

  const insets = useSafeAreaInsets()
  const colorScheme = useColorScheme()
  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14}}>
        <BuyHouseImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={{opacity: 0.6, marginVertical: 8}}>Want to get to stop foreclosure and learn about your options?</Text>
        <Text style={styles.baseText}>We are a HUD-certified counseling agency and can make sure you know and understand all of your options, should you ever feel your financial situation threatens your home. Foreclosure prevention can be an overwhelming subject to tackle on your own when struggling to make mortgage payments on your home. 
IFS housing counselors can help guide the way. We are readily available to help you make sense of it all.
</Text>
      </View>
      <TouchableOpacity style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"}} onPress={() => navigation.navigate('WebViewScreen', {url: "http://expo.io"})}>
        <MortgageLoan width="100%" height={150}/>
        <Text style={[styles.title, {paddingHorizontal: 14}]}>Homeowner's Guide to Success</Text>
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
        marginVertical: 8
    },
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  });
  