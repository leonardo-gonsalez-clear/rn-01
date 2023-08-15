import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Link, Stack } from "expo-router"

export default function Main() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Início" }} />
      <Link href="/pages/home" style={styles.btn}>
        <Text style={styles.txt}>Ir para home</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {},
  txt: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#008cff",
    fontWeight: "700"
  }
})
