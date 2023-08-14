import React from "react"
import {
  Container,
  Title,
  Label,
  InputWrapper,
  Input,
  Header,
  Content,
  Button
} from "./BestFuel.styled"
import { Image, Modal, TouchableOpacity, Keyboard } from "react-native"
import FuelModal from "./Modal"

import { create } from "zustand"

interface StoreProps {
  whichBest: "Gasolina" | "Álcool" | null
  setWhichBest: (whichBest: "Gasolina" | "Álcool") => void
  gasolinaValue: null | number
  setGasolinaValue: (value: number) => void
  alcoolValue: null | number
  setAlcoolValue: (value: number) => void
}

interface useModalStoreProps {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const useFuelStore = create<StoreProps>((set) => ({
  whichBest: null,
  setWhichBest: (whichBest: "Gasolina" | "Álcool") => set({ whichBest }),
  gasolinaValue: null,
  setGasolinaValue: (value: number) => set({ gasolinaValue: value }),
  alcoolValue: null,
  setAlcoolValue: (value: number) => set({ alcoolValue: value })
}))

export const useModalStore = create<useModalStoreProps>((set) => ({
  visible: false,
  setVisible: (visible: boolean) => set({ visible })
}))

const BestFuel = () => {
  const setGasolinaValue = useFuelStore((props) => props.setGasolinaValue)
  const setAlcoolValue = useFuelStore((props) => props.setAlcoolValue)
  const alcoolValue = useFuelStore((props) => props.alcoolValue)
  const gasolinaValue = useFuelStore((props) => props.gasolinaValue)
  const setWhichBest = useFuelStore((props) => props.setWhichBest)
  const visible = useModalStore((props) => props.visible)
  const setVisible = useModalStore((props) => props.setVisible)

  const handleCalculate = () => {
    if (!gasolinaValue || !alcoolValue) return

    Keyboard.dismiss()

    const best = alcoolValue / gasolinaValue < 0.7 ? "Álcool" : "Gasolina"

    setWhichBest(best)
    setVisible(true)
  }

  return (
    <Container>
      <Header>
        <Image source={require("../../../assets/fuel/logo.png")} />
        <Title>Qual a melhor opção?</Title>
      </Header>
      <Content>
        <InputWrapper>
          <Label>Álcool (preço por litro)</Label>
          <Input
            placeholder="R$ x.xx"
            placeholderTextColor={"#fff7"}
            onChangeText={(v) => setAlcoolValue(Number(v.replace(",", ".")))}
            keyboardType="number-pad"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Gasolina (preço por litro)</Label>
          <Input
            placeholder="R$ x.xx"
            placeholderTextColor={"#fff7"}
            onChangeText={(v) => setGasolinaValue(Number(v.replace(",", ".")))}
            keyboardType="number-pad"
          />
        </InputWrapper>
        <TouchableOpacity onPress={handleCalculate}>
          <Button>Calcular</Button>
        </TouchableOpacity>
      </Content>
      <Modal animationType="slide" visible={visible}>
        <FuelModal />
      </Modal>
    </Container>
  )
}

export default BestFuel
