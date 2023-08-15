import { Animated, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function Loop() {
  const [sizes, setSizes] = React.useState({
    height: new Animated.Value(100),
    width: new Animated.Value(200),
    opacity: new Animated.Value(0)
  })

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(sizes.opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }),

        Animated.timing(sizes.opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: "#328dca",
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "center",
          width: sizes.width,
          height: sizes.height,
          opacity: sizes.opacity
        }}
      >
        <Text style={{ fontSize: 20 }}>Animação...</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
