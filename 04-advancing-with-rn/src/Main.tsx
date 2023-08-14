import { StyleSheet, Text, View } from "react-native"
import React from "react"
import HttpRequests from "./components/HttpRequests"

export default function Main() {
  return (
    <View style={styles.container}>
      <HttpRequests />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
