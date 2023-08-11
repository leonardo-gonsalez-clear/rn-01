import { Image, Text, View } from "react-native"
import styled from "styled-components/native"

export const Container = styled(View)`
  flex: 1;
  gap: 2px;
  border-bottom-width: 0.2px;
  border-color: #21212153;
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
  padding-bottom: 4px;
`

export const Avatar = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`

export const Username = styled(Text)`
  font-weight: 700;
`

export const Photo = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  flex: 1;
`

export const Content = styled(View)``

export const Description = styled(View)`
  flex-direction: row;
  gap: 8px;
`

export const Interactions = styled(View)`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

export const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`

export const Wrapper = styled(View)`
  padding: 8px 16px;
  gap: 4px;
`
