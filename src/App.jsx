import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import { createBrowserRouter } from "react-router-dom"
import About from "./components/routes/About"
import NotFound from "./components/routes/NotFound"
import Home from "./components/routes/Home"
import { GitHubContextProvider } from "./context/github/Githubcontex"
import User from "./components/routes/User"

/* creating browser router outlet is a pain */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="flex flex-col justify-between h-screen ">
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    ),
    // children: [{ path: "/about", element: <About /> }],
  },
  {
    path: "/about",
    element: (
      <div className="flex flex-col justify-between h-screen ">
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div className="flex flex-col justify-between h-screen ">
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/user/:login",
    element: (
      <GitHubContextProvider>
        <div className="flex flex-col justify-between h-screen ">
          <Navbar />
          <User />
          <Footer />
        </div>
      </GitHubContextProvider>
    ),
  },
])

function App() {
  return (
    <GitHubContextProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">content</main>

        <Footer />
      </div>
    </GitHubContextProvider>
  )
}
export { router, App as default }
