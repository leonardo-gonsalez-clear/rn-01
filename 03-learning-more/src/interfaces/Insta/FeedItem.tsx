import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import {
  Avatar,
  Container,
  Content,
  Description,
  Header,
  Icon,
  Interactions,
  Photo,
  Username,
  Wrapper
} from "./FeedItem.styled"
import { PostProps } from "./Insta"

export default function FeedItem({ item }: { item: PostProps }) {
  const [liked, setLiked] = React.useState(item.likeada)
  const [likes, setLikes] = React.useState(item.likers)

  const favIcon = React.useMemo(() => {
    const icon = liked
      ? require("../../../assets/insta/likeada.png")
      : require("../../../assets/insta/like.png")

    return icon
  }, [liked, item.likeada])

  const handleLike = () => {
    setLiked((prev) => !prev)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: item.imgperfil }} />
        <Username>{item.nome}</Username>
      </Header>
      <Content>
        <Photo source={{ uri: item.imgPublicacao }} resizeMode="cover" />
        <Wrapper>
          <Interactions>
            <TouchableOpacity onPress={handleLike}>
              <Icon source={favIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon source={require("../../../assets/insta/send.png")} />
            </TouchableOpacity>
          </Interactions>
          <Text>
            {likes} {likes > 1 || likes === 0 ? "curtidas" : "curtidas"}
          </Text>
          <Description>
            <Username>{item.nome}</Username>
            <Text>{item.descricao}</Text>
          </Description>
        </Wrapper>
      </Content>
    </Container>
  )
}
