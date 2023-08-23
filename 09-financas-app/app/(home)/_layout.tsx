import { Pressable, useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { useUserStore } from '../../stores/useUserStore';
import { Redirect } from 'expo-router';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isLogged = useUserStore(state => state.isLogged)

  if (!isLogged) return <Redirect href="/(login)" />

  return (
    <Drawer screenOptions={{
      headerShown: false,
      sceneContainerStyle: {
        backgroundColor: "#FaF4FF",
        paddingHorizontal: 10
      },

      drawerStyle: {
        backgroundColor: "#fff",
        paddingTop: 20
      },

      drawerActiveBackgroundColor: "#3b3dbf",
      drawerActiveTintColor: "#fff",

      drawerInactiveBackgroundColor: "#fff",
      drawerInactiveTintColor: "#212121"
    }}>
      <Drawer.Screen name="index" redirect={true} />
      <Drawer.Screen name="Home/Home" options={{ title: "Home" }} />
      <Drawer.Screen name="Registrar/Registrar" options={{ title: "Registrar" }} />
      <Drawer.Screen name="Perfil/Perfil" options={{ title: "Perfil" }} />
    </Drawer>

  );
}
