import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { useFuelStore, useModalStore } from "./BestFuel"
import {
  Button,
  Container,
  Header,
  Price,
  Prices,
  PricesTitle,
  Title
} from "./Modal.styled"

export default function Modal() {
  const whichBest = useFuelStore((props) => props.whichBest)
  const gasolinaValue = useFuelStore((props) => props.gasolinaValue)
  const alcoolValue = useFuelStore((props) => props.alcoolValue)
  const setVisible = useModalStore((props) => props.setVisible)

  return (
    <Container>
      <Header>
        <Image source={require("../../../assets/fuel/gas.png")} />
        <Title>Compensa usar {whichBest}</Title>
      </Header>

      <Prices>
        <PricesTitle>Com os preços</PricesTitle>
        <Price>Álcool: R$ {alcoolValue?.toFixed(2)}</Price>
        <Price>Gasolina: R$ {gasolinaValue?.toFixed(2)}</Price>
      </Prices>

      <TouchableOpacity onPress={() => setVisible(false)}>
        <Button>Calcular novamente</Button>
      </TouchableOpacity>
    </Container>
  )
}
