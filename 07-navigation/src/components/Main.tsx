import { View, Text } from "react-native"
import React from "react"
import { Link } from "expo-router"

const Main = () => {
  return (
    <View>
      <Text>Main</Text>
      <Link href={"/app"}>Clicar</Link>
    </View>
  )
}

export default Main
