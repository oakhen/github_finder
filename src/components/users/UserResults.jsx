import { useContext, useEffect } from "react"
import UsersItem from "./UsersItem"
import githubContext from "../../context/github/Githubcontex"
function UserResults() {
  const { users, loading } = useContext(githubContext)

  if (loading) {
    return <button className="btn loading">loading</button>
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2">
        {users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}
export default UserResults

