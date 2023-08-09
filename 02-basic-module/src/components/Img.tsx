import {
  Image,
  ImageProps,
  ImagePropsBase,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View
} from "react-native"
import React from "react"

interface Props extends ImageProps {
  size?: keyof typeof sizes
  props?: ImageProps
}

export default function Img({ size, ...props }: Props) {
  return (
    <Image
      {...props}
      style={[sizes[size || "xl"], styles.container, props.style]}
    />
  )
}

const sizes = StyleSheet.create({
  xl: {
    width: 300,
    height: 300
  },
  lg: {
    width: 200,
    height: 200
  }
})

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden"
  }
})
