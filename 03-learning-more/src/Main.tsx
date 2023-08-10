import { StyleSheet, Text, View } from "react-native"
import React from "react"
import FlatListComponent from "./components/FlatListComponent"
import PickerComponent from "./components/PickerComponent"

export default function Main() {
  return (
    <View style={styles.container}>
      {/* <FlatListComponent /> */}
      <PickerComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
})
