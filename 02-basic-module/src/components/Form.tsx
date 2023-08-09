import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"

export default function Form() {
  const [value, setValue] = React.useState<string>("")

  const getValue = (v: string) => {
    if (v.length > 0) setValue(`Bem-vindo: ${v}`)
    else setValue("")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={getValue}
        placeholder="Digite seu nome"
        spellCheck={false}
      />
      <Text style={styles.text}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8
  },
  input: {
    backgroundColor: "#eee",
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    fontSize: 16
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
})
