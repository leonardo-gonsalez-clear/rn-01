import { View, Text, TextInput, Button } from "react-native"
import React from "react"
import { Container, Input } from "./Home.styled"
import { IUser } from ".."
import { onValue, ref, set, update, push } from "firebase/database"
import database from "../../../../services/firebaseConnection"

const Home = () => {
  const [userData, setUserData] = React.useState<Partial<IUser>>({
    nome: "",
    idade: ""
  })

  const handleInsertUser = async () => {
    console.log(userData)

    const { idade, nome } = userData

    if (!idade || !nome) return alert("Preencha todos os dados")

    const reference = ref(database, "usuarios")

    try {
      // let size

      push(reference, { nome, idade })

      // if (!size) throw new Error()

      // await update(reference, {
      //   [size + 1]: {
      //     nome,
      //     idade
      //   }
      // })

      alert("Sucesso")
    } catch (e) {
      alert("Erro")
    }
  }

  return (
    <Container>
      <Input
        placeholder="Nome do usuário"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, nome: v }))}
      />
      <Input
        placeholder="Idade"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, idade: v }))}
      />

      <Button title="Enviar" onPress={handleInsertUser} />
    </Container>
  )
}

export default Home
