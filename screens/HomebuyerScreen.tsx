import * as React from 'react';
import { StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, Image, useColorScheme, ListRenderItem, Linking} from 'react-native';
import { Finance } from 'financejs'
import { Text, TextInput, View} from '../components/Themed';
import { StackNavigationProp, StackScreenProps, useHeaderHeight } from '@react-navigation/stack';
import { MainStackParamList } from '../types';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BuyHouseImg from '../assets/images/undraw_buy_house_560d.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
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
export default function HomebuyerScreen({navigation}: StackScreenProps<MainStackParamList, 'Homebuying'>) {

  const insets = useSafeAreaInsets()
  const colorScheme = useColorScheme()

  type PdfItem = {
    title?: string,
    pdfFile: string,
    id: string
  }
  const pdfs: PdfItem[] = [
    {
      title: "Pathway to Homebuying",
      pdfFile: "https://drive.google.com/file/d/1aMth_fdf_QyXN6eULznqmiGBX3NwXQP3/view?usp=sharing",
      id: '1',
    },
    {
      title: "Homeowner's Guide to Success",
      pdfFile: "https://drive.google.com/file/d/1zn-PhaPSHM9LghAIhvJY9aTwFtUF0RrA/view?usp=sharing",
      id: '2',
    },
    {
      title: "Home Loan Toolkit",
      pdfFile:  require('../assets/pdfs/HomeLoan.pdf'),//"https://drive.google.com/file/d/1sylbizY_lfYVRF8VM0-9mhCZBHKg_LXj/view?usp=sharing",
      id: '3',
    }
  ]
  const _renderPdf: ListRenderItem<PdfItem> = ({item}) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen', {url: item.pdfFile})} style={{padding: 10, height: 150, width: 130, backgroundColor: Colors[colorScheme!]["surface"], marginHorizontal: 10, borderRadius: 5}}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const headerHeight = useHeaderHeight()
  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 20 }}>
        <BuyHouseImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={{opacity: 0.6, marginVertical: 8}}>Want to buy your first home?</Text>
        <Text style={styles.baseText}>The first year of homeownership is often the most challenging. Our Pre-Purchase Counseling Program will help you prepare for the added expenses and responsibilities of owning a home, so you know what to expect, and where to turn for help. From setting a realistic household budget and reviewing credit reports, to explaining the home-ownership process and lending requirements, our counselors can help guide the way. </Text>
      </View>
      <View style={{paddingVertical: 20, marginTop: 10, marginBottom: 10, width: "100%"}}>
        <Text style={[styles.title, {paddingHorizontal: 14}]}>Resources</Text>
        <FlatList
          horizontal
          data={pdfs}
          renderItem={_renderPdf}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Scroller>
  );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
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
  