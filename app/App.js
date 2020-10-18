import 'react-native-gesture-handler';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import CustomerMain from './components/customer/CustomerMain';
import CustomerMenu from './components/customer/CustomerMenu';
import KitchenComplete from './components/kitchen/KitchenComplete';
import KitchenFulfillment from './components/kitchen/KitchenFulfillment';


// import * as ScreenOrientation from 'expo-screen-orientation';
// ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_LEFT);

const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createStackNavigator();

const state = {
  cart: []
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Home {...props} styles={styles} state={state} />}
        </Stack.Screen>
        <Stack.Screen name="CustomerMain">
          {props => <CustomerMain {...props} styles={styles} state={state} />}
        </Stack.Screen>
        <Stack.Screen name="CustomerMenu">
          {props => <CustomerMenu {...props} styles={styles} state={state} />}
        </Stack.Screen>
        <Stack.Screen name="KitchenFulfillment">
          {props => <KitchenFulfillment {...props} styles={styles} state={state} />}
        </Stack.Screen>
        <Stack.Screen name="KitchenComplete">
          {props => <KitchenComplete {...props} styles={styles} state={state} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kitchenContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: 100,
    height: 100,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',

  },

});
