import { View, Text } from "react-native"
import React from "react"
import { Container, Input } from "./Registrar.styled"
import { Button } from "react-native"
import { ref } from "firebase/database"
import { app, database, auth } from "../../../../services/firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Registrar = () => {
  const [userData, setUserData] = React.useState({ email: "", password: "" })

  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then((credential) => {
        alert("usuario criado com sucesso: " + credential.user.email)
      })
      .catch((e) => {
        alert("Algo deu errado")
      })
  }

  return (
    <Container>
      <Input
        placeholder="Email"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, email: v }))}
      />
      <Input
        placeholder="Password"
        onChangeText={(v) => setUserData((prev) => ({ ...prev, password: v }))}
      />

      <Button title="Enviar" onPress={handleCreateUser} />
    </Container>
  )
}

export default Registrar
