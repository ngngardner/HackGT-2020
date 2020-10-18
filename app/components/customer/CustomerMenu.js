import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

const items = [
    { key: "Item 1" },
    { key: "Item 2" },
    { key: "Item 3" },
    { key: "Item 4" },
    { key: "Item 5" }
];

export default function CustomerMenu({ styles, navigation, state }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Catalog</Text>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <ItemRow item={item} style={styles} />}
                />
            </View>
        </View>
    );
}

const ItemRow = (item, styles) => {
    return (
        // <View style={{ display: "flex", marginTop: 0, flexDirection: "row" }}>
        //     <Text style={styles.item}>{item.item.key}</Text>

        //     <Icon name="pluscircle" type="antdesign" color="#887700" style={{ margin: 10 }} onPress={test()} />
        //     <Icon name="minuscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
        // </View>
        <TouchableHighlight onPress={() => { }}>
            <View>
                <Icon name="pluscircle" type="antdesign" color="#887700" style={{ margin: 10 }} />
            </View>
        </TouchableHighlight>
    );
}

function test() {
    console.log("test 3");
}