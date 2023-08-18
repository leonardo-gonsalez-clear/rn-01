import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  gap: 12px;
`

export const InputWrapper = styled.View`
  /* flex-direction: row; */
  gap: 8px;
  /* align-items: flex-end; */
`

export const List = styled.ScrollView`
  flex: 1;
  gap: 8px;
`

export const Item = styled.View`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #212121;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ItemText = styled.Text`
  font-size: 16px;
  color: #fff;
`
