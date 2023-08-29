import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import MapView, { MapPressEvent, Marker } from 'react-native-maps';
import React from 'react';

export default function TabOneScreen() {
  const [loc, setLoc] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [markers, setMarkers] = React.useState<typeof loc[]>([])

  const handleLoc1 = () => {
    setLoc((p) => ({ ...p, latitude: -23.5613991, longitude: -46.7307891 }))

  }

  const handleLoc2 = () => {
    setLoc((p) => ({ ...p, latitude: 21.97456, longitude: -78.21212 }))
  }

  const handleChange = (region: any) => {
    setLoc(region)
  }

  const handlePress = ({ nativeEvent }: MapPressEvent) => {
    const coords = {
      latitude: nativeEvent.coordinate.latitude,
      longitude: nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    setMarkers((p) => [...p, coords])

    console.log(nativeEvent.coordinate.longitude)
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10, position: 'absolute', top: 0, left: 0, zIndex: 100 }}>
        <Button title="Loc 1" onPress={handleLoc1} />
        <Button title="Loc 2" onPress={handleLoc2} />
        <Text>{loc.latitude.toFixed(2)} | {loc.longitude.toFixed(2)}</Text>
      </View>
      <MapView
        onMapReady={() => alert("Mapa carregado")}
        onRegionChangeComplete={handleChange}
        onPress={handlePress}
        style={styles.map}
        initialRegion={loc}
        region={loc}
      >
        <Marker coordinate={{ latitude: 21.97456, longitude: -78.21212 }} title='Cuba' description='País da América Latina' />
        {markers.map((marker) => (
          <Marker key={marker.longitude + marker.latitude} coordinate={marker} />
        ))}

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
