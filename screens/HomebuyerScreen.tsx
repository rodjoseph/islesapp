import * as React from 'react';
import { StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, Image, useColorScheme, ListRenderItem, Linking} from 'react-native';
import { Finance } from 'financejs'
import { blue100 } from 'react-native-paper/lib/typescript/src/styles/colors';
import { Text, TextInput, View} from '../components/Themed';
import { Button } from 'react-native-elements';
import { StackNavigationProp, useHeaderHeight } from '@react-navigation/stack';
import { MainStackParamList } from '../types';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';
import BuyHouseImg from '../assets/images/undraw_buy_house_560d.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Constants from 'expo-constants';

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
export default function HomebuyerScreen({}: StackNavigationProp<MainStackParamList, 'Homebuying'>) {

  const insets = useSafeAreaInsets()
  const colorScheme = useColorScheme()

  type PdfItem = {
    title?: string,
    pdfFile: any
  }
  const pdfs: PdfItem[] = [
    {
      title: "Pathway to Homebuying",
      pdfFile: require('./pdfs/Pathway_to_Home_Buying.pdf')
    },
    {
      title: "Homeowner's Guide to Success",
      pdfFile: require('./pdfs/HomeownersGuide.pdf')
    },
    {
      title: "Home Loan Toolkit",
      pdfFile: require('./pdfs/HomeLoan.pdf')
    }
  ]
  const _renderPdf: ListRenderItem<PdfItem> = ({item}) => {
    return(
      <TouchableOpacity onPress={() => Linking.openURL(item.pdfFile)} style={{padding: 10, height: 150, width: 130, backgroundColor: 'gray', marginHorizontal: 10, borderRadius: 5}}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const headerHeight = useHeaderHeight()
  return (
    <ScrollView contentContainerStyle={[styles.container, {paddingTop: insets.top + headerHeight + Constants.statusBarHeight}]}>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10}}>
        <BuyHouseImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={{opacity: 0.6, marginVertical: 8}}>"I want to buy my first home"</Text>
        <Text style={styles.baseText}>The first year of homeownership is often the most challenging. Our Pre-Purchase Counseling Program will help you prepare for the added expenses and responsibilities of owning a home, so you know what to expect, and where to turn for help. From setting a realistic household budget and reviewing credit reports, to explaining the home-ownership process and lending requirements, our counselors can help guide the way. </Text>
        <TouchableOpacity style={{padding: 14, backgroundColor: Colors[colorScheme!]["primary"], borderRadius: 6, marginVertical: 10, alignContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#ffffff', fontSize: 16}}>Make an appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"}}>
        <Text style={styles.title}>Resources</Text>
        <FlatList
          horizontal
          data={pdfs}
          renderItem={_renderPdf}
        />
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
  