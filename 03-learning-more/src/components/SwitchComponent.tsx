import { StyleSheet, Text, View, Switch, SwitchProps } from "react-native"
import React from "react"

interface Props extends SwitchProps {
  props?: SwitchProps
}

export default function SwitchComponent({ ...props }: Props) {
  return (
    <View style={styles.container}>
      <Switch
        thumbColor={"#212121"}
        trackColor={{ true: "#2124" }}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    alignItems: "flex-start"
  }
})
