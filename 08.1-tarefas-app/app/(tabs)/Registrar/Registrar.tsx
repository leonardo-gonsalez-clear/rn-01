import { View, Text, Button } from "react-native"
import React from "react"
import Input from "../../../components/Input/Input"
import { Container } from "./Registrar.styled"
import { auth, db } from "../../../services/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { ref, set } from "firebase/database"
import { useRouter } from "expo-router"

const Registrar = () => {
  const [userData, setUserData] = React.useState<IUser | null>({
    email: null,
    password: null,
    name: null
  })
  const router = useRouter()

  const handleCreateUser = async () => {
    if (!userData) return alert("Preencha todos os dados")

    const { email, password, name } = userData

    if (!email || !password || !name) return

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const reference = ref(db, `users/${credentials.user.uid}`)

      await set(reference, {
        name,
        email
      })

      alert("usuário criado com sucesso!")

      router.push("/(tabs)/Login/Login")
    } catch (error) {
      alert("algo deu errado")
      console.log(error)
    }
  }

  return (
    <Container>
      <Input
        label="Nome"
        placeholder="Nome completo"
        onChangeText={(v) =>
          setUserData((prev) => ({ ...(prev as IUser), name: v }))
        }
      />
      <Input
        label="Email"
        placeholder="exemplo@exemplo.com"
        onChangeText={(v) =>
          setUserData((prev) => ({ ...(prev as IUser), email: v }))
        }
      />
      <Input
        label="Senha"
        placeholder="************"
        secureTextEntry={true}
        onChangeText={(v) =>
          setUserData((prev) => ({ ...(prev as IUser), password: v }))
        }
      />

      <Button title="Registrar" onPress={handleCreateUser} />
      <Button
        title="Fazer login"
        color={"#212121"}
        onPress={() => router.push("/(tabs)/Login/Login")}
      />
    </Container>
  )
}

export default Registrar
