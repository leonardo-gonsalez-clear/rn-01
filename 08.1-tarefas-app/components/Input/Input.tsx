import { View, Text, TextInputProps } from "react-native"
import React from "react"
import { Container, InputRoot, Label } from "./Input.styled"

interface Props extends TextInputProps {
  label: React.ReactNode
  props?: TextInputProps
}

const Input = ({ label, ...props }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputRoot {...props} />
    </Container>
  )
}

export default Input
