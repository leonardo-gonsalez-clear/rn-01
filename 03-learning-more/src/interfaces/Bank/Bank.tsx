import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { Button, Container, Input, Label, Title } from "./Bank.styled"
import PickerComponent, {
  PickerComponentItem
} from "../../components/PickerComponent"
import SliderComponent from "../../components/SliderComponent"
import SwitchComponent from "../../components/SwitchComponent"

export default function Bank() {
  const [gender, setGender] = React.useState(1)
  const [limit, setLimit] = React.useState(50)
  const [isStudent, setIsStudent] = React.useState(false)
  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState<string>("")

  const handleSubmit = () => {
    if (!gender || !limit || !name || !age)
      return alert("Todos os campos devem ser preenchidos")

    alert(`
      Nome: ${name}
      Idade: ${age}
      Estudante: ${isStudent ? "Sim" : "Não"}
      Limite: R$ ${limit.toFixed(2)}
    `)
  }

  return (
    <Container>
      <Title>Banco React</Title>

      <View>
        <Label>Nome Completo</Label>
        <Input
          placeholder="João Almeida"
          textContentType="name"
          onChangeText={(v) => setName(v)}
          value={name}
        />
      </View>
      <View>
        <Label>Idade</Label>
        <Input
          placeholder="18"
          keyboardType="number-pad"
          onChangeText={(v) => setAge(v)}
          value={age}
        />
      </View>
      <View>
        <Label>Sexo</Label>
        <PickerComponent value={gender} setValue={setGender}>
          <PickerComponentItem label="Homem" value={1} />
          <PickerComponentItem label="Mulher" value={2} />
          <PickerComponentItem label="Prefiro não informar" value={3} />
        </PickerComponent>
      </View>
      <View>
        <Label>Limite de crédito</Label>
        <SliderComponent
          value={limit}
          onValueChange={(v) => setLimit(v)}
          step={1}
        />
      </View>
      <View>
        <Label>Estudante?</Label>
        <SwitchComponent
          value={isStudent}
          onValueChange={(v) => setIsStudent(v)}
        />
      </View>
      <Button onPress={handleSubmit}>
        <Text>Abrir conta</Text>
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({})
