import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native"
import React, { Component } from "react"

interface StateProps {
  timer: number
  timerId: NodeJS.Timer | null
  cycles: number[]
}

export default class Timer extends Component<{}, StateProps> {
  timerId = null
  cycles = []

  constructor(props: {}) {
    super(props)

    this.state = {
      timer: 0,
      timerId: null,
      cycles: []
    }

    this.timerId = null
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.cycles = []
  }

  start() {
    if (this.state.timerId) return

    const id = setInterval(() => {
      this.setState({
        timer: this.state.timer + 0.1
      })
    }, 100)

    this.setState({
      timerId: id
    })
  }

  stop() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState({
        timerId: null
      })
    } else if (this.state.timer !== 0 && !this.state.timerId) {
      this.setState({
        cycles: [this.state.timer, ...this.state.cycles],
        timer: 0
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cronômetro</Text>
        <Image source={require("../../assets/timer.png")} style={styles.img} />
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnText}>Começar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.stop}>
            <Text style={styles.btnText}>Parar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll} contentInset={{ bottom: 100 }}>
          {this.state.cycles.map((cycle, index) => (
            <Text key={index} style={styles.cycles}>
              {cycle.toFixed(1)}
            </Text>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#eee"
  },
  scroll: {
    backgroundColor: "#cecece",
    width: "100%",
    padding: 16,
    borderRadius: 4,
    flexGrow: 1
  },
  cycles: {
    fontWeight: "700",
    fontSize: 32,
    alignSelf: "center"
  },
  img: {
    width: 150,
    height: 150
  },
  timer: {
    fontSize: 64,
    fontWeight: "700"
  },
  btnWrapper: {
    flexDirection: "row",
    gap: 16
  },
  btn: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 4,
    flex: 1
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700"
  }
})
