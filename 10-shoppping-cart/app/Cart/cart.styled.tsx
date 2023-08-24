import { FlatList } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { ICartItem } from "../../stores/useProductsStore"

export const Container = styled.View`
gap: 16px;
flex: 1;
`


export const Item = styled.View`
border: 1px solid #ddd;
padding: 10px;
border-radius: 4px; 
flex-direction: row;
justify-content: space-between;
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
justify-self: start;
`

export const ButtonWrapper = styled.View`
flex-direction: row;
align-items: center;
gap: 16px;
align-self: flex-end;
`

export const EmptyText = styled.Text`
font-size: 24px;
font-weight: 500;
align-self: center;
opacity: 0.5;
`
