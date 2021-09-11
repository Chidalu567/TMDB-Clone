import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* Home screen component call */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
