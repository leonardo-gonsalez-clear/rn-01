import { View, Text, Button } from "react-native"
import React from "react"
import Input from "../../components/Input/Input"
import { useUserStore } from "../../stores/useUserStore"
import { onValue, ref, update } from "firebase/database"
import { db } from "../../services/firebase"
import { Container, InputWrapper, Item, List } from "./index.styled"

interface IUser {
  id: string
  email: string
}

const index = () => {
  const tasks = useUserStore((state) => state.tasks)
  const setTasks = useUserStore((state) => state.setTasks)
  const logOut = useUserStore((state) => state.logOut)
  const user = useUserStore((state) => state.user) as IUser
  const [value, setValue] = React.useState<string>("")

  React.useEffect(() => {
    const reference = ref(db, `users/${user.id}/tasks`)

    onValue(reference, (snapshot) => {
      const data = snapshot.val() as ITask[]

      if (!data) return

      const tasks = Object.entries(data).map(([id, value]) => ({
        ...value,
        id
      }))

      console.log(tasks)

      setTasks(tasks)
    })
  }, [])

  const addTask = async () => {
    const reference = ref(db, `users/${user.id}/tasks`)

    console.log(user)

    const now = Date.now()

    await update(reference, {
      [now]: {
        title: value
      }
    })

    setTasks([...tasks, { id: now.toString(), title: value }])

    console.log(tasks)
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          label="Adicionar tarefa"
          placeholder="Anotar..."
          onChangeText={(v) => setValue(v)}
          value={value}
        />
        <Button title="+" onPress={addTask} />
      </InputWrapper>

      <List>
        {tasks.map((task) => (
          <Item key={task.id}>
            <Text>{task.title}</Text>
          </Item>
        ))}
      </List>

      <Button title="Sair" onPress={() => logOut()} />
    </Container>
  )
}

export default index
