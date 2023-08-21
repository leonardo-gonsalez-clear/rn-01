import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack initialRouteName='Login/index' screenOptions={{ contentStyle: { padding: 16 } }}>
      <Stack.Screen name='index' redirect={true} />
      <Stack.Screen name='Login/index' options={{
        headerShown: false,
        statusBarStyle: "dark",
        statusBarTranslucent: true
      }} />
      <Stack.Screen name='Registrar/index' options={{
        title: "Registrar",
        headerStyle: { backgroundColor: "#1e81b0" },
        headerTintColor: "#fff",
        statusBarStyle: "light",
        statusBarTranslucent: true

      }} />
    </Stack>
  )
}

export default Layout
