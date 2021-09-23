import React from "react";
import { StyleSheet, Text } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Detail from "./Screens/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Create a Stack object
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*This is the Home screen*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*This is the Detail screen*/}
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
