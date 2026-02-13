import api from './axios'

export const getTexts = () => {
    return api.get("/text")
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