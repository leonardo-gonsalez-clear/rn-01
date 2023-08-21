import { View, Text, Button } from "react-native"
import React from "react"
import Input from "../../../components/Input/Input"
import { Container } from "./Login.styled"
import { useRouter } from "expo-router"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../../services/firebase"
import { useUserStore } from "../../../stores/useUserStore"

type ILoginUser = Pick<IUser, "email" | "password">

const Login = () => {
  const setUser = useUserStore((state) => state.setUser)

  const [userData, setUserData] = React.useState<ILoginUser | null>({
    email: null,
    password: null
  })
  const router = useRouter()

  const handleCreateUser = async () => {
    if (!userData) return alert("Preencha todos os dados")

    const { email, password } = userData

    if (!email || !password) return

    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("usuário logado com sucesso!")

      setUser({
        id: credentials.user.uid,
        email: email
      })

      router.push("/(pages)/")
    } catch (error) {
      alert("algo deu errado")
      console.log(error)
    }
  }

  return (
    <Container>
      <Input
        label="Email"
        placeholder="exemplo@exemplo.com"
        keyboardType="email-address"
        onChangeText={(v) =>
          setUserData((prev) => ({ ...(prev as ILoginUser), email: v }))
        }
      />
      <Input
        label="Senha"
        placeholder="************"
        secureTextEntry={true}
        onChangeText={(v) =>
          setUserData((prev) => ({ ...(prev as ILoginUser), password: v }))
        }
      />

      <Button title="Login" onPress={handleCreateUser} />
      <Button
        title="Criar conta"
        color={"#212121"}
        onPress={() => router.push("/(tabs)/Registrar/Registrar")}
      />
    </Container>
  )
}

export default Login
