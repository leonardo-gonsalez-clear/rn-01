import { Image, Text, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  flex: 1;
  margin-top: 20px;
  padding: 12px;
`

export const Header = styled(Text)`
  background-color: #191919;
  color: #d83131;
  padding: 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 12px;
`

export const Card = styled(View)`
  margin-bottom: 24px;
`

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 22px;
`

export const Description = styled(Text)`
  color: #353535;
`

export const Poster = styled(Image)`
  border-radius: 4px;
`
