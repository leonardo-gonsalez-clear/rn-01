import { StyleSheet, Text, View } from "react-native"
import React from "react"
import FirstSteps from "./components/FirstSteps"
import Sequency from "./components/Sequency"
import Loop from "./components/Loop"
import StartingAnimations from "./components/StartingAnimations"

export default function Main() {
  return (
    <View style={styles.container}>
      {/* <FirstSteps /> */}
      {/* <Sequency /> */}
      {/* <Loop /> */}
      <StartingAnimations />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
