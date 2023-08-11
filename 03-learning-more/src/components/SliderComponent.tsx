import { Dimensions, StyleSheet, Text, View } from "react-native"
import React from "react"
import Slider, { SliderProps } from "@react-native-community/slider"

interface Props extends SliderProps {
  props?: SliderProps
}

export default function SliderComponent({ ...props }: Props) {
  const [value, setValue] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  const screenDimensions = Dimensions.get("screen")

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={100}
        maximumValue={10000}
        onSlidingStart={() => setVisible(true)}
        onSlidingComplete={() => setVisible(false)}
        {...props}
      />
      {visible && (
        <Text
          style={[
            styles.text,
            {
              left:
                (props.value === undefined
                  ? 0
                  : (props.value * (screenDimensions.width - 60)) / 10000) - 25
            }
          ]}
        >
          R$ {props.value}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: "100%",
    marginBottom: 10
  },
  text: {
    position: "absolute",
    backgroundColor: "#ddd9",
    fontSize: 16,
    bottom: 10,
    fontWeight: "700",
    textAlign: "center",
    padding: 4,
    borderRadius: 4
  }
})
