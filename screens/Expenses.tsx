import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../components/Themed';
import {FontAwesome5} from '@expo/vector-icons'
import {FloatingButton} from 'react-native-ui-lib';

type TrackerItem = {
    amount: string,
    name: string
    type: "Saving" | "Expense" | "Income"
}
export const Expenses = () => {

    //const [trackerItems, setTrackerItems] = React.useState<TrackerItem[]>()
    const trackerItems: TrackerItem[] = [{
        "amount": "$8.94",
        "name": "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "type": "Saving"
      }, {
        "amount": "$7.34",
        "name": "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
        "type": "Expense"
      }, {
        "amount": "$6.20",
        "name": "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
        "type": "Income"
      }, {
        "amount": "$0.90",
        "name": "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
        "type": "Income"
      }, {
        "amount": "$8.15",
        "name": "in faucibus orci luctus et ultrices posuere cubilia curae donec",
        "type": "Income"
      }, {
        "amount": "$5.11",
        "name": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
        "type": "Income"
      }, {
        "amount": "$2.53",
        "name": "quis orci eget orci vehicula condimentum curabitur in libero ut massa",
        "type": "Income"
      }, {
        "amount": "$5.02",
        "name": "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
        "type": "Income"
      }, {
        "amount": "$3.91",
        "name": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
        "type": "Income"
      }, {
        "amount": "$4.12",
        "name": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
        "type": "Income"
      }, {
        "amount": "$3.60",
        "name": "rutrum ac lobortis vel dapibus at diam nam tristique tortor",
        "type": "Income"
      }, {
        "amount": "$3.62",
        "name": "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "type": "Income"
      }, {
        "amount": "$1.56",
        "name": "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
        "type": "Saving"
      }, {
        "amount": "$1.32",
        "name": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
        "type": "Expense"
      }, {
        "amount": "$5.92",
        "name": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac",
        "type": "Expense"
      }, {
        "amount": "$5.22",
        "name": "sollicitudin mi sit amet lobortis sapien sapien non mi integer",
        "type": "Expense"
      }, {
        "amount": "$2.98",
        "name": "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
        "type": "Income"
      }, {
        "amount": "$5.79",
        "name": "vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
        "type": "Expense"
      }, {
        "amount": "$0.49",
        "name": "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
        "type": "Income"
      }, {
        "amount": "$0.71",
        "name": "in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
        "type": "Expense"
      }, {
        "amount": "$4.19",
        "name": "non sodales sed tincidunt eu felis fusce posuere felis sed",
        "type": "Income"
      }, {
        "amount": "$4.21",
        "name": "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        "type": "Income"
      }, {
        "amount": "$8.71",
        "name": "erat quisque erat eros viverra eget congue eget semper rutrum nulla",
        "type": "Income"
      }, {
        "amount": "$9.18",
        "name": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
        "type": "Income"
      }, {
        "amount": "$1.14",
        "name": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
        "type": "Income"
      }, {
        "amount": "$6.09",
        "name": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
        "type": "Saving"
      }, {
        "amount": "$0.49",
        "name": "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
        "type": "Expense"
      }, {
        "amount": "$0.75",
        "name": "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",
        "type": "Saving"
      }, {
        "amount": "$0.07",
        "name": "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
        "type": "Saving"
      }, {
        "amount": "$6.52",
        "name": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
        "type": "Expense"
      }, {
        "amount": "$1.24",
        "name": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
        "type": "Income"
      }, {
        "amount": "$2.28",
        "name": "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est",
        "type": "Saving"
      }, {
        "amount": "$8.14",
        "name": "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
        "type": "Expense"
      }, {
        "amount": "$4.91",
        "name": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
        "type": "Expense"
      }, {
        "amount": "$1.98",
        "name": "sed augue aliquam erat volutpat in congue etiam justo etiam",
        "type": "Income"
      }, {
        "amount": "$8.03",
        "name": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
        "type": "Expense"
      }, {
        "amount": "$8.75",
        "name": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
        "type": "Income"
      }, {
        "amount": "$5.13",
        "name": "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",
        "type": "Expense"
      }, {
        "amount": "$9.27",
        "name": "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
        "type": "Income"
      }, {
        "amount": "$0.86",
        "name": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus",
        "type": "Income"
      }, {
        "amount": "$5.41",
        "name": "sed magna at nunc commodo placerat praesent blandit nam nulla integer",
        "type": "Saving"
      }, {
        "amount": "$6.01",
        "name": "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
        "type": "Income"
      }, {
        "amount": "$9.43",
        "name": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
        "type": "Expense"
      }, {
        "amount": "$7.29",
        "name": "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non",
        "type": "Saving"
      }, {
        "amount": "$9.26",
        "name": "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus",
        "type": "Income"
      }, {
        "amount": "$4.58",
        "name": "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
        "type": "Expense"
      }, {
        "amount": "$1.41",
        "name": "at nunc commodo placerat praesent blandit nam nulla integer pede justo",
        "type": "Income"
      }, {
        "amount": "$0.01",
        "name": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
        "type": "Saving"
      }, {
        "amount": "$2.81",
        "name": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
        "type": "Income"
      }, {
        "amount": "$6.64",
        "name": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
        "type": "Income"
      }]
    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@storage_Key')
    //         setTrackerItems(jsonValue != null ? JSON.parse(jsonValue) : null);
    //     } catch(e) {
    //         Alert.alert("Error retreiving items.")
    //     }
    // }
    
    const _renderItem: ListRenderItem<TrackerItem> = ({item}) => {
        return(
            <TouchableOpacity style={{marginVertical: 4}}>
                <Text numberOfLines={1}>{item.name}</Text>
                <Text>{item.amount}</Text>
            </TouchableOpacity>
        )
    }
    // React.useEffect(() => 
    //     getData();
    // }, [])
    const actions = [
        {
          text: "Expense",
          icon: <FontAwesome5 name="receipt" style={{color: "white"}} size={20}/>,
          name: "expense",
          position: 2
        },
        {
          text: "Savings",
          icon: <FontAwesome5 name="piggy-bank" style={{color: "white"}} size={20}/>,
          name: "savings",
          position: 1
        },
        {
          text: "Income",
          icon: <FontAwesome5 name="money-check" style={{color: "white"}} size={20}/>,
          name: "income",
          position: 3
        },
      ];

    return(
        <View>
            <FlatList data={trackerItems} contentContainerStyle={{paddingHorizontal: 14}} renderItem={_renderItem} showsVerticalScrollIndicator={false}/>       
            {/* <FloatingAction
                actions={actions}
                onPressItem={name => {
                    switch(name) {
                        case "expense":
                        case "savings":
                        case "income":
                            console.log(name);
                    }
                }}
            /> */}<FloatingButton/>
        </View>
    )
}  