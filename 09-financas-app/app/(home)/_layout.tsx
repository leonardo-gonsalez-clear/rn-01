import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import Colors from '../../constants/Colors';
import { Text } from '../../components/Themed';
import { useUserStore } from '../../stores/useUserStore';
import { Redirect } from 'expo-router';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isLogged = useUserStore(state => state.isLogged)

  if (!isLogged) return <Redirect href="/(login)" />

  return (
    <Drawer>
      <Drawer.Screen name="index" />
    </Drawer>

  );
}
