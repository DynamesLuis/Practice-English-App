import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
//guardar texto grande
// obtener una palabra random
//obtener un texto random
// páginación desde el backend
// otros datos del Home
// arreglar put de words
