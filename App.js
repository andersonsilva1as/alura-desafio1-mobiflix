import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./src/Screens/Home/index.js";

export default function App() {
  return(
    <SafeAreaView style = {styles.container}>
      <Home/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})