import { View, Text, Alert, GestureResponderEvent } from 'react-native'
import React from 'react'
import Header from '../../../interfaces/Header'
import { useDeleteReceive } from '../../../mutations/user'
import { format } from 'date-fns'
import { useIsFocused } from '@react-navigation/native'
import { BalanceItem, BalanceItemText, BalanceItemValue, BalanceList, Container, Recieves, RecievesItem, RecievesItemType, RecievesItemTypeText, RecievesItemValue, RecievesList, RecievesTitle, RecievesTitleText } from './Home.styled'
import { useGetBalance, useGetRecives } from '../../../queries/user'
import { Octicons } from '@expo/vector-icons'
import { GestureEvent, LongPressGestureHandlerGestureEvent } from 'react-native-gesture-handler'

const cardColors = {
  'receita': '#12A454',
  'despesa': '#E83F5B',
  'saldo': '#3B3DBF'
}

const Home = () => {
  const balance = useGetBalance()
  const isFocused = useIsFocused()
  const recives = useGetRecives()
  const deleteReceive = useDeleteReceive()

  React.useEffect(() => {
    balance.refetch()
    recives.refetch()
  }, [isFocused, deleteReceive.isSuccess])

  const handleDelete = (item_id: string) => {
    Alert.alert("Deletar", "Deseja realmente deletar esta movimentação?", [
      {
        text: "Sim",
        onPress: () => deleteReceive.mutate({ item_id })
      },
      {
        text: "Não",
      }
    ])
  }
  return (
    <Container>
      <Header title="Minhas movimentações" />

      <BalanceList
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {balance?.data?.map((item) => (
          <BalanceItem
            key={item.tag}
            style={{ backgroundColor: cardColors[item.tag] }}
          >
            <BalanceItemText>{item.tag}</BalanceItemText>
            <BalanceItemValue>R$ {item.saldo.toFixed(2)}</BalanceItemValue>
          </BalanceItem>
        )
        )}
      </BalanceList>

      <Recieves>
        <RecievesTitle>
          <Octicons name="calendar" size={24} color="black" />
          <RecievesTitleText>Últimas movimentações</RecievesTitleText>
        </RecievesTitle>

        <RecievesList contentContainerStyle={{ gap: 10 }}>
          {recives?.data?.map((item) => (
            <RecievesItem key={item.id} onLongPress={() => handleDelete(item.id)} activeOpacity={0.7}>
              <RecievesItemType
                style={{ backgroundColor: cardColors[item.type] }}>
                <Octicons color="#fff" name={item.type === "despesa" ? "arrow-down" : "arrow-up"} size={18} />
                <RecievesItemTypeText>
                  {item.type}
                </RecievesItemTypeText>
              </RecievesItemType>
              <RecievesItemValue>R$ {item.value.toFixed(2)}</RecievesItemValue>
            </RecievesItem>
          ))}
        </RecievesList>
      </Recieves>
    </Container >
  )
}

export default Home
