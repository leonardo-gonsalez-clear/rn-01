import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonRoot, ButtonText } from './Button.styled'
import Loading from '../Utils/Loading'

interface IButtonProps extends TouchableOpacityProps {
  props?: TouchableOpacityProps
  loading?: boolean
  children: React.ReactNode
}

const Button = ({ children, loading, ...props }: IButtonProps) => {
  return (
    <ButtonRoot {...props} >
      <ButtonText>{
        loading
          ? <Loading color={"#fff"} />
          : children
      }
      </ButtonText>
    </ButtonRoot>
  )
}

export default Button
