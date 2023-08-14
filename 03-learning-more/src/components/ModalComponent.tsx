import { Button, Modal, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function ModalComponent() {
  const [visible, setVisible] = React.useState(false)

  const handleButton = () => {
    setVisible((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <Button title="Entrar" onPress={handleButton} />
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View style={styles.modalRoot}>
          <Entrar setVisible={setVisible} />
        </View>
      </Modal>
    </View>
  )
}

interface Props {
  setVisible: React.Dispatch<boolean>
}

const Entrar = ({ setVisible }: Props) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.modalText}>Você entrou com sucesso!</Text>
      <Button title="Fechar" onPress={() => setVisible(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalRoot: {
    justifyContent: "center",
    flex: 1
  },
  modal: {
    backgroundColor: "#212121",
    flex: 0.3,
    margin: 15,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  modalText: {
    color: "#fff",
    fontSize: 32,
    textAlign: "center"
  }
})
