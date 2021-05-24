import * as React from 'react';
import { StyleSheet } from 'react-native'
import { View, Text } from '../components/Themed';

export default function CreditScreen() {
    return(
        <View style={styles.container}>
          <Text>We can review your credit report and answer questions about credit scoring, building a strong credit history and correcting any inaccuracies that appear. Our counselors tailor solutions to meet your needs.
          </Text>
        </View>
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
  