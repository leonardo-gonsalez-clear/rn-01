import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styled'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Registrar = () => {
  return (
    <Container>
      <Input label="Nome" placeholder='Digite seu nome' />
      <Input label="Email" placeholder='exemplo@email.com' />
      <Input label="Senha" placeholder='************' />
      <Button>Criar conta</Button>
    </Container>
  )
}

export default Registrar
