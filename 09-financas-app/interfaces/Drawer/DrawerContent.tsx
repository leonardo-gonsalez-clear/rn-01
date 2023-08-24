import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import { Container, Header } from './drawerContent.styled'
import { useUserStore } from '../../stores/useUserStore'
import firstLetterUpperCase from '../../helpers/firstLetterUpperCase'

interface Props {
  props: DrawerContentComponentProps
}

const DrawerContent = ({ props }: Props) => {
  const user = useUserStore(state => state.user)

  return (
    <Container>
      <Header>
        <Image
          source={require("../../assets/Logo.png")}
          resizeMode='contain'
          style={{ width: 150, height: 150 }}

        />

        <Text style={{ fontWeight: "700", fontSize: 16 }}>Bem-Vindo</Text>
        <Text
          style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 20 }}
          numberOfLines={1}>{firstLetterUpperCase(user?.name as string)}</Text>
      </Header>
      <DrawerItemList {...props} />
    </Container>
  )
}

export default DrawerContent
