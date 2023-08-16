import { View, Text, Button, StyleSheet } from "react-native"
import React from "react"
import {
  Link,
  Stack,
  Tabs,
  useLocalSearchParams,
  useNavigation,
  useRouter
} from "expo-router"
import { useRoute } from "@react-navigation/native"

export default function Home() {
  const router = useRouter()
  const { name } = useLocalSearchParams()
  const nav = useNavigation()

  // React.useLayoutEffect(() => {
  //   nav.setOptions({ title: name })
  // }, [name])

  const handle = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => router.back()} style={styles.txt}>
        Voltar
      </Text>
      <Text>Nome: {name}</Text>

      <Button title="Voltar TUDO" onPress={handle} />
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
