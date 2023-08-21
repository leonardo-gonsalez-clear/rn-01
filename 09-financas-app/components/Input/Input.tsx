import { View, Text, TextInputProps } from 'react-native'
import React from 'react'
import { InputRoot } from './Input.styled'

interface InputProps extends TextInputProps {
  props?: TextInputProps
  label?: React.ReactNode
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <InputRoot {...props} />
    </View>
  )
}

export default Input
