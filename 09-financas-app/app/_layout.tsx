import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMeUser } from '../mutations/user';
import { useUserStore } from '../stores/useUserStore';
import index from './(login)';
import HomeLayout from './(home)/_layout';
import LoginLayout from "./(login)/_layout"
import { Redirect } from 'expo-router';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const client = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <RootLayoutNav />
    </QueryClientProvider>
  );
}


function RootLayoutNav() {
  const me = useMeUser()
  const user = useUserStore(state => state.user)
  const isLogged = useUserStore(state => state.isLogged)


  React.useEffect(() => {
    me.mutate()
  }, [])



  return (
    <Slot />
  );
}
