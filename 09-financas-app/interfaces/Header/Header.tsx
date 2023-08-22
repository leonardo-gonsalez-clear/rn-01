import { View, Text } from 'react-native'
import React from 'react'
import { ButtonMenu, Container, TextHeader } from './Header.styled'
import { Octicons } from '@expo/vector-icons'
import { useNavigation, DrawerActions } from '@react-navigation/native'

interface Props {
  title: React.ReactNode

}

const Header = ({ title }: Props) => {
  const navigation = useNavigation()

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Octicons name='three-bars' size={24} color={"#212121"} />
      </ButtonMenu>
      <TextHeader>{title}</TextHeader>
    </Container >
  )
}

export default Header
