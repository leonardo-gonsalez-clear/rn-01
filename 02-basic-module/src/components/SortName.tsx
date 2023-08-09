import React, { Component } from "react"
import { Text, View, Button } from "react-native"

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
      <View>
        <Text>{this.state.name}</Text>
        <Button title="sort" onPress={this.handleShuffleNames} />
      </View>
    )
  }
}
