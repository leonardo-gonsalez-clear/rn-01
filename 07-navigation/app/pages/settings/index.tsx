import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const Settings = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Configurações" }} />
      <Text>Settings</Text>
    </View>
  )
}

export default Settings
