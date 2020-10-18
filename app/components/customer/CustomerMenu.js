import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Alert, Button, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

const items = [
    { name: "Cola", id: 101, count: 0 },
    { name: "Milk", id: 15001, count: 0 },
    { name: "Something", id: 200, count: 0 },
    { name: "Something", id: 22, count: 0 },
];

export default class CustomerMenu extends Component {
    state = {
        items: [
            { name: "Cola", id: 101, count: 0 },
            { name: "Milk", id: 15001, count: 0 },
            { name: "Something", id: 200, count: 0 },
            { name: "Something", id: 22, count: 0 },
        ]
    }
    render() {
        return (
            <View>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        margin: 10,
                        marginBottom: 20
                    }}>Catalog</Text>
                </View>
                <View>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ display: "flex", marginTop: 0, flexDirection: "row" }}>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 18,
                                        height: 44,
                                        marginHorizontal: 16,
                                        backgroundColor: '#f9c2ff',
                                        flex: 5,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 18,
                                        height: 44,
                                        marginHorizontal: 16,
                                        backgroundColor: '#f9c2ff',
                                        flex: 5,
                                    }}>Count: {item.count}</Text>
                                    <TouchableHighlight onPress={() => {
                                        for (var i = 0; i < items.length; i++) {
                                            if (this.state.items[i].id == item.id) {

                                            }
                                        }
                                    }}>
                                        <View style={{ flex: 2 }}>
                                            <Icon name="pluscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => decrement(item)}>
                                        <View style={{ flex: 2 }}>
                                            <Icon name="minuscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
                                        </View>
                                    </TouchableHighlight>
                                </View>

                            );
                        }}
                    />
                </View>
                <View>
                    <Button title="Order Now"
                        onPress={() => navigation.navigate('CustomerMenu')}
                    />
                </View>
            </View>
        );
    }

}

// const ItemRow = (item, state) => {
//     return (
//         <View style={{ display: "flex", marginTop: 0, flexDirection: "row" }}>
//             <Text style={{
//                 padding: 10,
//                 fontSize: 18,
//                 height: 44,
//                 marginHorizontal: 16,
//                 backgroundColor: '#f9c2ff',
//                 flex: 5,
//             }}>{item.item.name}</Text>
//             <Text style={{
//                 padding: 10,
//                 fontSize: 18,
//                 height: 44,
//                 marginHorizontal: 16,
//                 backgroundColor: '#f9c2ff',
//                 flex: 5,
//             }}>Count: {item.item.count}</Text>
//             <TouchableHighlight onPress={() => increment(item.item, state)} >
//                 <View style={{ flex: 2 }}>
//                     <Icon name="pluscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
//                 </View>
//             </TouchableHighlight>
//             <TouchableHighlight onPress={() => decrement(item.item)}>
//                 <View style={{ flex: 2 }}>
//                     <Icon name="minuscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
//                 </View>
//             </TouchableHighlight>
//         </View>

//     );
// }

// function increment(item) {

//     for (var i = 0; i < items.length; i++) {
//         if (items[i].id == item.id) {
//             items[i].count = items[i].count + 1;
//         }
//     }

// }

// function decrement(item) {
//     console.log(item);
// }