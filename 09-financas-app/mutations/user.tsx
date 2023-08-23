import { useMutation, useQuery } from "react-query";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserStore } from "../stores/useUserStore";
import { AxiosError } from "axios";

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
      console.debug("usuario criado com sucesso")
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
      console.debug("usuario logado com sucesso")
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
      console.debug("dados do usuário obtidos com sucesso")
      setUser(data)
    }
  })

  return query
}


export interface IPostReceive {
  description: string
  value: number
  date: string
  type: "receita" | "despesa"
}

export const usePostReceive = () => {
  const mutation = useMutation({
    mutationKey: "postReceive",
    mutationFn: async (data: IPostReceive) => {

      const token = await AsyncStorage.getItem("token")
      if (!token) Promise.reject("token not found")

      return await api.post("/receive", data, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)
    },
    onSuccess: () => {
      console.debug("registrado com sucesso")
    }
  })

  return mutation
}

interface IDeleteReceive {
  item_id: string
}
export const useDeleteReceive = () => {
  const mutation = useMutation({
    mutationKey: "deleteReceive",
    mutationFn: async (data: IDeleteReceive) => {

      const token = await AsyncStorage.getItem("token")
      if (!token) Promise.reject("token not found")

      return await api.delete("/receives/delete", { params: { item_id: data.item_id }, headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)
    },
    onSuccess: () => {
      console.debug("registro deletado com sucesso")
    },
    onError: (e) => {
      console.debug("erro ao deletar registro")
      if (e instanceof AxiosError) {
        console.log(e.response)

      }
    }
  })

  return mutation
}

