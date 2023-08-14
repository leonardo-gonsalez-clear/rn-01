import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native"
import React from "react"

import api from "../api"
import {
  Card,
  Container,
  Description,
  Header,
  Poster,
  Title
} from "./HttpRequests.styled"

interface IMovie {
  id: number
  nome: string
  sinopse: string
  foto: string
}

export default function HttpRequests() {
  const [movies, setMovies] = React.useState<IMovie[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    api.get("r-api/?api=filmes").then((res) => {
      setMovies(res.data)
      setLoading(false)
    })
  }, [])

  if (loading)
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size={60} color={"#191919"} />
      </View>
    )
  return (
    <Container>
      <Header>Catálogo de filmes</Header>

      <FlatList
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Movie movie={item} />}
      />
    </Container>
  )
}

const Movie = ({ movie }: { movie: IMovie }) => {
  return (
    <Card>
      <Title>{movie.nome}</Title>
      <Poster source={{ uri: movie.foto, height: 200 }} />
      <Description>{movie.sinopse}</Description>
    </Card>
  )
}
