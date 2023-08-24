import styled from "styled-components/native"
import { IProduct } from "../../stores/useProductsStore"
import { FlatList } from "react-native-gesture-handler"

export const Container = styled.View`
gap: 16px;

`


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 16px 0;
`

export const CartIcon = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`

export const ProductList = styled(FlatList<IProduct>)``

export const ProductItem = styled.View`
border: 1px solid #ddd;
padding: 10px;
border-radius: 4px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ProductName = styled.Text`
font-size: 18px;
font-weight: bold;
`


