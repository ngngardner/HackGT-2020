import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function CustomerMain({ styles, navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Customer main test</Text>
            </View>
            <View>
                <Button title="Order Now"
                    onPress={() => navigation.navigate('CustomerMenu')}
                />
            </View>
        </View>

    );
}
