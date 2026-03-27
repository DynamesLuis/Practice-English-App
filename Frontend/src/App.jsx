import { RouterProvider } from "react-router-dom"
import { routes } from "./routes.jsx"
//import LoginPage from "./pages/LoginPage.jsx"

function App() {
  return (
    <RouterProvider router={routes} />
    //<LoginPage/>
  )
}

export default App
