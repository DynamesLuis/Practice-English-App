import { getRandomWord } from "../api/wordService"

const fetchRandomWord = async () => {
    const response = await getRandomWord();
    return response.data;
}

export {
    fetchRandomWord
}