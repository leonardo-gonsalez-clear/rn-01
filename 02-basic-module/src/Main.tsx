import React from "react"
import { Text, View } from "react-native"
import Img from "./components/Img"
import Sizes from "./components/Sizes"
import SortName from "./components/SortName"
import Form from "./components/Form"
import FortuneCookie from "./interfaces/FortuneCookie/FortuneCookie"

export const Main = () => {
  const uri =
    "https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png"

  return (
    <View style={{ flex: 1 }}>
      {/* <Img
        source={{
          uri
        }}
        style={{ width: 350, height: 200, borderRadius: 4 }}
      /> */}
      {/* <SortName names={["Leonardo", "Pedro", "Guilherme", "Ricardo"]} /> */}
      {/* <Sizes /> */}
      {/* <Form /> */}
      <FortuneCookie />
    </View>
  )
}
