import { View, Text, Button, StyleSheet } from "react-native"
import React from "react"
import { Link, Stack, useNavigation, useRouter } from "expo-router"

export default function Home() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Configurações" }} />
      <Text onPress={() => router.back()} style={styles.txt}>
        Voltar
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#008cff",
    fontWeight: "700"
  }
})
