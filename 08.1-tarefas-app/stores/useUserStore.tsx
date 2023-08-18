import { create } from "zustand"

interface IUser {
  id: string
  email: string
}

interface ITask {
  id: string
  title: string
}

interface UserStore {
  user: IUser | null
  setUser: (user: IUser | null) => void
  tasks: ITask[]
  setTasks: (tasks: ITask[]) => void
  logOut: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  logOut: () => set({ user: null, tasks: [] })
}))
