import { RouterProvider } from "react-router-dom"
import { routes } from "./routes.jsx"
import { AuthProvider } from "../src/auth/context/AuthProvider.jsx"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            border: "2px solid #13a4ec",
            padding: "16px",
          },
        }} />
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
