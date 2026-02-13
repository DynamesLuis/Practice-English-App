import api from './axios'

export const getWords = () => {
    return api.get("/word")
}

export const postWord = (newWord) => {
    return api.post("/word", newWord)
}

export const deleteWord = (idWord) => {
    return api.delete(`/word/${idWord}`)
}