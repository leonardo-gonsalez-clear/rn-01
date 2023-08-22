import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Main } from "./src/Main"
import SortName from "./src/components/SortName"

export default function App() {

  const foo = "bar"
  const bar = "foo"

  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 16,
    gap: 16,
    padding: 20, 
  }
})
