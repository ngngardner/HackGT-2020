
import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Icon, ButtonGroup } from "react-native-elements";
import { FlatList } from 'react-native-gesture-handler';


export default class KitchenFulfillment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
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
        }
    }
    render() {
        return (
            <View style={this.props.styles.kitchenContainer}>
                <View>
                    <Text style={this.props.styles.title}>Restaurant Name</Text>
                </View>
    
                <FlatList
                    data={this.state.orders}
                    renderItem={({item, index}) => renderItem(item, index)}
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
}

// const test = (index) => {
//     orders[index].finished = true;
// }

const renderItem = (item, index) => {
    // console.log(index)
    return !item.finished && <OrderItem item={item} index={index} />
}

const testTwo = (val) => {
    // console.log(val);
}

const OrderItem = (item, index) => {
    const newItem = item.item;

    let timeRemaining = Math.floor(newItem.time / 60);

    const component1 = () => <Text>{timeRemaining} min / {newItem.distance} mi</Text>
    const component2 = () => <Text>Finish</Text>

    const buttons = [
        { 
            element: component1,
            onPress: (index) => { console.log("Index: " + index) } 
        },
        {
            element: component2
        }
    ];

    return (
        <Card>
            <View style={{ paddingBottom: 10 }}>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title={newItem.name}
                />
            </View>
            <View>
                <ButtonGroup
                    buttons={buttons}
                    onPress={testTwo}
                />
            </View>
        </Card>
    );
}