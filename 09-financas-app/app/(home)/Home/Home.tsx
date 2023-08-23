import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../interfaces/Header'
import { useGetBalance } from '../../../mutations/user'
import { format } from 'date-fns'
import { useIsFocused } from '@react-navigation/native'
import { BalanceItem, BalanceItemText, BalanceItemValue, BalanceList, Container } from './Home.styled'

const cardColors = {
  'receita': '#12A454',
  'despesa': '#E83F5B',
  'saldo': '#3B3DBF'
}

const Home = () => {
  const balance = useGetBalance()
  const today = new Date()
  const isFocused = useIsFocused()

  React.useEffect(() => {
    balance.mutate({ date: format(today, "dd/MM/yyyy") },
      { onSuccess: (data) => console.log(data) })
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
    </Container>
  )
}

export default Home
