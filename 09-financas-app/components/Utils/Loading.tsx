import { View, Text, ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'

interface Props extends ActivityIndicatorProps {
  props?: ActivityIndicatorProps
}

const Loading = ({ ...props }: Props) => {
  return (
    <ActivityIndicator color={"#212121"} size={20} {...props} />
  )
}

export default Loading
