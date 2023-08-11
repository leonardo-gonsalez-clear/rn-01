import { StyleSheet, Text, View } from "react-native"
import React, { useMemo } from "react"
import { Picker, PickerItemProps } from "@react-native-picker/picker"

const pizzas = [
  {
    id: 1,
    nome: "Margherita",
    preco: 25.99
  },
  {
    id: 2,
    nome: "Pepperoni",
    preco: 28.99
  },
  {
    id: 3,
    nome: "Calabresa",
    preco: 23.99
  },
  {
    id: 4,
    nome: "Quatro Queijos",
    preco: 27.99
  },
  {
    id: 5,
    nome: "Frango com Catupiry",
    preco: 26.99
  }
]

interface Props {
  children: React.ReactNode
  value: number
  setValue: React.Dispatch<number>
}

export default function PickerComponent({ children, value, setValue }: Props) {
  const [selectedValue, setSelectedValue] = React.useState(1)

  const selectedPizza = pizzas[selectedValue - 1]

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Cardápio de Pizza</Text> */}
      <View style={styles.content}>
        <Picker
          selectedValue={value}
          onValueChange={(v) => setValue(v)}
          placeholder="Selecione"
          mode="dialog"
          style={styles.picker}
        >
          {children}
          {/* {pizzas.map((pizza) => (
            <Picker.Item key={pizza.id} label={pizza.nome} value={pizza.id} />
          ))} */}
        </Picker>
        {/* <Text style={styles.text}>Você selecionou: {selectedPizza.nome}</Text> */}
        {/* <Text style={styles.text}>Preço: R$ {selectedPizza.preco}</Text> */}
      </View>
    </View>
  )
}

interface ItemProps extends PickerItemProps {
  props?: PickerItemProps
}

export function PickerComponentItem({ ...props }: ItemProps) {
  return <Picker.Item {...props} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    width: "100%",
    marginBottom: 40
  },
  content: {
    gap: 8,
    height: "100%",
    borderRadius: 4
    // borderWidth: 1,
    // borderColor: "#ddd",
    // borderStyle: "solid"
  },
  header: {
    backgroundColor: "#c54c06",
    padding: 16,
    fontSize: 24,
    fontWeight: "700",
    color: "#351d0f"
  },
  picker: {
    backgroundColor: "#fff",
    fontSize: 16,
    width: "100%"
  },
  text: {
    fontSize: 16
  }
})
