import { View, Text } from 'react-native'
import React from 'react'
import { ButtonWrapper, Container, LogoutButton, SubTitle, Title } from './Perfil.styled'
import Header from '../../../interfaces/Header'
import { useUserStore } from '../../../stores/useUserStore'
import Button from '../../../components/Button'
import { useRouter } from 'expo-router'

const Perfil = () => {
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)
  const router = useRouter()

  return (
    <>
      <Header title="Meu perfil" />
      <Container>
        <Title>Bem-vindo de volta</Title>
        <SubTitle>{user?.name.toUpperCase()}</SubTitle>


        <ButtonWrapper>
          <Button onPress={() => router.push("/(home)/Registrar/Registrar")}>Registrar gastos</Button>
          <LogoutButton onPress={logout}>Sair</LogoutButton>
        </ButtonWrapper>
      </Container>
    </>
  )
}

export default Perfil
