import { createBrowserRouter, Navigate } from "react-router-dom"
import Layout from "./layouts/Layout.jsx"
import HomePage from "./pages/HomePage.jsx"
import AddPage from "./pages/AddPage.jsx"
import PracticePage from "./pages/PracticePage.jsx"
import AddWordPage from "./pages/AddWordPage.jsx"
import AddTextPage from "./pages/AddTextPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ProtectedRoutes from "./ProtectedRoutes.jsx"

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: (
            <ProtectedRoutes>
                <Layout />
            </ProtectedRoutes>
        ),
        children: [
            // {
            //     index: true,
            //     element: <Navigate to={"/home"} />
            // },
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/addPage",
                element: <AddPage />
            },
            {
                path: "/addWordPage",
                element: <AddWordPage />
            },
            {
                path: "/addTextPage",
                element: <AddTextPage />
            },
            {
                path: "/practicePage",
                element: <PracticePage />
            },
        ]

    },
])