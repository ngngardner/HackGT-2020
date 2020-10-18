
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function KitchenComplete({ styles, navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Kitchen Complete test</Text>
            </View>
            <View>
                <Button title="Go back"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>

    );
}
