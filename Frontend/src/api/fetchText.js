import { getRandomText } from "../api/textService"

const fetchRandomText = async () => {
    const response = await getRandomText()
    return response.data
}

export {
    fetchRandomText
}