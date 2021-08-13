import { Link } from "@react-navigation/native"
import * as React from "react"
import { Linking, TouchableOpacityProps } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export type CustomButtonProps = TouchableOpacityProps

const CustomButton = (props: CustomButtonProps) => {
    return(
        <TouchableOpacity style={{width: "100%", paddingHorizontal: 8, paddingVertical: 18}}>

        </TouchableOpacity>
    )
}

export const MakeAppointmentButton = () => <CustomButton onPress={() => Linking.openURL}/>