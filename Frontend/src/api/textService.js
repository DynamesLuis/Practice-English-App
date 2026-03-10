import api from './axios'

export const getTexts = (page, size) => {
    return api.get(`/text?page=${page}&size=${size}`)
}

export const getTextByTitle = (title, page, size) => {
    return api.get(`/text/search?title=${title}&page=${page}&size=${size}`)
}

export const getRandomText = () => {
    return api.get("/text/random")
}

export const postText = (newText) => {
    return api.post("/text", newText)
}

export const deleteText = (textId) => {
    return api.delete(`/text/${textId}`)
}

export const putText = (textId, title, text) => {
    return api.put(`/text/${textId}`, null, {
        params: { title, text }
    });
}