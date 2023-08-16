import { View, Text } from "react-native"
import React from "react"
import { Stack, Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        title: "Aplicativo",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#292929"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="analytics" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default HomeLayout
