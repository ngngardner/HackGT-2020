import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, FlatList } from 'react-native';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function CustomerMenu({ styles, navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Catalog</Text>
                <FlatList
                    data={[
                        { key: "Item 1" },
                        { key: "Item 2" },
                        { key: "Item 3" },
                        { key: "Item 4" },
                        { key: "Item 5" }
                    ]}
                    renderItem={({ item }) => {
                        return <Text>{item.key}</Text>
                    }}
                />
            </View>
        </View>
    );
}
