import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 16px;
  margin-top: 20px;
  gap: 26px;
`
export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
`

export const Input = styled(TextInput)`
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #ddd;
`

export const Label = styled(Text)``

export const Button = styled(TouchableOpacity)`
  background-color: #eee;
  padding: 8px;
  border-radius: 4px;
  align-self: flex-end;
`
