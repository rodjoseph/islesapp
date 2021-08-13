import React, { useRef } from "react"
import { CreditSlideContent } from "../constants/CreditSlides"
import CardFlip from 'react-native-card-flip';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from '../components/Themed'
import { StyleSheet } from 'react-native'

interface GameCardProps {
  front: string;
  back: string;
}

const GameCard = ({front, back} : GameCardProps) => {
    const card = useRef<CardFlip>(null);
    return (
        <CardFlip style={styles.cardContainer} ref={card}>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.card, styles.card1]}
                onPress={() => card.current?.flip()}>
                <Text style={[styles.frontText, styles.cardText]}>{front}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.card, styles.card2]}
                onPress={() => card.current?.flip()}>
                <Text style={[styles.backText, styles.cardText]}>{back}</Text>
            </TouchableOpacity>
        </CardFlip>
    );
};


export default GameCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    cardContainer: {
      width: '100%',
      height: 300,
      marginVertical: 10
    },
    card: {
    width: '100%',
    height: 300,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      padding: 10,
      alignContent: 'center',
      justifyContent: 'center',
      
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    frontText: {
      textAlign: 'center',
      fontSize: 54,
      fontFamily: 'System',
      backgroundColor: 'transparent',
    },
    backText: {
        fontSize: 24,
    },
    cardText: {
        color: '#ffffff'
    }
  });
  