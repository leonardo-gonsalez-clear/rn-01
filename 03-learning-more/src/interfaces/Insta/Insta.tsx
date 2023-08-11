import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import React from "react"
import {
  Container,
  Feed,
  FeedSeparator,
  Header,
  Logo,
  Send
} from "./Insta.styled"
import FeedItem from "./FeedItem"

export interface PostProps {
  id: string
  nome: string
  descricao: string
  imgperfil: string
  imgPublicacao: string
  likeada: boolean
  likers: number
}

const data: PostProps[] = [
  {
    id: "1",
    nome: "Lucas Silva",
    descricao: "Mais um dia de muitos bugs :)",
    imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
    imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
    likeada: false,
    likers: 0
  },
  {
    id: "2",
    nome: "Matheus",
    descricao: "Isso sim é ser raiz!!!!!",
    imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
    imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
    likeada: false,
    likers: 0
  },
  {
    id: "3",
    nome: "Jose Augusto",
    descricao: "Bora trabalhar Haha",
    imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
    imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
    likeada: false,
    likers: 3
  },
  {
    id: "4",
    nome: "Gustavo Henrique",
    descricao: "Isso sim que é TI!",
    imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
    imgPublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
    likeada: false,
    likers: 1
  },
  {
    id: "5",
    nome: "Guilherme",
    descricao: "Boa tarde galera do insta...",
    imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
    imgPublicacao: "https://sujeitoprogramador.com/instareact/foto5.png",
    likeada: true,
    likers: 32
  }
]

export default function Insta() {
  const [posts, setPosts] = React.useState(data)

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Logo source={require("../../../assets/insta/logo.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Send source={require("../../../assets/insta/send.png")} />
        </TouchableOpacity>
      </Header>
      <Feed
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <FeedSeparator />}
        data={posts}
        renderItem={({ item }) => <FeedItem item={item} />}
      />
    </Container>
  )
}
