import { Text, TextInput, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  gap: 4px;
`

export const InputRoot = styled(TextInput)`
  padding: 6px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`

export const Label = styled(Text)`
  font-size: 16px;
`
