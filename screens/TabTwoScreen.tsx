import * as React from 'react';
import { StyleSheet, Linking, Button, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ContactScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Contact Us</Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <Text>Want to learn more about IFS?</Text>
    <Button title='Call 609-341-4714' onPress={()=>{Linking.openURL('tel:6093414714');}}/>
    <Image style={styles.logo} source={require('../assets/images/isles_logo.png')}/>
    </View>
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


export default function TabTwoScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Contact Us" component={ContactScreen}></Stack.Screen>
    {/* <Stack.Screen name="Intake Form" component={IntakeScreen}></Stack.Screen> */}
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  paragraph: {
    marginVertical: 30,
    alignItems: 'center',
  },
});
