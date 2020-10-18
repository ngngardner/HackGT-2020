
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Icon, ButtonGroup } from "react-native-elements";
import { FlatList } from 'react-native-gesture-handler';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

const orders = [
    {
        name: "order 1",
        distance: 10.9,
        time: 300,
        finished: false
    },
    {
        name: "order 2",
        distance: 8.4,
        time: 250,
        finished: false
    },
    {
        name: "order 3",
        distance: 0.4,
        time: 103,
        finished: false
    },
    {
        name: "order 4",
        distance: 0,
        time: 0,
        finished: false
    }
]

export default function KitchenFulfillment({ styles, navigation }) {
    return (
        <View style={styles.kitchenContainer}>
            <View>
                <Text style={styles.title}>Restaurant Name</Text>
            </View>

            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            <View>
                <Button title="Kitchen Fulfillment Test"
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}

// const test = (index) => {
//     orders[index].finished = true;
// }

const renderItem = (item) => {
    return !item.finished && <OrderItem item={item.item}/>
}

const testTwo = (val, other) => {
    if (val == 1) {
        orders[0].finished = true;
    }
}

const OrderItem = (item) => {
    const newItem = item.item;

    let timeRemaining = Math.floor(newItem.time / 60);

    const component1 = () => <Text>{timeRemaining} min / {newItem.distance} mi</Text>
    const component2 = () => <Text>Finish</Text>
    
    const buttons = [{ element: component1 }, { element: component2 }]

    return (
        <Card>
            <View style={{paddingBottom: 10}}>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title={newItem.name}
                />
            </View>
            <View>
                <ButtonGroup
                    buttons={buttons}
                    onPress={testTwo}
                    // selectedIndex={newItem.distance}
                />
            </View>
        </Card>
    );
}