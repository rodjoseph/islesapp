import * as React from "react";
import { Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { View } from "../components/Themed";


const ToolsScreen = ({navigation}) => {
    const toolsScreens = [
        {
            title: "Mortgage Calculator",
            subtitle: "Calculate how much a house would cost you based on price and interest rate",
            imageSrc: ""
        },
        {
            title: "Debt Calculator",
            subtitle: "Calculate how much it would cost you a month if you took out a loan.",
            imageSrc: ""
        }
    ]


    return(
        <FlatList
            data={toolsScreens}
            renderItem={({item}) => 
            <View style={{flexDirection: 'row'}}>
                <Image source={item.imageSrc} />
            </View>
        }
        />
    )
}