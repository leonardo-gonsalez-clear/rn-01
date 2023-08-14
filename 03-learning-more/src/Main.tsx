import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"
import FlatListComponent from "./components/FlatListComponent"
import PickerComponent from "./components/PickerComponent"
import SliderComponent from "./components/SliderComponent"
import SwitchComponent from "./components/SwitchComponent"
import Bank from "./interfaces/Bank"
import Insta from "./interfaces/Insta/Insta"
import AsyncStorageComponent from "./components/AsyncStorageComponent"
import ModalComponent from "./components/ModalComponent"
import BestFuel from "./interfaces/BestFuel"

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatListComponent /> */}
      {/* <PickerComponent /> */}
      {/* <SliderComponent /> */}
      {/* <SwitchComponent /> */}
      {/* <Bank /> */}
      {/* <Insta /> */}
      {/* <AsyncStorageComponent /> */}
      {/* <ModalComponent /> */}
      <BestFuel />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
})
