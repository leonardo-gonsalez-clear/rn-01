import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../interfaces/Header'
import { useGetBalance } from '../../../mutations/user'
import { format } from 'date-fns'
import { useIsFocused } from '@react-navigation/native'
import { BalanceItem, BalanceItemText, BalanceItemValue, BalanceList, Container, Recieves, RecievesItem, RecievesItemType, RecievesItemTypeText, RecievesItemValue, RecievesList, RecievesTitle, RecievesTitleText } from './Home.styled'
import { useGetRecives } from '../../../queries/user'
import { Octicons } from '@expo/vector-icons'

const cardColors = {
  'receita': '#12A454',
  'despesa': '#E83F5B',
  'saldo': '#3B3DBF'
}

const Home = () => {
  const balance = useGetBalance()
  const today = new Date()
  const isFocused = useIsFocused()
  const recives = useGetRecives()

  React.useEffect(() => {
    balance.mutate({ date: format(today, "dd/MM/yyyy") },
      { onSuccess: (data) => console.log(data) })

    recives.refetch()
  }, [isFocused])

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
            <RecievesItem key={item.id}>
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
