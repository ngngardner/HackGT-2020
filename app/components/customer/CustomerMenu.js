import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Alert, Button, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import * as SellingAPI from "../../services/SellingAPI";

const items = [
    { name: "Cola", id: 101, count: 0, price: 5.0 },
    { name: "Milk", id: 15001, count: 0, price: 3.5 },
    { name: "Something", id: 200, count: 0, price: 3.5 },
    { name: "Something", id: 22, count: 0, price: 4.0 },
];

export default class CustomerMenu extends Component {
    constructor(props) {
        super(props);
        const cartId = SellingAPI.createCart();
        this.state = {
            items: [
                { name: "Cola", id: 101, count: 0, price: 5.0 },
                { name: "Milk", id: 15001, count: 0, price: 3.5 },
                { name: "Something", id: 200, count: 0, price: 3.5 },
                { name: "Something", id: 22, count: 0, price: 4.0 },
            ],
            cartId: cartId
        }
        
    }
    increment(item) {
        for (var i = 0; i < items.length; i++) {
            if (this.state.items[i].id == item.id) {
                var newItems = this.state.items.slice();
                newItems[i].count = newItems[i].count + 1;
                this.setState({
                    items: newItems,
                });
                console.log(this.state.items);
            }
        }
        SellingAPI.incrementCartItem(this.state.cartId, item.id);
    }
    decrement(item) {
        for (var i = 0; i < items.length; i++) {
            if (this.state.items[i].id == item.id) {
                var newItems = this.state.items.slice();
                if (newItems[i].count > 0) {
                    newItems[i].count = newItems[i].count - 1;
                }

                this.setState({
                    items: newItems,
                });
                console.log(this.state.items);
            }
        }
        SellingAPI.decrementCartItem(this.state.cartId, item.id);
    }
    countTotalCost() {
        const cart = SellingAPI.getCart(this.state.cartId);
        const cartTotalFromApi = cart.totals.grossAmount;
        var total = 0;
        this.state.items.forEach(element => {
            total = element.count * element.price + total;
        });
        return total;
        //return cartTotalFromApi;
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
                        data={this.state.items}
                        extraData={this.state}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ display: "flex", marginTop: 0, flexDirection: "row" }}>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 18,
                                        height: 44,
                                        marginHorizontal: 5,
                                        backgroundColor: '#f9c2ff',
                                        flex: 5,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 18,
                                        height: 44,
                                        marginHorizontal: 5,
                                        backgroundColor: '#f9c2ff',
                                        flex: 4,
                                    }}>Cost: ${item.price}</Text>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 18,
                                        height: 44,
                                        marginHorizontal: 5,
                                        backgroundColor: '#f9c2ff',
                                        flex: 4,
                                    }}>Count: {item.count}</Text>
                                    <TouchableHighlight onPress={() => this.increment(item)}>
                                        <View style={{ flex: 2 }}>
                                            <Icon name="pluscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => this.decrement(item)}>
                                        <View style={{ flex: 2 }}>
                                            <Icon name="minuscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
                                        </View>
                                    </TouchableHighlight>

                                </View>

                            );
                        }}
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    height: 44,
                    textAlign: 'center',
                    margin: 20
                }}>
                    TotalCost: ${this.countTotalCost()}
                </Text>
                <View>
                    <Button title="Order Now"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
            </View>
        );
    }

}
