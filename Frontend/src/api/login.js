import { postLogin } from "../api/authService"

const login = async (username, password) => {
    const response = await postLogin(username, password);  
    if (response.status != 200) {
        throw new Error("Invalid credentials");
    }

    return response
}

export {
    login,
}