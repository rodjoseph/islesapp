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
import GameCard from '../components/CreditGameCard';
type CardGameScreenProps = StackScreenProps<MainStackParamList, 'CardGameScreen'>

export default function CardGameScreen({navigation} : CardGameScreenProps) {
  return(
  <View style={styles.container}>
    <FlatList
      data={slides}
      renderItem={({item}) => 
        <GameCard front={item.front} back={item.back}/>
      }
      ListHeaderComponent={() => 
        <View>
      <Text style={styles.title}>No Savings, Poor Credit: Why Does It Matter?</Text>
      <Text>Flip a card to learn more about the topic.</Text>
      </View>
    }
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 14,
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
  