import { ScrollView, Text, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  padding: 12px;
`

export const List = styled(ScrollView)`
  gap: 8px;
`

export const Item = styled(View)`
  background-color: #ddd;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 10px;
`

export const Name = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
`

export const Age = styled(Text)`
  opacity: 0.7;
`
