import { StyleSheet, Text, View } from "react-native"
import React from "react"
import FlatListComponent from "./components/FlatListComponent"

export default function Main() {
  return (
    <View style={styles.container}>
      <FlatListComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
})
