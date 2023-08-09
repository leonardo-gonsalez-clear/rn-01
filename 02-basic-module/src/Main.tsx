import React from "react"
import { Text, View } from "react-native"
import Img from "./components/Img"

export const Main = () => {
  const uri =
    "https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png"

  return (
    <View>
      <Text>Main Component</Text>
      <Img
        source={{
          uri
        }}
        style={{ width: 350, height: 200, borderRadius: 4 }}
      />
    </View>
  )
}
