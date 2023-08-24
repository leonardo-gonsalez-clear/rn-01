import { View, Text } from 'react-native'
import React from 'react'
import { useProductsStore } from '../../stores/useProductsStore'
import { Container, Item, List, Total } from './cart.styled'

const Cart = () => {
  const cart = useProductsStore((state) => state.cart)

  const total = React.useMemo(() => (
    cart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  ), [cart])

  return (
    <Container>

      <List data={cart} contentContainerStyle={{ gap: 10, padding: 10 }} renderItem={({ item }) => (
        <Item key={item.product.id}>
          <Text>{item.product.name}</Text>
          <Text>Qty: {item.quantity}</Text>
          <Text>Total: R$ {item.total.toFixed(2)}</Text>
        </Item>
      )} />

      <Total style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Total: R$ {total}</Text>
      </Total>

    </Container>
  )
}

export default Cart
