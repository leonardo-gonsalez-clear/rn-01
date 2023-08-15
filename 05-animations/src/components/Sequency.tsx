import { Animated, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function Sequency() {
  const [sizes, setSizes] = React.useState({
    height: new Animated.Value(100),
    width: new Animated.Value(200),
    opacity: new Animated.Value(0)
  })

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(sizes.opacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.parallel([
        Animated.timing(sizes.width, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(sizes.height, {
          toValue: 50,
          duration: 2000,
          useNativeDriver: false
        })
      ])
    ]).start()
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
