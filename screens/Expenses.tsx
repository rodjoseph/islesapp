import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ListRenderItem, View} from 'react-native';
import { Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons'
import {Colors, FloatingButton, ListItem, MaskedInput, Picker, TextField, Text, Modal} from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, TopNavigationAction} from '@ui-kitten/components';
// import { Scroller } from '../components/Scroller';

type TrackerItem = {
    amount: string,
    name: string
    type: string
}

const TRACKERITEM_TYPE_OPTIONS = [
  {label: 'Saving', value: 'Saving'},
  {label: 'Expense', value: 'Expense'},
  {label: 'Income', value: 'Income'},
];

interface TrackerItemModalProps {
  visible: boolean,
  onClose: () => void,
  trackerItem?: TrackerItem
  onSubmit: (trackerItem: TrackerItem) => void
}

export const TrackerItemModal = (props: TrackerItemModalProps) => {
  const {
    visible,
    onClose,
    trackerItem,
    onSubmit
  } = props;

  const [newTrackerItem, setNewTrackerItem] = React.useState<TrackerItem>()
  const [errorMsg, setErrorMsg] = React.useState("")
  return(
    <Modal visible={visible} onRequestClose={onClose}>
      <SafeAreaView>
      <Modal.TopBar
        title="Tracker Item"
        onCancel={onClose}
        onDone={() => {
          Alert.alert(JSON.stringify(newTrackerItem));
          onClose()
        }}
        doneButtonProps={{color: Colors.orange30}}
        cancelButtonProps={{iconStyle: {tintColor: Colors.orange30}}}
        includeStatusBar
      />
      <View style={{paddingHorizontal: 16}}>
      <TextField
        title="Name"
        editable
        placeholder="Name"
      />
      {/* <TextField
        title="Amount"
        editable
        placeholder="Amount"
        value={newTrackerItem?.amount}
        onChange={(txt: string) => {
          console.log(txt)
          setErrorMsg(isNaN(parseFloat(txt as string)) ? "Enter number" : "");
          setNewTrackerItem({...newTrackerItem!, amount: txt as string})
        }}
        enableErrors
        error={errorMsg}
        errorColor="red"
        prefix="$"
      /> */}
      <Picker
        title="Type"
        placeholder="Pick a Type"
        useNativePicker
        value={newTrackerItem?.type}
        onChange={(nativePickerValue: string) => setNewTrackerItem({...newTrackerItem!, type: nativePickerValue as string})}
        containerStyle={{marginTop: 20}}
      >
        {TRACKERITEM_TYPE_OPTIONS.map(option => (
          <Picker.Item key={option.value} value={option.value} label={option.label}/>
        ))}
      </Picker>
      </View>
      </SafeAreaView>
    </Modal>
  )
}
export const Expenses2 = () => {

    const [trackerItems, setTrackerItems] = React.useState<TrackerItem[]>()
    const _renderItem: ListRenderItem<TrackerItem> = ({item}) => {
        return(
          <ListItem
          height={77.5}
          containerStyle={{paddingHorizontal: 14}}
          onPress={() => Alert.alert(`pressed on order #${item.name + 1}`)}
        >
          {/* <ListItem.Part left>
            <Animatable.Image
              source={{uri: row.mediaUrl}}
              style={styles.image}
              {...imageAnimationProps}
            />
          </ListItem.Part> */}
          <ListItem.Part middle column containerStyle={{paddingRight: 17}}>
            <ListItem.Part containerStyle={{marginBottom: 3}}>
              <Text text70 style={{flex: 1, marginRight: 10}} numberOfLines={1}>{item.name}</Text>
              <Text dark10 text70 style={{marginTop: 2}}>{item.amount}</Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text text90 numberOfLines={1}>{item.type}</Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
        )
    }

    const [modalVisible, setModalVisible] = React.useState(false)
    
    // Store the selected item in async storage
    const storeData = async (value: object
      ) => {
      try {
        const newTrackerItems = [...trackerItems!, value]
        const jsonValue = JSON.stringify(newTrackerItems)
        await AsyncStorage.setItem('@items', jsonValue)
      } catch (e) {
        // saving error
        Alert.alert("Error storing items.")
      }
    }

    // Get the items from async storage
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            setTrackerItems(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch(e) {
          Alert.alert("Error retreiving items.")
        }
    }

    React.useEffect(() => {
      getData()
    }, [])

    return(
      <>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <FloatingButton
        visible
        button={{
          label: 'Add Expense',
          onPress: () => setModalVisible(true)
        }}
        hideBackgroundOverlay
        // bottomMargin={80}
        // hideBackgroundOverlay
        // withoutAnimation
      />
      <TrackerItemModal visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={() => {}}/>
      </>
    )
}  

const ExpensesScreen = () => {
  return(
    <View style={{flex: 1, height: '100%'}}>
        <Expenses2/>
    </View>
  )
}

export default ExpensesScreen