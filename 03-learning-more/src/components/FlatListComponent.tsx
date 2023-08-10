import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

interface Props {
  id: number
  nome: string
  idade: number
  email: string
}

const data: Props[] = [
  {
    id: 1,
    nome: "Alice",
    idade: 25,
    email: "alice@example.com"
  },
  {
    id: 2,
    nome: "Bob",
    idade: 30,
    email: "bob@example.com"
  },
  {
    id: 3,
    nome: "Carol",
    idade: 28,
    email: "carol@example.com"
  },
  {
    id: 4,
    nome: "David",
    idade: 22,
    email: "david@example.com"
  },
  {
    id: 5,
    nome: "Eve",
    idade: 35,
    email: "eve@example.com"
  }
]

export default function FlatListComponent() {
  const [users, setUsers] = React.useState(data)

  return (
    <View style={styles.container}>
      <Text>FlatListComponent</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: "100%" }}></View>
        )}
        data={users}
        renderItem={({ item }) => <User item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16
  },
  users: {
    gap: 16
  },
  user: {
    backgroundColor: "#cfcfcf",
    padding: 8,
    borderRadius: 4,
    height: 250
  }
})

const User = ({ item }: { item: Props }) => {
  return (
    <View style={styles.user}>
      <Text>{item.nome}</Text>
      <Text>{item.idade} Anos</Text>
      <Text>{item.email}</Text>
    </View>
  )
}
