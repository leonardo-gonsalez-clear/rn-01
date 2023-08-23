import { useQuery } from "react-query";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

interface IGetReceive {
  description: string
  value: number
  type: "receita" | "despesa"
  date: string
  id: string
}

export const useGetRecives = () => {
  const query = useQuery<IGetReceive[]>({
    queryKey: "getRecives",
    queryFn: async () => {
      const token = `Bearer ${await AsyncStorage.getItem("token")}`
      const res = await api.get("/receives", {
        headers: { Authorization: token },
        data: { date: format(new Date, "dd/MM/yyyy") }
      })
        .then(res => res.data)
      return res
    },
    onSuccess: (data) => {
      console.debug("receives fetched successfully")
      console.log(data)
    },
    onError: (error) => {
      console.debug("error fetching receives")
      console.log(error)
    }

  })

  return query
}

interface IGetBalance {
  date: string
}

export const useGetBalance = () => {
  const mutation = useQuery<IBalance[]>({
    queryKey: "getUserBalance",
    queryFn: async () => {
      const date = format(new Date, "dd/MM/yyyy")
      const token = await AsyncStorage.getItem("token")
      if (!token) Promise.reject("token not found")

      return await api.get("/balance", { headers: { Authorization: `Bearer ${token}` }, data: { date } }).then(res => res.data)
    },
    onSuccess: () => {
      console.debug("saldo obtido com sucesso")
    }
  })

  return mutation
}

