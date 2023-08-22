import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../interfaces/Header'
import { useGetBalance } from '../../../mutations/user'

const Home = () => {
  const balance = useGetBalance()

  React.useEffect(() => {
    balance.mutate({ date: "22/08/2023" }, { onSuccess: (data) => console.log(data) })
  }, [])

  return (
    <View>
      <Header title="Minhas movimentações" />

      {balance?.data?.map((item) => (
        <View>
          <Text>{item.tag}</Text>
          <Text>{item.saldo}</Text>
        </View>
      )
      )}
    </View>
  )
}

export default Home
