import { View, Text, StyleSheet, Button } from "react-native"
import React from "react"
import { Link, Stack, useNavigation, useRouter } from "expo-router"

export default function Main() {
  const router = useRouter()

  const handle = () => {
    router.push({ pathname: "/pages/home/", params: { name: "Leonardo" } })
  }

  return (
    <View style={styles.container}>
      <Link href="/pages/home/" style={styles.btn} asChild>
        <Text style={styles.txt}>Ir para home</Text>
      </Link>
      {/*
      <Link href="/pages/home/settings/" style={styles.btn} asChild>
        <Text style={styles.txt}>Ir para configurações</Text>
      </Link>
      <Button title="avançar" onPress={handle} /> */}
      <Text style={styles.txt}>BEM-VINDO</Text>
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
