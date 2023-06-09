import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./src/Screens/Home/index.js";
import RegistrationVideo from "./src/Screens/VideoRegistration/index.js";

export default function App() {
  return(
    <SafeAreaView style = {styles.container}>
      {/* <Home/> */}
      <RegistrationVideo/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})