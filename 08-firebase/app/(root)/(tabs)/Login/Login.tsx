import { View, Text } from "react-native"
import React from "react"
import { Container, Input } from "./Login.styled"
import { Button } from "react-native"
import { ref } from "firebase/database"
import { app, database, auth } from "../../../../services/firebaseConnection"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth"
import { FirebaseError } from "firebase/app"
import { async } from "@firebase/util"
import { useRouter } from "expo-router"

const Login = () => {
  const [userData, setUserData] = React.useState({ email: "", password: "" })
  const [user, setUser] = React.useState("")
  const router = useRouter()

  const handleCreateUser = async () => {
    console.log(userData)

    if (!userData.email || !userData.password) return

    await signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((credential) => {
        alert("Logado com sucesso: " + credential.user.email)
        setUser(credential.user.email as string)
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          console.log(e.code)
          alert(e.code)
        }
      })

    setUserData({ email: "", password: "" })
  }

  const handleLogout = async () => {
    await signOut(auth).then(() => {
      setUser("")
      router.push("/(root)/(tabs)/Registrar/Registrar")
    })
  }

  return (
    <Container>
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

      <Text style={{ fontSize: 20, marginTop: 20, textAlign: "center" }}>
        {user}
      </Text>

      {!user ? (
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: "center" }}>
          Nenhum usuário logado
        </Text>
      ) : (
        <Button title="Logout" onPress={handleLogout} />
      )}
    </Container>
  )
}

export default Login
