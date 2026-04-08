import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

const postLogin = (username, password) => {
    return api.post("/auth/login", { username, password });
}

const postRegister = (username, password) => {
    return api.post("/auth/register", { username, password });
}

export {
    postLogin,
    postRegister
}