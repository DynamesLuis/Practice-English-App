import api from './axios'

export const getWords = (page, size) => {
    return api.get(`/word?page=${page}&size=${size}`)
}

export const getRandomWord = () => {
    return api.get("word/random")
}

export const postWord = (newWord) => {
    return api.post("/word", newWord)
}

export const deleteWord = (idWord) => {
    return api.delete(`/word/${idWord}`)
}