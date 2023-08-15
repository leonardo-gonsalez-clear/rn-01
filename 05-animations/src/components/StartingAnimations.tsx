import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import React from "react"

export default function StartingAnimations() {
  const [sizes, setSizes] = React.useState({
    height: new Animated.Value(50),
    width: new Animated.Value(200),
    opacity: new Animated.Value(1)
  })

  const handleGraph = () => {
    Animated.sequence([
      Animated.timing(sizes.width, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start()
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#006eff",
          height: 70,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={handleGraph}>
          <Text
            style={{ backgroundColor: "#fff", color: "#006eff", padding: 10 }}
          >
            Gerar gráfico
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Animated.View
          style={{
            backgroundColor: "#006eff",
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
            width: sizes.width,
            height: sizes.height,
            opacity: sizes.opacity
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>R$ 100,00</Text>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
})
