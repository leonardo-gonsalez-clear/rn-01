import { View, Text } from "react-native"
import React from "react"
import { onValue, ref } from "firebase/database"
import database from "../../../services/firebaseConnection"
import { Age, Container, Item, List, Name } from "./index.styled"

export interface IUser {
  id: string
  nome: string
  idade: string
}

const index = () => {
  const [users, setUsers] = React.useState<IUser[]>([])

  const getUsers = () => {
    const reference = ref(database, "usuarios")

    onValue(reference, (snapshot) => {
      const data = snapshot.val()
      setUsers([])

      snapshot.forEach((item) => {
        const user = {
          id: item.key,
          nome: item.val().nome,
          idade: item.val().idade
        } as IUser
        console.log(user)

        setUsers((prev) => [...prev, user])
      })

      console.log(data)
    })
  }

  React.useEffect(() => {
    getUsers()
  }, [])

  if (!users) return <Text>Carregando...</Text>
  return (
    <Container>
      <List>
        {users.map((user) => (
          <Item>
            <Name>{user.nome}</Name>
            <Age>{user.idade}</Age>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default index
