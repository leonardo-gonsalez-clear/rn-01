import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"
import React from "react"

export default function Form() {
  const [value, setValue] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [loginMessage, setLoginMessage] = React.useState<string>("")

  const getValue = (v: string) => {
    setValue(v)
  }

  const getPassword = (v: string) => {
    setPassword(v)
  }

  const handleSubmit = (e: GestureResponderEvent) => {
    if (password.length && value.length) {
      const name = value
      setLoginMessage(`Seja bem vindo: ${name}`)
      setValue("")
      setPassword("")
    } else {
      alert("Preencha os dados corretamente")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={getValue}
        placeholder="Digite seu nome"
        value={value}
        spellCheck={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={getPassword}
        placeholder="************"
        textContentType="password"
        value={password}
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={handleSubmit} />
      {loginMessage.length ? (
        <Text style={styles.text}>{loginMessage}</Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    gap: 8
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
