import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  flex: 1;
  background-color: #212121;
  /* align-items: center; */
  justify-content: center;
  gap: 16px;
  padding: 10px;
`

export const Header = styled(View)`
  align-self: center;
  gap: 10px;
`

export const Content = styled(View)`
  gap: 20px;
`

export const Title = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`

export const Label = styled(Text)`
  color: #fff;
  margin-bottom: 6px;
`

export const InputWrapper = styled(View)`
  width: 100%;
`

export const Input = styled(TextInput)`
  background-color: #353535;
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  color: #fff;
  border-radius: 4px;
`

export const Button = styled(Text)`
  color: #fff;
  font-weight: 700;
  text-align: center;
  background-color: #b12a2a;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
`
