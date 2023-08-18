import { View, Text } from "react-native"
import React from "react"
import { Container, Input } from "./Registrar.styled"
import { Button } from "react-native"
import { child, ref, set } from "firebase/database"
import { app, database, auth } from "../../../../services/firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "expo-router"

const Registrar = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
    name: ""
  })
  const router = useRouter()

  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(async (credential) => {
        const reference = ref(database, "usuarios")

        const refChild = child(reference, credential.user.uid)

        await set(refChild, { nome: userData.name })

        alert("usuario criado com sucesso: " + credential.user.uid)
        setUserData({ email: "", password: "", name: "" })
        router.push("/(root)/(tabs)/Login/Login")
      })
      .catch((e) => {
        alert("Algo deu errado")
      })
  }

  return (
    <Container>
      <Input
        placeholder="Nome"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, name: v }))}
        value={userData.name}
      />
      <Input
        placeholder="Email"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, email: v }))}
        value={userData.email}
      />
      <Input
        placeholder="Password"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, password: v }))}
        value={userData.password}
      />

      <Button title="Enviar" onPress={handleCreateUser} />
    </Container>
  )
}

export default Registrar
