import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout.jsx"
import HomePage from "./pages/HomePage.jsx"
import AddPage from "./pages/AddPage.jsx"
import PracticePage from "./pages/PracticePage.jsx"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/addPage",
                element: <AddPage />
            },
            {
                path: "/practicePage",
                element: <PracticePage />
            }
        ]

    }
])