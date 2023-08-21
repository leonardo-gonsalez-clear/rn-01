import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styled'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { useCreateUser } from '../../../mutations/user'

const Registrar = () => {
  const { mutate } = useCreateUser()
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: ''
  })


  const handleCreateUser = () => {
    console.log(userData)

    mutate(userData, {
      onError: (error) => {
        console.log(error)
      }
    })
  }
  return (
    <Container>
      <Input label="Nome" placeholder='Digite seu nome' onChangeText={(t) => setUserData(prev => ({ ...prev, name: t }))} />
      <Input label="Email" placeholder='exemplo@email.com' onChangeText={(t) => setUserData(prev => ({ ...prev, email: t }))} />
      <Input label="Senha" placeholder='************' onChangeText={(t) => setUserData(prev => ({ ...prev, password: t }))} />
      <Button onPress={handleCreateUser}>Criar conta</Button>
    </Container>
  )
}

export default Registrar
