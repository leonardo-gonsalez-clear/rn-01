import { View, Text, Button, TextInput, Keyboard } from "react-native"
import React, { useRef } from "react"
import Input from "../../components/Input/Input"
import { useUserStore } from "../../stores/useUserStore"
import { onValue, ref, remove, update } from "firebase/database"
import { db } from "../../services/firebase"
import {
  Container,
  EditingWarning,
  InputWrapper,
  Item,
  ItemText,
  List,
  TextWarning
} from "./index.styled"
import { Octicons } from "@expo/vector-icons"

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
  const [id, setId] = React.useState<string>("")
  const inputRef = useRef<TextInput>(null)

  React.useEffect(() => {
    const reference = ref(db, `users/${user.id}/tasks`)

    onValue(reference, (snapshot) => {
      const data = snapshot.val() as ITask[]

      if (!data) return

      const tasks = Object.entries(data).map(([id, value]) => ({
        ...value,
        id
      }))

      setTasks(tasks)
    })
  }, [])

  const addTask = async () => {
    if (!value) return alert("insira alguma tarefa")

    if (id) return await sendUpdatedTasks()

    const reference = ref(db, `users/${user.id}/tasks`)

    const now = Date.now()

    await update(reference, {
      [now]: {
        title: value
      }
    })

    setTasks([...tasks, { id: now.toString(), title: value }])

    Keyboard.dismiss()
    setValue("")
  }

  const removeTask = async (taskId: string) => {
    if (taskId === id)
      return alert("Não é possível excluir uma tarefa em edição")

    const reference = ref(db, `users/${user.id}/tasks/${taskId}`)

    await remove(reference)

    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const updateTask = async (id: string) => {
    if (!inputRef.current) return

    inputRef.current.focus()

    setValue(tasks.find((task) => task.id === id)?.title as string)

    setId(id)
  }

  const sendUpdatedTasks = async () => {
    const reference = ref(db, `users/${user.id}/tasks/${id}`)

    await update(reference, {
      title: value
    })

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: value
          }
        }

        return task
      })
    )

    setValue("")
    setId("")
    Keyboard.dismiss()
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          label="Adicionar tarefa eba"
          placeholder="Anotar..."
          onChangeText={(v) => setValue(v)}
          value={value}
          ref={inputRef}
        />
        {id && (
          <EditingWarning>
            <Octicons name="pencil" size={16} color={"#ffc400"} />
            <TextWarning>Você está editando uma tarefa.</TextWarning>
          </EditingWarning>
        )}
        <Button title="+" onPress={addTask} />
      </InputWrapper>

      <List>
        {tasks.map((task) => (
          <Item key={task.id}>
            <ItemText>{task.title}</ItemText>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Button title="E" onPress={() => updateTask(task.id)} />
              <Button title="X" onPress={() => removeTask(task.id)} />
            </View>
          </Item>
        ))}
      </List>

      <Button title="Sair" onPress={() => logOut()} />
    </Container>
  )
}

export default index
