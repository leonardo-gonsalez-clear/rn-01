import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack initialRouteName='Login/index' screenOptions={{ contentStyle: { padding: 16 } }}>
      <Stack.Screen name='index' redirect={true} />
      <Stack.Screen name='Login/index' options={{ headerShown: false }} />
      <Stack.Screen name='Registrar/index' options={{ title: "Registrar" }} />
    </Stack>
  )
}

export default Layout
