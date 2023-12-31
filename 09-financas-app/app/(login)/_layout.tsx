import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useUserStore } from '../../stores/useUserStore'
import { Redirect } from 'expo-router'

const Layout = () => {
  const isLogged = useUserStore(state => state.isLogged)

  if (isLogged) return <Redirect href="/(home)" />
  return (
    <Stack
      initialRouteName='Login/index'
      screenOptions={{
        contentStyle: {
          padding: 16,
          backgroundColor: "#FaF4FF"
        }
      }}>
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
