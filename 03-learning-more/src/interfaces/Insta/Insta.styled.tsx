import { FlatList, Image, View } from "react-native"
import styled from "styled-components/native"
import { PostProps } from "./Insta"

export const Container = styled(View)`
  flex: 1;
  margin-top: 15px;
`
export const Logo = styled(Image)``

export const Send = styled(Image)`
  max-width: 20px;
  max-height: 20px;
`

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 8px;
  border-bottom-width: 0.2px;
  border-color: #21212153;
  margin-bottom: 15px;
`

export const Feed = styled(FlatList<PostProps>)``

export const FeedSeparator = styled(View)`
  height: 15px;
`
