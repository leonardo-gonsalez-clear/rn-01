import { View, Text, Image } from 'react-native'
import React from 'react'
import Input from '../../../components/Input'
import { Container, Logo } from './styled'
import Button from '../../../components/Button'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/Logo.png")} />
      <Input label="Email" placeholder='exemplo@email.com' />
      <Input label="Senha" placeholder='*************' />
      <Button>Entrar</Button>
      <Link href={"/(login)/Registrar"} style={{ textAlign: "center" }}>
        <Text>Criar conta gratuita</Text>
      </Link>
    </Container>
  )
}

export default Login
