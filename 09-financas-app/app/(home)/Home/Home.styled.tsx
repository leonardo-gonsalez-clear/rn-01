import styled from "styled-components/native"

export const Container = styled.View`
gap: 20px;
`

export const BalanceList = styled.ScrollView`

`

export const BalanceItem = styled.View`
  margin-right: 12px;
  width: 200px;
  height: 100px;
  padding: 10px;
  border-radius: 4px;
`

export const BalanceItemText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`

export const BalanceItemValue = styled.Text`
  font-size: 33px;
  font-weight: 500;
  color: #fff;
`

export const Recieves = styled.View`
background-color: #fff;
border-radius: 4px;
padding: 10px;
gap: 20px
`


export const RecievesTitle = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`


export const RecievesTitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

export const RecievesList = styled.ScrollView`
height: 400px;
justify-self: start;
`

export const RecievesItem = styled.View`
background-color: #eee;
border-radius: 4px;
padding: 10px;
gap: 8px
`

export const RecievesItemType = styled.View`
padding: 2px 8px;
border-radius: 4px;
align-self: flex-start;
flex-direction: row;
align-items: center;
gap: 8px;
`
export const RecievesItemTypeText = styled.Text`
font-style: italic;
font-size: 16px;
font-weight: 600;
color: #fff;
`

export const RecievesItemValue = styled.Text`
font-size: 18px;
font-weight: 500;
`
