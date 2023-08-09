import { StyleSheet, Text, View } from "react-native"
import React from "react"

export default function Sizes() {
  return (
    <View style={styles.container}>
      <Text style={[styles.item, { backgroundColor: "green" }]}>Sizes</Text>
      <Text style={[styles.item, { backgroundColor: "red" }]}>Sizes</Text>
      <Text style={[styles.item, { backgroundColor: "blue" }]}>Sizes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  item: {
    height: 50,
    flex: 1
  }
})
