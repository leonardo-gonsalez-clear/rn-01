import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { IProduct, useProductsStore } from '../../stores/useProductsStore'
import { Container, Header, ProductItem, ProductList, ProductName, Title } from './home.styled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const Home = () => {
  const products = useProductsStore((state) => state.products)


  const router = useRouter()
  return (
    <Container>
      <Header>
        <Title>Produtos</Title>

        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </Header>

      <ProductList data={products} contentContainerStyle={{ gap: 10 }} renderItem={({ item }) => (
        <ProductItem>
          <View>
            <ProductName>{item.name}</ProductName>
            <Text>R$ {item.price}</Text>
          </View>
          <TouchableOpacity>
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
