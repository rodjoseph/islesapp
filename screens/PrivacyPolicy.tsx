import * as React from 'react';
import { StyleSheet, Linking, Image, useColorScheme } from 'react-native';
import { Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Scroller } from '../components/Scroller';
import Markdown from 'react-native-markdown-display';
import { MainStackParamList } from '../types';
const Stack = createStackNavigator();

type PrivacyPolicyScreenProps = StackScreenProps<MainStackParamList, 'PrivacyPolicy'>

export function PrivacyPolicyScreen({navigation} : PrivacyPolicyScreenProps) {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <Scroller>
      <View style={{backgroundColor: Colors[colorScheme!]["surface"], borderRadius: 10, paddingVertical: 20, paddingHorizontal: 14, marginVertical: 20}}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.textSection}>
            Isles, Inc. built the Isles app as an Open Source app. This SERVICE is provided by Isles, Inc. at no cost and is intended for use as is.
            
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Isles unless otherwise defined in this Privacy Policy.
            </Text>
            <Text style={styles.sectionHeader}>Information Collection and Use</Text>
            <Text style={styles.textSection}>
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to IP address, usage statistics, information provided by user for onboarding such as name and address. The information that we request will be retained by us and used as described in this privacy policy.
            
            The app does use third party services that may collect information used to identify you.
            
            {/* Link to privacy policy of third party service providers used by the app:
            
            <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/policies/privacy/")}>Google Play Services</TouchableOpacity>{"\n"}

            <TouchableOpacity onPress={() => Linking.openURL("https://expo.io/privacy")}><Text>Expo</Text></TouchableOpacity>{"\n"} */}
            </Text>
            <Text style={styles.sectionHeader}>Log Data</Text>
            <Text style={styles.textSection}>
            We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            </Text>
            <Text style={styles.sectionHeader}>Cookies</Text>
            <Text style={styles.textSection}>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
            
            This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </Text>
            <Text style={styles.sectionHeader}>Service Providers</Text>
            <Text style={styles.textSection}>
            We may employ third-party companies and individuals due to the following reasons:
            
            *   To facilitate our Service;
            *   To provide the Service on our behalf;
            *   To perform Service-related services; or
            *   To assist us in analyzing how our Service is used.
            
            We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </Text>
            <Text style={styles.sectionHeader}>Security</Text>
            <Text style={styles.textSection}>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </Text>
            <Text style={styles.sectionHeader}>Links to Other Sites</Text>
            <Text style={styles.textSection}>
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </Text>
            <Text style={styles.sectionHeader}>Children’s Privacy</Text>
            <Text style={styles.textSection}>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </Text>
            <Text style={styles.sectionHeader}>Changes to This Privacy Policy</Text>
            <Text style={styles.textSection}>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            
            This policy is effective as of 2021-06-08
            </Text>
            <Text style={styles.sectionHeader}>Contact Us</Text>
            <Text>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at infotech@isles.org.
            </Text>
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
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    marginTop: 20,
    paddingVertical: 10
  },
  textSection: {
      paddingVertical: 5
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
