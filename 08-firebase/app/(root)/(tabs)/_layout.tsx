import { View, Text } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { Octicons } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Usuários",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Home/Home"
        options={{
          title: "Gerenciar",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="tools" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Registrar/Registrar"
        options={{
          title: "Gerenciar",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person-add" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
