import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTitleStyle: { color: "#008cff" }
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details/details" options={{ title: "Detalhes" }} />
    </Stack>
  )
}

export default Layout
