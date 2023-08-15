import { StyleSheet, Text, View } from "react-native"
import React from "react"
import FirstSteps from "./components/FirstSteps"
import Sequency from "./components/Sequency"

export default function Main() {
  return (
    <View style={styles.container}>
      <FirstSteps />
      <Sequency />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
