import * as React from "react";
import PDFReader from 'rn-pdf-reader-js'
import { MainStackParamList } from '../types';
import { WebView }  from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

type PdfReaderScreenProps = StackScreenProps<MainStackParamList, 'PdfReaderScreen'>

export default function PdfReaderScreen({route, navigation} : PdfReaderScreenProps) {
    return(
        <PDFReader
        source={{
          uri: route.params.uri,
        }}
      />
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
  