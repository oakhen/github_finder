import { createContext, useReducer } from "react"
import { gitbutReducer } from "./GithubReducer"

const githubContext = createContext()
/* provider component */
const GitHubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repo: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(gitbutReducer, initialState)

  const loading = () => {
    dispatch({
      type: "SET_LOADING",
    })
  }

  return (
    <githubContext.Provider
      value={{
        ...state, // ye bohot jada sahi chiz tha jo humko suru se hi karna chahiye tha
        dispatch,
      }}
    >
      {children}
    </githubContext.Provider>
  )
}

export { githubContext as default, GitHubContextProvider }
