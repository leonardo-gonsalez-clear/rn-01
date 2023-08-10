import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function Scroll() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: "#ddd",
    width: "100%",
    height: 250,
    borderTopColor: "#212121",
    borderTopWidth: 1
  }
})
