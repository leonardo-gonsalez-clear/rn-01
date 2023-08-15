import { StyleSheet, Text, View } from "react-native"
import React from "react"
import CEPSearch from "./interface/CEPSearch/CEPSearch"

export default function Main() {
  return (
    <View style={styles.container}>
      <CEPSearch />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
})
