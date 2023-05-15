import { useContext, useState } from "react"
import githubContext, {
  GitHubContextProvider,
} from "../../context/github/Githubcontex"
import alertContex from "../../context/Alert/alertContext"
import { loading, searchUser } from "../../context/github/GithubActions"
GitHubContextProvider

function UserSearch() {
  const [text, setText] = useState("")

  const { users, dispatch } = useContext(githubContext)
  const { setAlert } = useContext(alertContex)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("provide text", "error")
    } else {
      dispatch({ type: "SET_LOADING" })
      const users = await searchUser(text)
      dispatch({ type: "POPULATE_USER", users: users })
    }
    setText("")
  }
  const handleChange = (e) => setText(e.target.value)

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control mx-30">
            <div className="relative">
              <input
                type="text"
                className="w-full  pr-40  bg-gray-200 input input-sm text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-sm"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-sm"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}
export default UserSearch
