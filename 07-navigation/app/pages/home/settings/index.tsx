import { View, Text, Button } from "react-native"
import React from "react"
import { Link, Stack, Tabs } from "expo-router"

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
      <Link href={"/pages/home/settings/details/details"} asChild>
        <Button title="Mais detalhes" />
      </Link>
    </View>
  )
}

export default Settings
