import { StyleSheet, Text, View } from "react-native"
import React from "react"
import FirstSteps from "./components/FirstSteps"

export default function Main() {
  return (
    <View style={styles.container}>
      <FirstSteps />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
