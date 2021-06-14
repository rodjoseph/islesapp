import * as React from 'react';
import { StyleSheet } from 'react-native'
import { View, Text } from '../components/Themed';
import { MainStackParamList } from '../types';
import { WebView }  from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type WebViewScreenProps = StackScreenProps<MainStackParamList, 'WebViewScreen'>

export default function WebViewScreen({route, navigation} : WebViewScreenProps) {
    return(
        <WebView source={{ uri: route.params.url }} startInLoadingState={true}/>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
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
  