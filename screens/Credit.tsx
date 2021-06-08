import * as React from 'react';
import { Linking, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Section from '../components/Surface';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import CreditScoreImg from '../assets/images/speedometer.svg'
import { useHeaderHeight } from '@react-navigation/stack';
import { Scroller } from '../components/Scroller';
export default function CreditScreen() {

    const colorScheme = useColorScheme()
    const insets = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()
    return(
      <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginTop: headerHeight}}>
        {/*<PersonalFinanceImg width={350} height={100} style={{marginVertical: 20}}/>*/}
        <Text style={{opacity: 0.6, marginVertical: 8}}>Want to improve your credit?</Text>
        <Text style={styles.baseText}>We can review your credit report and answer questions about credit scoring, building a strong credit history and correcting any inaccuracies that appear. Our counselors tailor solutions to meet your needs.
        </Text>
      </View>
      <TouchableOpacity style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"}} onPress={() => Linking.openURL("https://drive.google.com/file/d/1TC4QMsz-bFDaeQZPrS58iFBehswIBCQ6/view?usp=sharing")}>
        <CreditScoreImg width={350} height={100} style={{marginVertical: 20}}/>
        <Text style={[styles.title, {paddingHorizontal: 14}]}>How Credit Scores Are Calculated</Text>
      </TouchableOpacity>
    </Scroller>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginVertical: 8
    },
    baseText: {
        fontSize: 16,
        marginVertical: 8
    }
  });
  