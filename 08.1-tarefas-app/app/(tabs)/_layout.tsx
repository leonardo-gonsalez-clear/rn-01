import { View, Text } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { Octicons } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="Registrar/Registrar"
      sceneContainerStyle={{ backgroundColor: "#fff", paddingHorizontal: 10 }}
    >
      <Tabs.Screen
        name="Registrar/Registrar"
        options={{
          title: "Registrar",
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="person-add" />
          ),
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null
        }}
        redirect={true}
      />
      <Tabs.Screen
        name="Login/Login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="sign-in" />
          ),
          tabBarShowLabel: false
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
