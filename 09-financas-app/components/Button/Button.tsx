import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonRoot, ButtonText } from './Button.styled'

interface IButtonProps extends TouchableOpacityProps {
  props?: TouchableOpacityProps
  children: React.ReactNode
}

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <ButtonRoot {...props} >
      <ButtonText>{children}</ButtonText>
    </ButtonRoot>
  )
}

export default Button
