import { SafeAreaView, Text, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  padding: 8px;
  margin-top: 20px;
  gap: 10px;
`

export const Title = styled(Text)`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  align-self: center;
  font-weight: 700;
  font-size: 16px;
`

export const Button = styled(Text)`
  background-color: #2da44e;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
`

export const Buttons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled(View)`
  flex: 0.5;
  justify-content: center;
`

export const Cep = styled(Text)`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
`
