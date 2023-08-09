import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Main } from "./src/Main"
import SortName from "./src/components/SortName"

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <SortName names={["Leonardo", "Pedro", "Guilherme", "Kaua"]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  }
})
