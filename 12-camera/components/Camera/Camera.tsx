import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, CameraType, CameraPictureOptions } from 'expo-camera'
import { useFocusEffect } from '@react-navigation/native';


const CameraDevice = () => {
  const [cameraType, setCameraType] = React.useState(CameraType.front)
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions()
  const [isCameraReady, setIsCameraReady] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)


  const onCameraReady = () => {
    console.log('camera ready')

    setIsCameraReady(true)
  }

  const takePicture = async () => {
    if (!isCameraReady) {
      return
    }

    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: true,
      skipProcessing: true,
      onPictureSaved: (data) => {
        console.log(data)
      }
    }

  }

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      await setHasPermission()
    })()

  }, [])

  useFocusEffect(
    React.useCallback(() => {
      console.log('focus')
      setIsFocused(true)
      return () => {
        console.log('blur')
        setIsFocused(false)
      }
    }, [])
  )


  if (!hasPermission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!hasPermission.granted) {
    // Camera permissions are not granted yet

    return (
      <View >
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={setHasPermission} title="grant permission" />
      </View>
    );
  }

  if (!isFocused) return
  return (
    <View style={{ flex: 1, position: "absolute", zIndex: 100, width: "100%", height: "100%" }}>
      <Camera type={cameraType} style={{ flex: 1 }} onCameraReady={onCameraReady}  >

        <Button title='teste' onPress={takePicture} />

      </Camera>
    </View>
  )
}

export default CameraDevice

const styles = StyleSheet.create({})
