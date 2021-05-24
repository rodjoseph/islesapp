import * as React from 'react';
import { StyleSheet, Linking, Image, useColorScheme } from 'react-native';
import { Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export function ContactScreen() {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <ScrollView contentContainerStyle={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 20}}>
        <Text style={{fontSize: 16, marginVertical: 16}}>Isles offers one-on-one financial coaching services. Get the information and support you need to achieve your goals.
        </Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>Want to learn more about Isles?</Text>
        <Button title='Call us at 609-341-4714' onPress={()=>{Linking.openURL('tel:6093414714');}}/>
      </View>
      <View>
        <Image style={{width: "100%"}} source={require('../assets/images/isles_logo.png')} resizeMode="contain"/>
      </View>
      {/* <Text style={{fontSize: 16, marginVertical: 16, opacity: 0.6}}>&copy; 2021 Isles Financial Services</Text> */}
    </ScrollView>
  );
}

{/* TODO: FormAssembly API and intake form: https://www3.formassembly.com/api/ */}
{/*
function IntakeScreen({navigation}) {
  return (
    
    <View></View>
  );
}
*/}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
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
