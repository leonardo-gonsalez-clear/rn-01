import { View, Text } from 'react-native'
import React from 'react'
import { ButtonWrapper, Container, InputWrapper } from './Registrar.styled'
import Header from '../../../interfaces/Header'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Octicons } from '@expo/vector-icons'
import { format } from 'date-fns'
import { IPostReceive, usePostReceive } from '../../../mutations/user'
import { useRouter } from 'expo-router'

interface IData {
  description: string
  value: number
  type: "receita" | "despesa" | null
  date: string
}

const Registrar = () => {
  const [data, setData] = React.useState<IData>({
    description: "",
    value: 0,
    type: null,
    date: format(new Date, "dd/MM/yyyy")
  })

  const mutation = usePostReceive()
  const router = useRouter()

  const handleRegister = () => {
    console.log(data)

    if (!data.description || !data.value) return alert("Preencha todos os campos")

    if (!data.type) return alert("Selecione o tipo de movimentação")

    mutation.mutate(data as IPostReceive, {
      onSuccess: (data) => {
        alert(
          `Movimentação registrada com sucesso!

          Descrição: ${data.description}
          Valor: R$ ${data.value.toFixed(2)}`)

        setData(prev => ({
          ...prev,
          description: "",
          value: 0,
          type: null
        }))

        setTimeout(() => router.push("/(home)/Home/Home"), 1000)
      }
    })
  }

  return (
    <Container>
      <Header title="Registrar" />

      <InputWrapper>
        <Input
          label="Nome"
          placeholder='Mercado'
          onChangeText={(v) => setData(prev => ({ ...prev, description: v }))}
          value={data.description} />
        <Input
          label="Valor desejado"
          placeholder='R$ x.xxx,xx'
          keyboardType='numeric'
          onChangeText={(v) => setData(prev => ({ ...prev, value: Number(v.replace(",", ".")) }))}
          value={data.value ? data.value.toString() : ""}
        />
      </InputWrapper>

      <ButtonWrapper>
        <Button
          icon={<Octicons name="arrow-up" size={24} color="#fff" />}
          style={{ backgroundColor: data.type === "receita" ? "#3B3DBF" : "#12A454" }}
          onPress={() => setData(prev => ({ ...prev, type: "receita" }))}
        >
          Receita
        </Button>
        <Button
          icon={<Octicons name="arrow-down" size={24} color="#fff" />}
          style={{ backgroundColor: data.type === "despesa" ? "#3B3DBF" : "#E83F5B" }}
          onPress={() => setData(prev => ({ ...prev, type: "despesa" }))}
        >
          Despesa
        </Button>
      </ButtonWrapper>

      <Button onPress={handleRegister}>Registrar</Button>
    </Container >
  )
}

export default Registrar
