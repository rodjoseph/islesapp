import { Header } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Colors from "../constants/Colors"
import { View, ViewProps } from "./Themed"



export const Scroller = (props: ViewProps) => {
    const insets = useSafeAreaInsets()
    const colorScheme = useColorScheme()
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: Colors[colorScheme!]["background"]}} contentContainerStyle={[styles.container, {paddingBottom: insets.bottom, paddingTop: 14, backgroundColor: Colors[colorScheme!]["background"]}]} contentInsetAdjustmentBehavior="always">
            <View>
            {props.children}
            </View>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 14,
      width: '100%',
    },
})