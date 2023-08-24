import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { IProduct, useProductsStore } from '../../stores/useProductsStore'
import { CartIcon, Container, Header, ProductItem, ProductList, ProductName, Title } from './home.styled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const Home = () => {
  const products = useProductsStore((state) => state.products)
  const cart = useProductsStore((state) => state.cart)
  const addItemToCart = useProductsStore((state) => state.addItemToCart)
  const setCart = useProductsStore((state) => state.setCart)


  const handleAddItem = (item: IProduct) => {
    console.debug(item)

    const itemAlreadyAdded = cart.find((cartItem) => cartItem.product.id === item.id)

    if (itemAlreadyAdded) {
      setCart(cart.map(cartItem => (
        cartItem.product.id === item.id
          ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            total: cartItem.total + item.price
          }
          : cartItem
      )))
    }
    else {
      setCart([...cart, { product: item, quantity: 1, total: item.price }])
    }

    console.debug(cart)
  }

  const router = useRouter()
  return (
    <Container>
      <Header>
        <Title>Produtos</Title>

        <CartIcon onPress={() => router.push("/Cart/")}>
          <Feather name="shopping-cart" size={24} color="black" />
          <Text style={{
            backgroundColor: "#FF3131",
            paddingHorizontal: 5,
            borderRadius: 50,
            position: "absolute",
            top: -5,
            right: -5,

          }}>{cart.length}</Text>
        </CartIcon>
      </Header>

      <ProductList data={products} contentContainerStyle={{ gap: 10 }} renderItem={({ item }) => (
        <ProductItem>
          <View>
            <ProductName>{item.name}</ProductName>
            <Text>R$ {item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => handleAddItem(item)}>
            <Feather name="shopping-cart" size={16} color="black" />
          </TouchableOpacity>
        </ProductItem>
      )}
      />
      <Button title="Go to Cart" onPress={() => router.push('/Cart/')} />
    </Container>
  )
}

export default Home
