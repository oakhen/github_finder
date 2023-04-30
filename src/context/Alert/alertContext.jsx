import { createContext, useReducer } from "react"

const alertContex = createContext()

const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload
    case "REMOVE_ALERT":
      return {}
    default:
      return state
  }
}

const AlertContextProvider = ({ children }) => {
  const initialState = {}
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    })

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000,
    )
  }
  return (
    <alertContex.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </alertContex.Provider>
  )
}

export { AlertContextProvider, alertContex as default }
