import { AlertContextProvider } from "../../context/Alert/alertContext"
import { GitHubContextProvider } from "../../context/github/Githubcontex"
import Alert from "../layouts/Alert"

import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"
function Home() {
  return (
    <GitHubContextProvider>
      <AlertContextProvider>
        <div>
          <Alert />
        </div>
        <div className="container mx-auto px-3 pb-12">
          <UserSearch />
          <UserResults />
        </div>
      </AlertContextProvider>
    </GitHubContextProvider>
  )
}
export default Home
