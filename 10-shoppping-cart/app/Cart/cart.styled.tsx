import { FlatList } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { ICartItem } from "../../stores/useProductsStore"

export const Container = styled.View`
gap: 16px;
flex: 1
`


export const Item = styled.View`
border: 1px solid #ddd;
padding: 10px;
border-radius: 4px; 
`


export const List = styled(FlatList<ICartItem>)`
background-color: #fff;
border-radius: 4px;
flex: 2;
`

export const Total = styled.View`
background-color: #fff;
border-radius: 4px;
padding: 10px;
justify-self: flex-start;
`
