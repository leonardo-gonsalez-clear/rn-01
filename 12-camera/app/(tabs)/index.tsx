import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import CameraDevice from '../../components/Camera/Camera';
import React from 'react';

export default function TabOneScreen() {
  const [active, setActive] = React.useState(true)

  React.useEffect(() => {

    return () => {
      setActive(false)
    }
  }, [])

  return (
    <View style={styles.container}>
      {active && <CameraDevice />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
