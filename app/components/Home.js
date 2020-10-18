import React, { Component } from 'react';
import { View, Text, Button, Image, Alert } from "react-native";

const Separator = ({ styles }) => (
    <View style={styles.separator} />
);

export default function Home({ styles, navigation }) {
    return (
        <View style={styles.container}>

            <View>
                <Text style={{
                    marginBottom: 170,
                    fontSize: 30
                }}> Reverse Delivery</Text>
            </View>

            <View>
                <Separator styles={styles}></Separator>

                <Button title="Customer Route"
                    onPress={() => navigation.navigate('CustomerMain')}
                />

                <Separator styles={styles}></Separator>

                <Button title="Kitchen Route"
                    onPress={() => navigation.navigate('KitchenFulfillment')}
                />
                <Separator styles={styles}></Separator>

            </View>


            <View style={{}}>
                {/* <Text style={{ textAlignVertical: "center" }, { textAlign: "center" }}>Powered by</Text> */}
                <Text style={{ padding: 10, marginTop: 170 }}>Powered by:</Text>

                <Image
                    style={
                        styles.logo
                    }
                    source={require('../images/NCR_logo.png')} />
            </View>

        </View>
    );
}