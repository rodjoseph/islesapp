import * as React from 'react';
import { StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, Image, useColorScheme} from 'react-native';
import { Finance } from 'financejs'
import { blue100 } from 'react-native-paper/lib/typescript/src/styles/colors';
import { Text, TextInput, View} from '../components/Themed';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../types';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';
import BuyHouseImg from '../assets/images/undraw_buy_house_560d.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';

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

export default function ForeclosureScreen({}: StackNavigationProp<MainStackParamList, 'Foreclosure'>) {

  const insets = useSafeAreaInsets()
  const colorScheme = useColorScheme()
  return (
    <ScrollView contentContainerStyle={[styles.container, {paddingBottom: insets.bottom}]}>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14}}>
        <BuyHouseImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={{opacity: 0.6, marginVertical: 8}}>Want to get to stop foreclosure and learn about your options?</Text>
        <Text style={styles.baseText}>We are a HUD-certified counseling agency and can make sure you know and understand all of your options, should you ever feel your financial situation threatens your home. Foreclosure prevention can be an overwhelming subject to tackle on your own when struggling to make mortgage payments on your home. 
IFS housing counselors can help guide the way. We are readily available to help you make sense of it all.
</Text>
        <TouchableOpacity style={{padding: 14, backgroundColor: Colors[colorScheme!]["primary"], borderRadius: 6, marginVertical: 10, alignContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#ffffff', fontSize: 16}}>Make an appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
      marginVertical: 8
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
  