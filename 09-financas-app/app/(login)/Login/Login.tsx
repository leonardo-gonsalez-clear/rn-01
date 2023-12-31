import { View, Text, Image } from 'react-native'
import React from 'react'
import Input from '../../../components/Input'
import { Container, Logo } from './styled'
import Button from '../../../components/Button'
import { Link } from 'expo-router'
import { useLoginUser, useMeUser } from '../../../mutations/user'

const Login = () => {
  const { mutateAsync, isLoading } = useLoginUser()
  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  })


  const handleLoginUser = async () => {
    if (!userData.email || !userData.password) return alert("Preencha todos os campos")

    await mutateAsync(userData)

  }

  return (
    <Container>
      <Logo source={require("../../../assets/Logo.png")} />
      <Input label="Email" placeholder='exemplo@email.com' onChangeText={(t) => setUserData(prev => ({ ...prev, email: t }))} />
      <Input label="Senha" placeholder='*************' onChangeText={(t) => setUserData(prev => ({ ...prev, password: t }))} />
      <Button onPress={handleLoginUser} loading={isLoading}>Entrar</Button>
      <Link href={"/(login)/Registrar"} style={{ textAlign: "center" }}>
        <Text>Criar conta gratuita</Text>
      </Link>
    </Container>
  )
}

export default Login
