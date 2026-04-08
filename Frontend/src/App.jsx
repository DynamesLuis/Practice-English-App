import { RouterProvider } from "react-router-dom"
import { routes } from "./routes.jsx"
import { AuthProvider } from "../src/auth/context/AuthProvider.jsx"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
