import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Keyboard
} from "react-native"
import React, { useRef } from "react"
import {
  Button,
  Buttons,
  Cep,
  Container,
  Content,
  Title
} from "./CEPSearch.styled"
import { Input } from "../../components"
import api from "../../services/api"

interface ICep {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  localidade: string
  logradouro: string
  uf: string
}

export default function CEPSearch() {
  const [cep, setCep] = React.useState("")
  const [data, setData] = React.useState<null | ICep>(null)
  const [loading, setLoading] = React.useState(false)
  const inputRef = useRef<TextInput>(null)

  const handleSearch = async () => {
    if (!cep) return

    try {
      setLoading(true)

      const request = await api
        .get<ICep>(`/${cep}/json`)
        .then((res) => res.data)

      setData(request)
      Keyboard.dismiss()
    } catch (e) {
      alert("Algo deu errado")
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setCep("")
    setData(null)
    inputRef.current?.focus()
  }

  return (
    <Container>
      <Title>Buscador de CEP</Title>

      <Input
        label="Código"
        placeholder="xxxxx-xxx"
        value={cep}
        onChangeText={(v) => setCep(v)}
        keyboardType="numeric"
        ref={inputRef}
      />

      <Buttons>
        <TouchableOpacity onPress={handleClear}>
          <Button style={{ backgroundColor: "#c01e29" }}>Limpar</Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearch}>
          <Button>Procurar</Button>
        </TouchableOpacity>
      </Buttons>

      {loading ? <ActivityIndicator size={40} color={"#eaeaea"} /> : null}
      {!data ? null : (
        <Content>
          <Cep>CEP: {data.cep}</Cep>
          <Text>Cidade: {data.localidade}</Text>
          <Text>Bairro: {data.bairro}</Text>
          <Text>Endereço: {data.logradouro}</Text>
          <Text>DDD: {data.ddd}</Text>
          <Text>Estado: {data.uf}</Text>
        </Content>
      )}
    </Container>
  )
}
