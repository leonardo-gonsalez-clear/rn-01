import { Dimensions, StyleSheet, Text, View } from "react-native"
import React from "react"
import Slider from "@react-native-community/slider"

export default function SliderComponent() {
  const [value, setValue] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  const screenDimensions = Dimensions.get("screen")

  return (
    <View style={styles.container}>
      <Text>SliderComponent</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        onValueChange={(v) => setValue(v)}
        value={value}
        onSlidingStart={() => setVisible(true)}
        onSlidingComplete={() => setVisible(false)}
      />
      {visible && (
        <Text
          style={[
            styles.text,
            { left: (value * (screenDimensions.width - 60)) / 100 + 20 }
          ]}
        >
          {value}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 8,
    gap: 16
  },
  text: {
    position: "absolute",
    backgroundColor: "#ddd9",
    fontSize: 16,
    top: 10,
    fontWeight: "700",
    textAlign: "center",
    padding: 4,
    borderRadius: 4
  }
})
