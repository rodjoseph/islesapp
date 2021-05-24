import { Colors } from "react-native/Libraries/NewAppScreen";
import useColorScheme from "./useColorScheme";

export const useTheme = () => { 
    const colorScheme = useColorScheme();
    return Colors[colorScheme]
}