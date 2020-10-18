import React, { Component } from 'react';
import { View, Text, Button, Image, Alert } from "react-native";

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function Home({ styles, navigation }) {
    return (
        <View style={styles.container}>

            <View>
                <Text style={{ fontSize: 30 }}>Reverse Delivery</Text>
            </View>

            <View>
                <Button title="Customer Route"
                    onPress={() => navigation.navigate('CustomerMain')}
                />

                <Separator styles={styles}></Separator>

                <Button title="Kitchen Route"
                    onPress={() => { Alert.alert('kitchen Router pressed') }}
                />
            </View>

            {/* <StatusBar style="auto" /> */}
            <View style={{}}>
                <Text>Powered by</Text>
                <Image
                    style={
                        {
                            height: 100,
                            width: 100,
                            justifyContent: "flex-end"
                        }
                    }
                    source={require('../images/NCR_logo.png')} />
            </View>

        </View>
    );
}

