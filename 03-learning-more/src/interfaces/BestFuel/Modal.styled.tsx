import { Text, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  flex: 1;
  background-color: #212121;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Header = styled(View)`
  gap: 12px;
  align-items: center;
`

export const Title = styled(Text)`
  font-size: 28px;
  color: #6fd83f;
  text-align: center;
  font-weight: 700;
`

export const Prices = styled(View)`
  gap: 8px;
  align-items: center;
`

export const PricesTitle = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`

export const Price = styled(Text)`
  color: #fffa;
`

export const Button = styled(Text)`
  color: #b12a2a;
  font-weight: 700;
  text-align: center;
  border: 1px solid #b12a2a;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
`
