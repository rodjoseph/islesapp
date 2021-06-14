import * as React from 'react';
import { StyleSheet, Linking, Image, useColorScheme } from 'react-native';
import { Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Scroller } from '../components/Scroller';
import Markdown from 'react-native-markdown-display';
import { MainStackParamList } from '../types';

type ContactScreenProps = StackScreenProps<MainStackParamList, 'AboutContact'>
export function ContactScreen({navigation} : ContactScreenProps) {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 20}}>
        <Text style={{fontSize: 16, marginVertical: 16}}>Isles offers one-on-one financial coaching services. Get the information and support you need to achieve your goals.
        </Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>Want to learn more about Isles?</Text>
        <Button title='Call us at 609-341-4740' onPress={()=>{Linking.openURL('tel:6093414740');}}/>
        <Text style={{alignSelf: 'center', paddingVertical: 10, textDecorationLine: 'underline', opacity: 0.8 }} onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>
      </View>
      <View>
        <Image style={{width: "70%", alignSelf: 'center'}} source={require('../assets/images/isles_logo.png')} resizeMode="contain"/>
      </View>
    </Scroller>
  );
}

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
