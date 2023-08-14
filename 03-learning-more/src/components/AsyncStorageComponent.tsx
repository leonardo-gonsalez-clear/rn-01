import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from "react-native"
import React from "react"
import { Input } from "../interfaces/Bank/Bank.styled"
// import AsyncStorage from "@react-native-community/async-storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function AsyncStorageComponent() {
  const [nome, setNome] = React.useState("")
  const [value, setValue] = React.useState("")

  const handleName = () => {
    setNome(value)
    alert("Salvo com sucesso!")

    Keyboard.dismiss()
  }

  React.useEffect(() => {
    const saveName = async () => {
      await AsyncStorage.setItem("name", nome)

      alert(nome)
    }

    if (nome) saveName()
  }, [nome])

  React.useEffect(() => {
    const getName = async () => {
      await AsyncStorage.getItem("name").then((res) => {
        if (!res) return
        setNome(res)
        alert(res)
      })
    }

    getName()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Guardar no storage</Text>

      <View style={styles.inputWrapper}>
        <Input style={styles.input} onChangeText={(v) => setValue(v)} />
        <TouchableOpacity style={styles.inputBtn} onPress={handleName}>
          <Text style={{ color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 20, textAlign: "center" }}>{nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    padding: 8
  },
  input: {
    flex: 1
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden"
  },
  inputBtn: {
    backgroundColor: "#212121",
    color: "#fff",
    height: "100%",
    padding: 10
  }
})
