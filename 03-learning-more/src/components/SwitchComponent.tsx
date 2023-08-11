import { StyleSheet, Text, View, Switch } from "react-native"
import React from "react"

export default function SwitchComponent() {
  const [active, setActive] = React.useState(false)

  return (
    <View>
      <Text>SwitchComponent</Text>
      <Switch
        value={active}
        onValueChange={(v) => setActive(v)}
        thumbColor={"#212121"}
        trackColor={{ true: "#2124" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
