import { View, Text } from "react-native"
import React from "react"
import { onValue, ref } from "firebase/database"
import database from "../../../services/firebaseConnection"
import { Age, Container, Item, List, Name } from "./index.styled"

export interface IUser {
  nome: string
  idade: string
}

const index = () => {
  const [users, setUsers] = React.useState<null | IUser[]>(null)

  const getUsers = () => {
    const reference = ref(database, "usuarios/")

    onValue(reference, (snapshot) => {
      const data = snapshot.val()

      console.log(data)
      setUsers(data)
    })
  }

  React.useEffect(() => {
    getUsers()
  }, [])

  if (!users) return <Text>Carregando...</Text>
  return (
    <Container>
      <List>
        {users.map((user, index) => (
          <Item key={index}>
            <Name>{user.nome}</Name>
            <Age>{user.idade}</Age>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default index
