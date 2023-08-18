import { View, Text } from "react-native"
import React from "react"
import { Redirect, Slot, useRouter } from "expo-router"
import Header from "../../interfaces/Header/Header"
import { useUserStore } from "../../stores/useUserStore"
import Login from "../(tabs)/Login/Login"

const PagesLayout = () => {
  const user = useUserStore((state) => state.user)
  const router = useRouter()

  if (!user) {
    return <Redirect href="/(tabs)/Login/Login" />
  }

  return (
    <>
      <Header />
      <View style={{ padding: 10, flex: 1 }}>
        <Slot />
      </View>
    </>
  )
}

export default PagesLayout
