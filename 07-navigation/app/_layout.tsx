import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"

const Layout = () => {
  return (
    <>
      {/* <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: { color: "#008cff" },
          headerShown: false
        }}
      /> */}
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "#292929" },
          drawerInactiveTintColor: "#ddd7"
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Inicio" }} />
        <Drawer.Screen name="pages/home" options={{ title: "Home" }} />
      </Drawer>
    </>
  )
}

export default Layout
