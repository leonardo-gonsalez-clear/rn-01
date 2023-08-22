import { useMutation, useQuery } from "react-query";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserStore } from "../stores/useUserStore";

interface ICreateUser {
  name: string
  email: string
  password: string
}

export const useCreateUser = () => {
  const mutation = useMutation({
    mutationKey: "createUser",
    mutationFn: async (data: ICreateUser) => {
      await api.post("/users", data).then(res => res.data)
    },
    onSuccess: () => {
      console.log("usuario criado com sucesso")
    }
  })

  return mutation
}

interface ILoginUser {
  email: string
  password: string
}

export const useLoginUser = () => {
  const me = useMeUser()
  const mutation = useMutation({
    mutationKey: "loginUser",
    mutationFn: async (data: ILoginUser) => {
      await api.post("/login", data).then(async res => {

        await AsyncStorage.setItem("token", res.data.token)

        return res.data
      })
    },
    onSuccess: () => {
      console.log("usuario logado com sucesso")
      me.mutate()
    }
  })

  return mutation
}


export const useMeUser = () => {
  const setUser = useUserStore(state => state.setUser)
  const query = useMutation({
    mutationKey: "meUser",
    mutationFn: async () => {
      const token = await AsyncStorage.getItem("token")
      if (!token) Promise.reject("token not found")

      const data = await api.get("/me", { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)

      return data
    },
    onSuccess: (data) => {
      console.log("dados do usuário obtidos com sucesso")
      console.log(data)
      setUser(data)
    }
  })

  return query
}
