import { StyleSheet, Text, View } from "react-native"
import React from "react"

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Biscoito da fortuna</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffd51d",
    width: "100%",
    padding: 16
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#5f3300"
  }
})
