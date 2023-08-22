import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { useUserStore } from '../../stores/useUserStore';

export default function TabOneScreen() {
  const router = useRouter()
  const logout = useUserStore(state => state.logout)
  const user = useUserStore(state => state.user)
  return (
    <View style={styles.container}>
      <Button title="Go to login" onPress={() => router.push("/(login)/")} />
      <Button title="Logout" onPress={() => logout()} />
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>{user?.email}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
