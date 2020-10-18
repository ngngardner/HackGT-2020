import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Reverse Delivery app</Text>
        <Text>Sponsored by NCR</Text>
      </View>


      <View>
        <Button title="Customer Route" onPress={() => { Alert.alert('Customer Router pressed') }}></Button>

        <Separator></Separator>

        <Button title="Kitchen Route" onPress={() => { Alert.alert('Customer Router pressed') }} ></Button>
      </View>

      <StatusBar style="auto" />



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
