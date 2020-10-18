
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function KitchenFulfillment({ styles, navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Kitchen fulfillment test</Text>
            </View>
            <View>
                <Button title="Kitchen Fulfillment Test"
                    onPress={() => navigation.navigate('KitchenComplete')}
                />
            </View>
        </View>

    );
}
