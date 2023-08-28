import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, CameraType, CameraPictureOptions } from 'expo-camera'
import { useFocusEffect } from '@react-navigation/native';


const CameraDevice = () => {
  const [cameraType, setCameraType] = React.useState(CameraType.front)
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions()
  const [isCameraReady, setIsCameraReady] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [photo, setPhoto] = React.useState<string | null>(null)
  const cameraRef = React.useRef<Camera>(null)


  const onCameraReady = () => {
    console.log('camera ready')

    setIsCameraReady(true)
  }

  const takePicture = async () => {
    if (!isCameraReady || !cameraRef.current) return

    const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 })
    console.log(photo)

    setPhoto(photo.uri)
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
    <View style={{ flex: 1, position: "absolute", zIndex: 100, height: "100%", width: "100%" }}>
      <Camera type={cameraType} style={{ flex: 1, width: "100%", height: "100%" }} ratio="16:9" onCameraReady={onCameraReady} ref={cameraRef}  >


      </Camera>
      <Button title='Tirar Foto' onPress={takePicture} />
      <Button title='switch camera' onPress={() => setCameraType(cameraType === CameraType.front ? CameraType.back : CameraType.front)} />

      {photo && <Modal visible={Boolean(photo)}>

        <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center", gap: 20 }}>

          <Image source={{ uri: photo }} style={{ width: 250, height: 400, objectFit: "contain", borderRadius: 50, borderColor: "#fff", borderWidth: 1 }} />

          <Button title='close' onPress={() => setPhoto(null)} />

        </View>

      </Modal>
      }
    </View>
  )
}

export default CameraDevice

const styles = StyleSheet.create({})
