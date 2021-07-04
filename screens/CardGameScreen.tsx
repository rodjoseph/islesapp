import * as React from 'react';
import { Linking, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Section from '../components/Surface';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import CreditScoreImg from '../assets/images/speedometer.svg'
import { StackNavigationProp, StackScreenProps, useHeaderHeight } from '@react-navigation/stack';
import { Scroller } from '../components/Scroller';
import { MainStackParamList } from '../types';
import { slides } from '../constants/CreditSlides';
import { renderCard } from '../components/CreditGameCard';

type CardGameScreenProps = StackScreenProps<MainStackParamList, 'CardGameScreen'>

export default function CardGameScreen({navigation} : CardGameScreenProps) {
  return(
  <View>
    <FlatList
      data={slides}
      renderItem={renderCard}
    />
  </View>
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
  