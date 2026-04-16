import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { login } from "../../api/login"

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) setToken(storedToken);
    }, []);

    async function handleLogin(username, password) {
        const response = await login(username, password);
        const token = response.data.token;
        setToken(token);

        localStorage.setItem("token", token);
    }

    const isAuthenticated = !!token;

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, handleLogin, isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

