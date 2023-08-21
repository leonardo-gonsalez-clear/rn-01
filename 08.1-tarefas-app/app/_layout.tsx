import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"

const RootLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#a10079" />
      <Slot />
    </>
  )
}

export default RootLayout
