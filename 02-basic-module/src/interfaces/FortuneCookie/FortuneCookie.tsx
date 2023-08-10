import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import React, { Component } from "react"
import Header from "./Header"

interface StateProps {
  phraseText: string
  img: string
}

export default class FortuneCookie extends Component<{}, StateProps> {
  phraseText = ""
  phrases
  phrasesLength

  constructor(props: {}) {
    super(props)

    this.state = {
      phraseText: "...",
      img: require("../../assets/biscoito.png")
    }

    this.phrases = [
      "Acredite em si mesmo e alcançará grandes conquistas.",
      "A sorte acompanha aqueles que persistem com determinação.",
      "Grandes oportunidades aguardam àqueles que arriscam.",
      "A vida é uma jornada; faça cada passo valer a pena.",
      "Semeie gentileza e colherá felicidade ao seu redor.",
      "A paciência é a chave para desvendar os mistérios do tempo.",
      "Seja a mudança que deseja ver no mundo.",
      "A criatividade é a luz que ilumina o caminho da inovação.",
      "Valorize as amizades verdadeiras, pois são tesouros raros.",
      "A sabedoria está em aprender tanto nas vitórias quanto nas derrotas."
    ]

    this.phrasesLength = this.phrases.length - 1
    this.handlePhrases = this.handlePhrases.bind(this)
  }

  handlePhrases() {
    const randomNumber = Math.round(Math.random() * this.phrasesLength)
    console.log(randomNumber)

    this.setState({
      phraseText: this.phrases[randomNumber],
      img: require("../../assets/biscoitoAberto.png")
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Image
            source={this.state.img as ImageSourcePropType}
            style={styles.img}
          />
          <Text style={[styles.phrase]}>"{this.state.phraseText}"</Text>
          <TouchableOpacity style={styles.btn} onPress={this.handlePhrases}>
            <View>
              <Text style={styles.btnText}>Quebrar biscoito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    justifyContent: "flex-start"
  },
  img: {
    width: 200,
    height: 200
  },
  content: {
    paddingTop: 32,
    alignSelf: "center",
    alignItems: "center",
    gap: 16
  },
  phrase: {
    textAlign: "center",
    fontSize: 24,
    fontStyle: "italic"
  },
  btn: {
    backgroundColor: "#ffd51d",
    padding: 8,
    borderRadius: 8
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5f3300"
  }
})
