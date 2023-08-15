import { View, Text, TextInput, TextInputProps } from "react-native"
import React from "react"
import { Container, InputRoot, Label } from "./Input.styled"

interface Props extends TextInputProps {
  label: React.ReactNode
  props?: TextInputProps & React.Ref<TextInput>
}

const Input = React.forwardRef<TextInput, React.PropsWithChildren<Props>>(
  ({ label, ...props }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>
        <InputRoot {...props} ref={ref} />
      </Container>
    )
  }
)

export default Input
