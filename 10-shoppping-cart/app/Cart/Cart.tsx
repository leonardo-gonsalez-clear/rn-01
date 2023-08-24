import { View, Text } from 'react-native'
import React from 'react'
import { useProductsStore } from '../../stores/useProductsStore'
import { ButtonWrapper, Container, EmptyText, Item, List, Total } from './cart.styled'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Cart = () => {
  const cart = useProductsStore((state) => state.cart)
  const setCart = useProductsStore((state) => state.setCart)

  const total = React.useMemo(() => (
    cart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  ), [cart])

  const handleAddQnt = (itemId: string) => {
    console.debug(itemId)

    const item = cart.find((cartItem) => cartItem.product.id === itemId)

    if (!item) return


    setCart(cart.map(cartItem => (
      cartItem.product.id === itemId
        ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          total: cartItem.total + item.product.price
        }
        : cartItem
    )))
  }

  const handleRemoveQnt = (itemId: string) => {
    console.debug(itemId)

    const item = cart.find((cartItem) => cartItem.product.id === itemId)

    if (!item) return

    if (item.quantity === 1) {
      setCart(cart.filter(cartItem => cartItem.product.id !== itemId))

      return

    }

    setCart(cart.map(cartItem => (
      cartItem.product.id === itemId
        ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          total: cartItem.total - item.product.price
        }
        : cartItem
    )))

  }

  return (
    <Container>

      <List
        data={cart}
        ListEmptyComponent={() => <EmptyText>Carrinho vazio</EmptyText>}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => (
          <Item key={item.product.id}>
            <View>
              <Text>{item.product.name}</Text>
              <Text>Qty: {item.quantity}</Text>
              <Text>Total: R$ {item.total.toFixed(2)}</Text>
            </View>
            <ButtonWrapper>
              <TouchableOpacity style={{ padding: 6 }} onPress={() => handleAddQnt(item.product.id)}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 6 }} onPress={() => handleRemoveQnt(item.product.id)}>
                <Text>-</Text>
              </TouchableOpacity>
            </ButtonWrapper>
          </Item>
        )} />

      <Total style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Total: R$ {total}</Text>
      </Total>

    </Container>
  )
}

export default Cart
