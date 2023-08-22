import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface IUserStore {
  user: IUser | null
  setUser: (user: IUser | null) => void
  isLogged: boolean
  logout: () => void
}

export const useUserStore = create<IUserStore>(set => ({
  user: null,
  setUser: (user) => set({ user, isLogged: !!user }),
  isLogged: false,
  logout: async () => {
    await AsyncStorage.clear()
      .then(() => set({ user: null, isLogged: false }))
      .catch(err => console.log(err))

  }
}))
