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

  const searchUser = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })

    const url = `https://api.github.com/search/users?${params}`
    loading()
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    })
    const { items } = await res.json()

    dispatch({
      type: "POPULATE_USER",
      users: items,
    })
  }

  /* get repo lists */

  const getRepo = async (login) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    })

    const url = `https://api.github.com/users/${login}/repos?${params}`
    loading()
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    })
    const data = await res.json()

    dispatch({
      type: "POPULATE_REPO",
      repo: data,
    })
  }

  const getUser = async (login) => {
    const url = `https://api.github.com/users/${login}`
    loading()
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`,
      },
    })

    if (res.status === 404) {
      window.location = "/notFound"
    } else {
      const data = await res.json()

      dispatch({
        type: "GET_USER",
        user: data,
      })
    }
  }

  return (
    <githubContext.Provider
      value={{
        ...state, // ye bohot jada sahi chiz tha jo humko suru se hi karna chahiye tha
        searchUser,
        dispatch,
        getUser,
        getRepo,
      }}
    >
      {children}
    </githubContext.Provider>
  )
}

/* hum yaha pe ek chize ache se nai samjhe hai wo hai. fetch request bhejte hai  */
export { githubContext as default, GitHubContextProvider }
