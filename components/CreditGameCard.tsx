import React, { useRef } from "react"
import { CreditSlideContent } from "../constants/CreditSlides"
import CardFlip from 'react-native-card-flip';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from '../components/Themed'
import { StyleSheet } from 'react-native'
import { ListRenderItem } from "react-native";

export const renderCard: ListRenderItem<CreditSlideContent> = ({item}) => {

    const card = useRef<CardFlip>(null);

    return(
        <>
        <CardFlip style={styles.cardContainer} ref={card} >
            <TouchableOpacity style={styles.card} onPress={() => card.current?.flip()} ><Text>{item.front}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => card.current?.flip()} ><Text>{item.back}</Text></TouchableOpacity>
        </CardFlip>
        <Text>{item.front}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        backgroundColor: 'red'
    },
    card: {
        borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 10, width: "100%"
    }
});