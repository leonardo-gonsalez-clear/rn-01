import React, { Component } from "react"
import { Text, View, Button, StyleSheet } from "react-native"

interface Props {
  names: string[]
}

interface StateProps {
  names: string[]
  namesAmount: number
  name: string
}

export default class SortName extends Component<Props, StateProps> {
  namesAmount = 0
  name = ""

  constructor(props: Props) {
    super(props)

    this.state = {
      names: props.names,
      name: "",
      namesAmount: 0
    }

    this.namesAmount = props.names.length
    this.name = ""
    this.handleShuffleNames = this.handleShuffleNames.bind(this)
  }

  handleShuffleNames() {
    const sortIndex = Math.floor(Math.random() * (this.namesAmount - 0) + 0)

    this.setState({
      name: this.state.names[sortIndex]
    })

    console.warn(this.state.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.name}</Text>
        </View>
        <Button title="sort" onPress={this.handleShuffleNames} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  textContainer: {
    backgroundColor: "#eee",
    padding: 8,
    minWidth: 200,
    borderRadius: 8
  }
})
