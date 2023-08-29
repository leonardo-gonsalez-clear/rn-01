import { Action, ActionFromReducer } from "redux"

const initialState = {
  email: "teste@teste.com",
  password: "123123"
}


const AuthReducer = (state: typeof initialState[] = [], action: Action) => {

  if (state.length === 0) {
    return initialState
  }

  if (action.type === "changeEmail") {
    return { ...state, email: action.payload }
  }

  return state
}

export default AuthReducer
